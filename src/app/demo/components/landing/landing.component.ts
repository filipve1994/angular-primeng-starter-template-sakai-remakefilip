import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {DividerModule} from "primeng/divider";

import {LandingRoutingModule} from "@demo/components/landing/landing-routing.module";
import {StyleClassModule} from "primeng/styleclass";
import {ChartModule} from "primeng/chart";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {LayoutService} from "@layout/service/app.layout.service";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    Ripple
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(public layoutService: LayoutService, public router: Router) {
  }

}
