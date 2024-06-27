import { Component, OnInit } from '@angular/core';
import { TreeNode} from 'primeng/api';
import {NodeService} from "@demo/service/node.service";
import {TreeModule} from "primeng/tree";
import {TreeTableModule} from "primeng/treetable";
import {CommonModule} from "@angular/common";
import {TreedemoRoutingModule} from "@demo/components/uikit/treedemo/treedemo-routing.module";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-treedemo',
  standalone: true,
  imports: [
    CommonModule,
    // TreedemoRoutingModule,
    FormsModule,
    TreeModule,
    TreeTableModule
  ],
  templateUrl: './treedemo.component.html',
  styleUrl: './treedemo.component.scss'
})
export class TreeDemoComponent implements OnInit {

  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  selectedFiles1: TreeNode[] = [];

  selectedFiles2: TreeNode[] = [];

  selectedFiles3: TreeNode = {};

  cols: any[] = [];

  constructor(private nodeService: NodeService){}

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);
    this.nodeService.getFiles().then(files => {
      this.files3 = [{
        label: 'Root',
        children: files
      }];
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }
}
