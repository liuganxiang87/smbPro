import { BaseFormControls } from './base-form-controls';

export class FormTextarea  extends BaseFormControls<string> {
    controlType = "textarea";
    rows: number;
    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || 1;
    }



}
