import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() taskAdded = new EventEmitter();

  @Output() cancel = new EventEmitter<void>();


  onCancel() {
    this.cancel.emit();
  }
}
