import { Task } from '../tasks';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task!: Task;
  @Output() formDataEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  taskForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  ngOnInit(): void {
    if (this.task !== undefined) {
      this.taskForm.setValue({
        title: this.task.title,
        description: this.task.description
      })
    }
  }

  onSubmit(): void {
    this.formDataEvent.emit(this.taskForm.value);
  }

  get title() { return this.taskForm.get('title'); }

  get description() { return this.taskForm.get('description'); }
}
