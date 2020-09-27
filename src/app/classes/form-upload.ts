
import { BaseFormControls } from './base-form-controls';
export class FormUpload extends BaseFormControls<string>{
    controlType = "upload";

    nzAction: any;
    nzListType: string;
    nzFileList: any[];
    nzText: string;
    nzVisible: boolean;
    nzShowUploadList: any;
    nzHeaders: any;
    nzMax: number;
    nzSize: number;
    constructor(options: {} = {}) {
        super(options);
        this.nzAction = options['nzAction'] || null;
        this.nzListType = options['nzListType'] || 'picture-card';
        this.nzFileList = options['nzFileList'] || [];
        this.nzText = options['nzText'] || '';
        this.nzVisible = options['nzVisible'] || false;
        this.nzShowUploadList = options['nzShowUploadList'] || {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        }
        this.nzHeaders = options['nzHeaders'] || null;
        this.nzMax = options['nzMax'] || 1;
        this.nzSize = options['nzSize'] || 5120;
    }


}
