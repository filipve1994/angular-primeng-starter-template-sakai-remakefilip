import {Component} from '@angular/core';
import {Message, MessageService} from 'primeng/api';

import {MessagesdemoRoutingModule} from "@demo/components/uikit/messagesdemo/messagesdemo-routing.module";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-messagesdemo',
  standalone: true,
  imports: [
    MessagesModule,
    MessageModule,
    ButtonModule,
    ToastModule,
    InputTextModule
],
  templateUrl: './messagesdemo.component.html',
  styleUrl: './messagesdemo.component.scss',
  providers: [MessageService]
})
export class MessagesDemoComponent {

  msgs: Message[] = [];

  constructor(private service: MessageService) {
  }

  showInfoViaToast() {
    this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }

  showWarnViaToast() {
    this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }

  showErrorViaToast() {
    this.service.add({key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
  }

  showSuccessViaToast() {
    this.service.add({key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent'});
  }

  showInfoViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }

  showWarnViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }

  showErrorViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
  }

  showSuccessViaMessages() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Message sent'});
  }

}
