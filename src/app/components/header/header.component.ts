import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: []
})
export class HeaderComponent {
  constructor(private uiService: UiService) {}

  onAddClick() {
    this.uiService.toggleAddTask();
  }
}