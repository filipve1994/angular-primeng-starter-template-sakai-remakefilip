import {Component, OnDestroy, OnInit} from '@angular/core';

import {MiscdemoRoutingModule} from "@demo/components/uikit/miscdemo/miscdemo-routing.module";
import {ProgressBarModule} from "primeng/progressbar";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TagModule} from "primeng/tag";
import {ChipModule} from "primeng/chip";
import {ButtonModule} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";
import {AvatarGroupModule} from "primeng/avatargroup";
import {ScrollTopModule} from "primeng/scrolltop";

@Component({
  selector: 'app-miscdemo',
  standalone: true,
  imports: [
    ProgressBarModule,
    BadgeModule,
    AvatarModule,
    ScrollPanelModule,
    TagModule,
    ChipModule,
    ButtonModule,
    SkeletonModule,
    AvatarGroupModule,
    ScrollTopModule
],
  templateUrl: './miscdemo.component.html',
  styleUrl: './miscdemo.component.scss'
})
export class MiscDemoComponent implements OnInit, OnDestroy {

  value = 0;

  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        clearInterval(this.interval);
      }
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
