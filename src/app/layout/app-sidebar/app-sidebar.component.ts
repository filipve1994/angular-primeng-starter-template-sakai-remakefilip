import {Component, ElementRef} from '@angular/core';
import {LayoutService} from "@layout/service/app.layout.service";
import {AppMenuComponent} from "@layout/app-menu/app-menu.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {
  }
}

