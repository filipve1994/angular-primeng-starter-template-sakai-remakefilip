import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import {LayoutService} from "@layout/service/app.layout.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {DashboardRoutingModule} from "@demo/components/dashboard/dashboard-routing.module";
import {Product} from "@demo/api/product";
import {ProductService} from "@demo/service/product.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  items!: MenuItem[];

  products!: Product[];

  chartData: any;

  chartOptions: any;

  subscription!: Subscription;

  constructor(private productService: ProductService, public layoutService: LayoutService) {
    console.log('constructor dashboardcomponent');
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe((config) => {
        this.initChart();
      });
  }

  ngOnInit() {
    console.log('ngoninit dashboardcomponent');

    this.initChart();
    this.productService.getProductsSmall().then(data => this.products = data);

    this.items = [
      { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
  }

  initChart() {
    console.log('initChart dashboardcomponent');

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
          borderColor: documentStyle.getPropertyValue('--bluegray-700'),
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--green-600'),
          borderColor: documentStyle.getPropertyValue('--green-600'),
          tension: .4
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
