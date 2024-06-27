import {Component, OnInit} from '@angular/core';
import {IconService} from "@demo/service/icon.service";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule
  ],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {

  icons: any[] = [];

  filteredIcons: any[] = [];

  selectedIcon: any;

  constructor(private iconService: IconService) {
  }

  ngOnInit() {
    this.iconService.getIcons().subscribe(data => {
      data = data.filter(value => {
        return value.icon.tags.indexOf('deprecate') === -1;
      });

      let icons = data;
      icons.sort((icon1, icon2) => {
        if (icon1.properties.name < icon2.properties.name)
          return -1;
        else if (icon1.properties.name < icon2.properties.name)
          return 1;
        else
          return 0;
      });

      this.icons = icons;
      this.filteredIcons = data;
    });
  }

  onFilter(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value;

    if (!searchText) {
      this.filteredIcons = this.icons;
    } else {
      this.filteredIcons = this.icons.filter(it => {
        return it.icon.tags[0].includes(searchText);
      });
    }
  }
}
