import { BaseFormControls } from './base-form-controls';

export class FormDropdown extends BaseFormControls<string>{
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
      }
}
