import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { PaymentComponent } from './payment.component';
import { SeatComponent } from './seat.component';
import { PersonalComponent } from './personal.component';
import { ConfirmationComponent } from './confirmation.component';

const routes: Routes = [
  {
    path: '', component: MenusComponent, children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'seat', component: SeatComponent },
      { path: 'payment', component: PaymentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusdemoRoutingModule { }
