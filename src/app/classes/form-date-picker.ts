import { BaseFormControls } from './base-form-controls';

export class FormDatePicker extends BaseFormControls<string> {
    controlType = 'datePicker';
    isRange:boolean;
    constructor(options: {} = {}) {
        super(options);
        this.isRange=options['isRange']||false;
     
      }
}
