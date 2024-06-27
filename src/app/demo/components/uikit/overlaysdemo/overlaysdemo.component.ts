import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

import {OverlaysdemoRoutingModule} from "@demo/components/uikit/overlaysdemo/overlaysdemo-routing.module";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {Product} from "@demo/api/product";
import {ProductService} from "@demo/service/product.service";


@Component({
  selector: 'app-overlaysdemo',
  standalone: true,
  imports: [
    ToastModule,
    DialogModule,
    FormsModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    ConfirmDialogModule,
    SidebarModule,
    RippleModule,
    ConfirmPopupModule
],
  templateUrl: './overlaysdemo.component.html',
  styleUrl: './overlaysdemo.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class OverlaysDemoComponent implements OnInit {

  images: any[] = [];

  display: boolean = false;

  products: Product[] = [];

  selectedProduct: Product = {};

  visibleSidebar1: boolean = false;

  visibleSidebar2: boolean = false;

  visibleSidebar3: boolean = false;

  visibleSidebar4: boolean = false;

  visibleSidebar5: boolean = false;

  constructor(private productService: ProductService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => this.products = products);

    this.images = [];
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos1.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos2.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos3.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
    });
    this.images.push({
      source: 'assets/demo/images/sopranos/sopranos4.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
    });
  }

  confirm1() {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?'
    });
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
      key: 'confirm2',
      target: event.target || new EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
      }
    });
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }

}
