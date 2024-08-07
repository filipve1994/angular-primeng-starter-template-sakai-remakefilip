import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {DividerModule} from "primeng/divider";
import {StyleClassModule} from "primeng/styleclass";
import {ChartModule} from "primeng/chart";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    // LandingComponent
  ],
  imports: [
    CommonModule,
    // LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule
  ]
})
export class LandingModule { }
