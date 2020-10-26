
/**
 * 通常用 readonly: boolean;ngStyle: any;两个属性配合来取代 isDisabled ，
 * 原因是因为设置为disabled=true后，就不会再校验输入框了，
 * 而且默认valid =false，给动态表单校验带来了不便，
 * 但如果只是表单查看，无疑isDisable  效率更高效，性能更好
 * 
 */

export class BaseFormControls<T> {
    value: T;
    key: string;
    label: string;
    isNeedful: boolean;
    errorHint: string;
    required: boolean;
    maxLength: number;
    customCheck: string;//自定义校验 (正则字符串)
    order: number;
    controlType: string;
    type: string;
    icon: string;
    placeholder: string;
    width: string;
    hasInputBt: boolean;
    hasNoColon: boolean;
    hor_label_nzSpan: number;
    hor_control_nzSpan: number;
    isDisabled: boolean;
    isHidden: boolean;
    readonly: boolean;
    ngStyle: any;
    gridCol: number;
    // options: { key: string, value: string }[];
    nzLayout: string;
    completeData: any;
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        isNeedful?: boolean,
        errorHint?: string,
        required?: boolean,
        maxLength?: number,
        customCheck?: string,
        order?: number,
        controlType?: string,
        type?: string,
        icon?: string,
        placeholder?: string,
        width?: string,
        hasInputBt?: boolean,
        hasNoColon?: boolean,
        hor_label_nzSpan?: number,
        hor_control_nzSpan?: number,
        isDisabled?: boolean,
        isHidden?: boolean,
        readonly?: boolean,
        ngStyle?: any,
        gridCol?: number,
        nzLayout?: string;
        completeData?: any;  //完整数据
    } = {}) {
        this.value = options.value;
        this.key = options.key || null;
        this.label = options.label || '';
        this.isNeedful = options.isNeedful === false ? false : true//默认是必须要穿的参数
        this.errorHint = options.errorHint || null;
        this.required = !!options.required;
        this.maxLength = options.maxLength || undefined;
        this.customCheck = options.customCheck || null;  //客户自定义校验正则
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || 'text';
        this.icon = options.icon || '';
        this.placeholder = options.placeholder || '';
        this.width = options.width || "auto";
        this.hasInputBt = options.hasInputBt || false;
        this.hasNoColon = options.hasNoColon || false;
        this.hor_label_nzSpan = options.hor_label_nzSpan || 8;
        this.hor_control_nzSpan = options.hor_control_nzSpan || 8;
        this.isDisabled = options.isDisabled || false;
        this.isHidden = options.isHidden || false;
        this.readonly = options.readonly || false;
        this.ngStyle = options.ngStyle;
        this.gridCol = options.gridCol || 8;
        this.nzLayout = options.nzLayout || 'vertical';
        this.completeData = options.completeData || null;
    }
}
