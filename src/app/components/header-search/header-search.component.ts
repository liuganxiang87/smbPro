import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormControls } from 'src/app/classes';
import { FormControlService } from 'src/app/services';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {
  @Input() bfcs: BaseFormControls<string>[] = [];
  @Input() button_text: string = '搜索';
  @Input() showSearchBt: boolean = false;
  @Output() submitForm = new EventEmitter();
  @Output() ngSwitchChange = new EventEmitter();
  // @Input()openText:string='是';
  // @Input()closeText:string='否';
  form: FormGroup;

  constructor(private fcs: FormControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.bfcs);
    console.log('::$$###:::', this.form)
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
    // console.log( '###',this.payLoad)
    this.submitForm.emit(this.form.getRawValue());
  }
  switchChange() {
    this.ngSwitchChange.emit(this.form.getRawValue())
  }

}
