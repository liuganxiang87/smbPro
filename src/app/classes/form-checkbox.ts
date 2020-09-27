import { BaseFormControls } from './base-form-controls';

export class FormCheckbox extends BaseFormControls<string>{
    controlType = "checkbox";
    isMuchCheck: boolean;
    checkLabel: string;
    isAsRadio: boolean;
    checkOptions: { label: string, value: string, checked: boolean }[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.checkOptions = options['checkOptions'] || [];
        this.isMuchCheck = options['isOneCheck'] || false;
        this.checkLabel = options['checkLabel'] || '';
        this.isAsRadio = options['isAsRadio'] || false;
    }

}
