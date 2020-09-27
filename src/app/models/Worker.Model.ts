export class WorkerModel {

    public worker_id: number; // 员工ID
    public zone_id: number; // 基金园区编码
    public w_name: string; // 员工姓名
    public w_sex: string; // M: 男  F： 女
    public w_password: string; //
    public w_id_card: string; // 证件号码
    public w_phone: string; // 手机
    public w_email: string; // 邮箱
    public w_if_control_centre: string; // 是否有权进控制中心： T=是， F= 不是
    public w_if_client_manager: string; // 是否客户经理： T=是， F=不是
    public w_if_accountant: string; // 是否是财务经理： T=是， F=不是
    public w_if_risk_control: string; // 是否风控：T=是， F=否
    public w_if_industry_commerce: string; // 是否工商： T=是， F=否
    public w_if_tax_admin: string; // 是否税务：T=是， F=否
    public w_if_bank_biz: string; // 是否银行业务: T=是， F=否
    public w_if_pub_security: string; // 是否公安岗位：T=是， F=否
    public w_if_clerk: string; // 是否行政岗
    public w_department: string; // 部门
    public w_position: string; // 职务
    public w_addr: string; // 地址：
    public w_on_duty: string; // T: 在职， F: 离职
    public w_off_duty_reason: string; // 离职原因： 0=<空> （在职） 1=正常退休 2=因病退休 3=主动辞职 4=公司辞退 5=公司除名 6=失联
    public w_logon_ip: string; //
    public w_logon_dtime: string; //
    public w_modify_worker_id: number; // 最近修改本记录的工号
    public w_midify_time: string; // 最近修改时间
    public create_dtime: string; // 创建时间

    //辅助字段
    public re_password: string;  //重复手机号码
    public last_password: string; //原密码（修改密码时使用）
    public checked: boolean = false;
}

export class WorkerHelper {
    // 手机
    public flag_w_phone: boolean = false;
    public info_w_phone: string = '';
    //密码
    public flag_w_password: boolean = false;
    public info_w_password: string = '';
    //验证码
    public flag_code: boolean = false;
    public info_code: string = '';
    //重复手机号码
    public flag_repassword: boolean = false;
    public info_repassword: string;
    //原密码（修改密码时使用）
    public flag_last_password: boolean = false;
    public info_last_password: string;

    check() {
        return this.flag_w_phone || this.flag_w_password || this.flag_code || this.flag_repassword
            || this.flag_last_password;
    }
}
