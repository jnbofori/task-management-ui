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
    status: new FormControl('')
  });

  statusOptions: { value: string, viewValue: string }[] = [
    {value: 'pending', viewValue: 'Pending'},
    {value: 'completed', viewValue: 'Completed'},
  ];

  ngOnInit(): void {
    if (this.task !== undefined) {
      this.taskForm.setValue({
        title: this.task.title,
        description: this.task.description,
        status: this.task.status
      })

      if (this.task.status === 'completed') {
        this.taskForm.controls['title'].disable();
        this.taskForm.controls['description'].disable();
      }
    }
    if (!this.task) {
      this.taskForm.controls['status'].disable();
    }
  }

  onSubmit(): void {
    this.formDataEvent.emit(this.taskForm.value);
  }

  get title() { return this.taskForm.get('title'); }

  get description() { return this.taskForm.get('description'); }
}
