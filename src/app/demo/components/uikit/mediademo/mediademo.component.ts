import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MediademoRoutingModule} from "@demo/components/uikit/mediademo/mediademo-routing.module";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {GalleriaModule} from "primeng/galleria";
import {CarouselModule} from "primeng/carousel";
import {ProductService} from "@demo/service/product.service";
import {PhotoService} from "@demo/service/photo.service";
import {Product} from "@demo/api/product";


@Component({
  selector: 'app-mediademo',
  standalone: true,
  imports: [
    CommonModule,
    // MediademoRoutingModule,
    ButtonModule,
    ImageModule,
    GalleriaModule,
    CarouselModule
  ],
  templateUrl: './mediademo.component.html',
  styleUrl: './mediademo.component.scss'
})
export class MediaDemoComponent implements OnInit {

  products!: Product[];

  images!: any[];

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private productService: ProductService, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });

    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }

}
