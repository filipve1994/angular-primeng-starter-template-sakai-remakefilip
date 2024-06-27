import { Component } from '@angular/core';
import {ButtonDirective, ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    ButtonModule,
    Ripple,
    RouterModule
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

}
