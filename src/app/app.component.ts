import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslocoDirective, TranslocoPipe, TranslocoService} from "@jsverse/transloco";
import {PrimeNGConfig} from "primeng/api";
import {AppLayoutComponent} from "@layout/app-layout/app-layout.component";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {CountryService} from "@demo/service/country.service";
import {CustomerService} from "@demo/service/customer.service";
import {EventService} from "@demo/service/event.service";
import {PhotoService} from "@demo/service/photo.service";
import {ProductService} from "@demo/service/product.service";
import {NodeService} from "@demo/service/node.service";
import {IconService} from "@demo/service/icon.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // BrowserModule,
    // FormsModule,
    // BrowserAnimationsModule,
    RouterOutlet,
    TranslocoPipe,
    TranslocoDirective,
    AppLayoutComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-primeng-starter-template-sakai-remakefilip';

  constructor(private translocoService: TranslocoService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  switchLanguage(lang:string) {
    this.translocoService.setActiveLang(lang);
  }
}
