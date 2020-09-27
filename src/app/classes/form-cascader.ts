
import { BaseFormControls } from './base-form-controls';
export class FormCascader extends BaseFormControls<string> {
    controlType = "cascader";
    nzOptions: any[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.nzOptions = options['nzOptions'] || [];
    }
}
