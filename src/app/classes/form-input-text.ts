import { BaseFormControls } from './base-form-controls';
export class FormInputText extends BaseFormControls<string>{
  controlType = 'textInput';
  addOnAffter: string;
  nzPrefixIcon: string;
  hasAffterEvent: boolean;
  button_isDisabled: boolean;
  btContent: string;
  constructor(options: {} = {}) {
    super(options);
    this.hasAffterEvent = options['hasAffterEvent'] || false;
    this.button_isDisabled = options['button_isDisabled'] || false;
    this.addOnAffter = options['addOnAffter'] || '';
    this.nzPrefixIcon = options['nzPrefixIcon'] || '';
    // this.btContent=options['btContent']||''
  }
}
