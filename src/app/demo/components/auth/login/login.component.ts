import { Component } from '@angular/core';
import {ButtonDirective, ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";
import {LayoutService} from "@layout/service/app.layout.service";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    Ripple,
    CheckboxModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) { }
}
