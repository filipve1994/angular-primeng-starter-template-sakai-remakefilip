import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks/blocks.component';
import { PrimeblocksRoutingModule } from './primeblocks-routing.module';
import { BlockviewerComponent } from './blockviewer/blockviewer.component'
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    // BlocksComponent, BlockViewerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    TooltipModule,
    PrimeblocksRoutingModule
  ]
})
export class PrimeblocksModule { }
