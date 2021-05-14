import { Component, OnInit } from '@angular/core';
import {Task} from './../../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  tasks:Task[] = [
    new Task (1,"Work out","Jogging and jumping for one hour a day", new Date(2021,1,14)),
    new Task (2,"Healthy eating","A fruit a day, keeps medication away",new Date(2022,2,14)),
    new Task (3,"Study","learn Angular, react and vie js",new Date(2019,3,14)),
    new Task (4,"book reading","read a non fictional and a fictiona book every month",new Date(2021,4,14)),
    new Task (5,"making friends","make at least one frined per week",new Date(2022,5,14)),
    new Task (6,"good sleep","enjoy sleep from 9pm to 8 am",new Date(2023,6,14)),
    new Task (7,"meditation","solitude time,breathe in.. breathe out...",new Date(2023,6,14)),
  ]

  toggleDetails(index){
    this.tasks[index].showDescription = !this.tasks[index].showDescription
  }

  addNewTask(task){
    let taskLength = this.tasks.length;
    task.id = taskLength+1;
    task.completeDate = new Date(task.completeDate);
    this.tasks.push(task);
  }

  deleteTask(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.tasks[index].title}?`)
      if(toDelete){
        this.tasks.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
