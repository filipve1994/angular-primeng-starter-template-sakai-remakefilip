import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";

enum BlockView {
  PREVIEW,
  CODE
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'block-viewer',
  // selector: 'app-blockviewer',
  standalone: true,
  imports: [
    CommonModule,
    TooltipModule
  ],
  templateUrl: './blockviewer.component.html',
  styleUrl: './blockviewer.component.scss'
})
export class BlockviewerComponent {

  @Input() header!: string;

  @Input() code!: string;

  @Input() containerClass!: string;

  @Input() previewStyle!: object;

  @Input() free: boolean = true;

  @Input() new: boolean = false;

  BlockView = BlockView;

  blockView: BlockView = BlockView.PREVIEW;

  activateView(event: Event, blockView: BlockView) {

    this.blockView = blockView;
    event.preventDefault();
  }


  async copyCode(event: Event) {
    await navigator.clipboard.writeText(this.code);
    event.preventDefault();
  }

}
