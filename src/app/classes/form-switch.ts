import { BaseFormControls } from './base-form-controls';

export class FormSwitch extends BaseFormControls<string> {
    controlType = "switch";
    openText: string;
    closeText: string;
    options: { key: string, value: string }[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.openText = options['openText'] || '';
        this.closeText = options['closeText'] || '';

    }

}
