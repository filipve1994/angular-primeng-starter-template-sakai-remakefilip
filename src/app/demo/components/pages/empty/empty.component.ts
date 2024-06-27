import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {EmptyRoutingModule} from "@demo/components/pages/empty/empty-routing.module";

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [
    CommonModule
    // EmptyRoutingModule
  ],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

}
