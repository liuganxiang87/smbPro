

import { BaseFormControls } from './base-form-controls';

export class FormDivider extends BaseFormControls<string>{
    controlType = "divider";
    dividerDashed: boolean;
    dividerType: string;
    // dividerText:string;
    dividerOrientation: string;
    constructor(options: {} = {}) {
        super(options);
        this.dividerDashed = options['dividerDashed'] || false;
        this.dividerType = options['dividerType'] || 'horizontal'
        this.dividerOrientation = options['dividerOrientation'] || 'center'

    }
}
