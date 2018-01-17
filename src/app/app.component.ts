import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];

  priorityColor(currentTask){
    switch(currentTask.priority) {
      case 3: {
        return "bg-danger";
      }
      case 2: {
        return "bg-warning";
      }
      default: {
        return "bg-info";
      }
    }
    
  }

  editTask() {
    alert("You just made this popup happen. It's your own fault.")
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done){
      console.log("This task is complete");
    } else {
      console.log("This task is not yet complete. You can just do it tomorrow.");
    }
  }
}

export class Task{
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
