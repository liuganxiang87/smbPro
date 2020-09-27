import { BaseFormControls } from './base-form-controls';

export class FormRadio extends BaseFormControls<string> {
    controlType = "radio";
    radioType: number;
    options: { key: string, value: string }[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.radioType = options['radioType'] || 1
    }

}
