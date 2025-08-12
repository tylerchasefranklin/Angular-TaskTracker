import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, TasksComponent, AddTaskComponent]
})
export class AppComponent {
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.onToggle().subscribe((value: boolean) => this.showAddTask = value);
  }
}