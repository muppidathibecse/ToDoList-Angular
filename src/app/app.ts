import { Component, OnInit, signal } from '@angular/core';
import { TASK_LIST, Tasks } from '../Tasks';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor() {}
  TaskList: Tasks[] = [];
  currentTime: string = '';
  task: string = '';
  ngOnInit(): void {
    this.TaskList = TASK_LIST;
  }

  AddTask() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    console.log(this.task, 'Created at', this.currentTime);
    this.TaskList.push({
      list: this.task,
      time: this.currentTime,
    });
  }
  protected readonly title = signal('To-Do');
}