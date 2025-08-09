import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task-modal.html',
  styleUrl: './create-task-modal.css'
})
export class CreateTaskModal {
  @Output() closeModal = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  taskForm: FormGroup;

  priorities = ['High', 'Medium', 'Low'];
  statuses = ['Pending', 'In Progress', 'Completed'];

  constructor() {
    this.taskForm = this.fb.group({
      heading: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  submitTask() {
    if (this.taskForm.valid) {
      const payload = this.taskForm.value;
      console.log('Create task payload:', payload);
      // TODO: Call service to POST task to API
    } else {
      this.taskForm.markAllAsTouched();
    }
  }

  close() {
    this.closeModal.emit();
  }
}
