import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:taskId', component: UpdateTaskComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
