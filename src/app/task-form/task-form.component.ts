import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  newTask = new Task(0,"","",new Date());
  @Output() addTask = new EventEmitter<Task>();

  submitTask(){
    this.addTask.emit(this.newTask)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
