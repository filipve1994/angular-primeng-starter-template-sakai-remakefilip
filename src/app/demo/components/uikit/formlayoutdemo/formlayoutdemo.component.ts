import { Component } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {FormlayoutdemoRoutingModule} from "@demo/components/uikit/formlayoutdemo/formlayoutdemo-routing.module";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-formlayoutdemo',
  standalone: true,
  imports: [
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule
],
  templateUrl: './formlayoutdemo.component.html',
  styleUrl: './formlayoutdemo.component.scss'
})
export class FormLayoutDemoComponent {

  selectedState: any = null;

  states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
  ];

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;

}
