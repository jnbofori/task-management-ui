import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BadgePillComponent } from './badge-pill/badge-pill.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskFormComponent,
    UpdateTaskComponent,
    PageNotFoundComponent,
    BadgePillComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NoopAnimationsModule,

    MatChipsModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
