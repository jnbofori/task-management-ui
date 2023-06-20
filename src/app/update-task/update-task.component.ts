import { Task } from '../tasks';
import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = routeParams.get('taskId');

    this.apiService.getSingleTask(taskIdFromRoute as string).subscribe({
      next: (response) => {
        this.task = response;
      },
      error: (e) => { this.notifyService.notifyError(e.error) },
    });
  }

  updateTask(taskData: any): void {
    this.apiService.updateTask(this.task?._id, taskData).subscribe({
      error: (e) => { this.notifyService.notifyError(e.error) },
      complete: () => {
        this.notifyService.notifySuccess('Task updated successfully')
        this.router.navigate(['']);
      }
    });
  }
}
