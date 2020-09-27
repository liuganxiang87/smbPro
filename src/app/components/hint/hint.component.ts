import { Component, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hint',
  template: '<p class="hint_content"> <span *ngIf="hintFlag"><ng-content></ng-content> </span></p>',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnChanges, OnDestroy {
  @Input() hintFlag: boolean = false;
  @Input() TIMES: number = 1200;
  hint_timer: any;
  @Output() toParent = new EventEmitter()
  constructor() {
  }


  ngOnChanges() {
    let that = this;
    if (that.hintFlag) {

      that.hint_timer = setTimeout(() => {
        that.hintFlag = false;
        that.toParent.emit()
      }, that.TIMES);
    }
  }
  ngOnDestroy(): void {

    if (this.hint_timer) clearTimeout(this.hint_timer)
  }


}
