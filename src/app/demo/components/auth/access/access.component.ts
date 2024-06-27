import { Component } from '@angular/core';
import {ButtonDirective, ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {RouterLink, RouterModule} from "@angular/router";

import {AccessRoutingModule} from "@demo/components/auth/access/access-routing.module";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [
    ButtonModule,
    Ripple,
    RouterModule
],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {

}
