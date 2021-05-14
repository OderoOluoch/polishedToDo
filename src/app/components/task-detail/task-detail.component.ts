import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task:Task;
  @Output() isComplete = new EventEmitter<boolean>();

  taskDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  constructor() { }

  ngOnInit(): void {
  }

}






