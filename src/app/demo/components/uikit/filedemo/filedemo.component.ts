import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import {FormsModule} from "@angular/forms";
import {FiledemoRoutingModule} from "@demo/components/uikit/filedemo/filedemo-routing.module";
import {FileUploadModule} from "primeng/fileupload";

@Component({
  selector: 'app-filedemo',
  standalone: true,
  imports: [
    FormsModule,
    FileUploadModule
],
  templateUrl: './filedemo.component.html',
  styleUrl: './filedemo.component.scss',
  providers: [MessageService]
})
export class FileDemoComponent {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

}
