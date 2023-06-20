import Swal from 'sweetalert2';

import { Task } from '../tasks';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
import { faTrash, faPlus, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  faWrench = faWrench;
  faTrash = faTrash;
  faPlus = faPlus;
  faCheckCircle = faCheckCircle;
  faCalendarCheck =faCalendarCheck

  tasks!: Task[];

  search = new FormControl('');

  debouncedFetchTasks = this.debounce(() => this.fetchTasks());

  constructor(
    private apiService: ApiService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.debouncedFetchTasks();
  }

  fetchTasks() {
    this.apiService.getTasks(this.search.value as string).subscribe({
      next: (response) => {
        this.tasks = response;
      },
      error: (e) => { this.notifyService.notifyError(e.message); },
    });
  }

  async completeTask(taskId: string) {
    this.apiService.completeTask(taskId).subscribe(
      {
        error: (e) => { this.notifyService.notifyError(e.error)  },
        complete: () => {
          this.notifyService.notifySuccess('Task completed successfully')
        }
      }
    );
  }

  async delete(taskId: string) {
    const result = await Swal.fire({
      title: "Confirm Delete?",
      text: "This will delete the task.",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete.",
      customClass: {
        confirmButton: "modal-button",
        cancelButton: "modal-button-danger",
      },
      buttonsStyling: false,
    });

    if (!result.value) {
      return;
    }

    this.apiService.deleteTask(taskId).subscribe(
      {
        error: (e) => { this.notifyService.notifyError(e.error)  },
        complete: () => {
          this.notifyService.notifySuccess('Task deleted successfully')
          this.tasks = this.tasks.filter((task) => task._id !== taskId)
        }
      }
    );
  }

  debounce(func: Function, timeout = 300){
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  getVariant(status: string) {
    if (status === 'completed') {
      return 'success'
    } else if (status === 'pending') {
      return 'warning'
    }
    return 'neutral'
  }
}
