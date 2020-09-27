export class ChannelModel {
    public channel_id: number;  // 渠道ID
    public zone_id: number;  // 园区ID
    public type: number = 1;  // 渠道类别(1: 机构，2：个人)
    public name: string; // 渠道名称
    public id_num: string; // 渠道证件号码
    public address: string; // 渠道地址（机构为公司地址，个人为身份证地址）
    public phone_no: string; // 渠道联系电话
    public email: string; // 渠道email
    public referrer_name: string; // 渠道推荐人姓名
    public referrer_phone: string; // 渠道推荐人手机号
    public file_url: string; // 渠道合同url
    public file_createtime: number;  //  渠道合同生成时间
    public status: number;  //  渠道状态(1: 正常，2:失效)
    public worker_id: number;  //  填写信息员工
    public created_at: number;  //  创建时间
    public updated_at: number;  //  更新时间
    // 辅助字段
    public defaultLiaison: ChannelLiaisonModel = new ChannelLiaisonModel();
    public checked: boolean = false;
}

export class ChannelLiaisonModel {
    public id: number;  // 渠道联络人ID
    public channel_id: number;  // 渠道ID
    public name: string;  // 联络员姓名
    public phone: string;  // 联络员手机号码
    public id_card_no: string;  // 联络员身份证号码
    public address: string;  // 联络员地址
    public is_default: number = 2;  // 是否是默认联络人( 1：是,  2: 不是)
    public worker_id: number;  // 填写信息员工
    public created_at: number;  // 创建时间
    public updated_at: number;  // 更新时间
}
