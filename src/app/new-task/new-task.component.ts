import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private notifyService: NotifyService
  ) {}

  addTask(taskData: any): void {
    this.apiService.addNewTask(taskData).subscribe({
      error: (e) => { this.notifyService.notifyError(e.error) },
      complete: () => {
        this.notifyService.notifySuccess('Task added successfully')
        this.router.navigate(['']);
      }
    });
  }
}
