import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<Event>();

  onMenuClick(event: Event) {
    this.menuClick.emit(event);
  }
}

