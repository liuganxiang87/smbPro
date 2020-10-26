import { COrgPartnerPersonModel } from "./COrgPartnerPerson.Model";
import { CertificationPhotoModel } from "./CertificationPhoto.Model";
import { CAssetPartnerNoteModel } from "./CAssetPartnerNote.Model";
import { AssetinCertificateModel } from "./AssetinCertificate.Model";

export class CustomerPartnerModel {
  public customer_partner_sid: number; // 股东ID
  public customer_org_reg_sid: number; // 园区机构客户办理机构序列号，企业变更则为多条
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public zone_id: number; // 园区号码
  public customer_vol: number; // 机构当前版本，每变更一次加一
  public partner_inner_num: number; // 合伙人/股东，内部顺序号
  public partner_is_person_or_org: string = "1"; // 1=自然人 2=公司 3=有限合伙 4=资管产品 5=其他组织
  public if_excution_partner: string = "F"; //  是否执行事物合伙人（必须是GP）： T: 是， F: 不是，
  public if_limited: string = "T"; //  是否有限责任LP： T:是 LP， F：不是，表示GP
  public partner_name: string; //  合伙机姓名，或者合伙机构名称
  public partnar_sex: string; //  合伙人性别： M:男  F：女
  public partner_country: string = "中国"; // 国别
  public partner_id_type: string = "0"; //  证件类型： 1：身份证，2：企业社会信用代码，3：护照， 4：资管产品号，
  public partner_id_or_org_id: string; //  合伙人身份证号码，或合伙企业社会信用代码，或护照号，或资管产品
  public partner_addr: string; //  个人身份证地址，或企业营业场所
  public partner_race: number; // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public partner_political: number; //  政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public partner_education: number; //  文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public partner_phone_num: string; //  合伙人手机号码，或机构电话
  public partner_form_of_investment: number = 1; // 出资方式： 1、货币，2、劳务，3、股权，4、无形资产
  public partner_registered_capital: number; //: string; //  认缴资金(万)，
  public partner_paid_in_captial: number = 0; //: string; //  实缴资金（万），
  public partner_investment_ratio: number; //  合伙人出资比例， 保留四位小数，除10000
  public partner_investment_date: number; //  合伙人缴付期限
  public partner_wechat_num: string; //  合伙人微信号，或机构的微信公众号
  public partner_qq_num: string; //  合伙人QQ号，或机构微站域名
  public partner_mail_box: string; //  合伙人邮箱，或机构的邮箱
  public partner_verify_status: number = 4; // 审核状态： 1=完全匹配， 2=等待人工审核  3=驳回重填，4=人工审核通过
  public partner_certificate_status: number; // 客户资格证书， 1=完全匹配， 2=等待人工审核  3=驳回重填，4=人工审核通过 ,  个人：基金从业资格， 机构：基金管理人资格

  //关联字段
  public partnerPerson: COrgPartnerPersonModel = new COrgPartnerPersonModel(); //股东关联人
  public certification: CertificationPhotoModel = new CertificationPhotoModel(); //图片存储地址(证件照)
  public assetinCertificate: AssetinCertificateModel = new AssetinCertificateModel(); //资产证明文件
  public assetNote: CAssetPartnerNoteModel = new CAssetPartnerNoteModel(); //资管产品 说明

  //辅助字段
  public display: boolean = false;
  public partnerInvestmentDateStr: string;  // 合伙人缴付期限用于显示
}

export class CustomerPartnerHelper {
  // 1=自然人 2=公司 3=有限合伙 4=其他组织
  public flag_partner_is_person_or_org: boolean = false;
  public info_partner_is_person_or_org: string;
  //合伙机姓名，或者合伙机构名称
  public flag_partner_name: boolean = false;
  public info_partner_name: string;
  //是否执行事物合伙人： T: 是， F: 不是
  public flag_if_excution_partner: boolean = false;
  public info_if_excution_partner: string;
  //是否有限责任LP： T:是 LP， F：不是，表示GP
  public flag_if_limited: boolean = false;
  public info_if_limited: string;
  //合伙人性别： M:男  F：女
  public flag_partnar_sex: boolean = false;
  public info_partnar_sex: string;
  //国别
  public flag_partner_country: boolean = false;
  public info_partner_country: string;
  // 证件类型： 1：身份证，2：企业社会信用代码，3：护照， 4：
  public flag_partner_id_type: boolean = false;
  public info_partner_id_type: string;
  //合伙人身份证号码，或合伙企业社会信用代码，或护照号
  public flag_partner_id_or_org_id: boolean = false;
  public info_partner_id_or_org_id: string;
  //partner_addr 个人身份证地址，或企业营业场所
  public flag_partner_addr: boolean = false;
  public info_partner_addr: string;
  // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public flag_partner_race: boolean = false;
  public info_partner_race: string;
  // 政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public flag_partner_political: boolean = false;
  public info_partner_political: string;
  // 文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public flag_partner_education: boolean = false;
  public info_partner_education: string;
  // 合伙人手机号码，或机构电话
  public flag_partner_phone_num: boolean = false;
  public info_partner_phone_num: string;
  //邮箱
  public flag_partner_mail_box: boolean = false;
  public info_partner_mail_box: string;
  //出资方式： 1、货币，2、劳务，3、股权，4、无形资产
  public flag_partner_form_of_investment: boolean = false;
  public info_partner_form_of_investment: string;
  // 认缴资金，需要除100
  public flag_partner_registered_capital: boolean = false;
  public info_partner_registered_capital: string;
  // 实缴资金，需要除100
  public flag_partner_paid_in_captial: boolean = false;
  public info_partner_paid_in_captial: string;
  // 合伙人出资日期时间
  public flag_partner_investment_date: boolean = false;
  public info_partner_investment_date: string;
  // 上传的照片
  public flag_idCardImg: boolean = false;
  public info_idCardImg: string;

  public check() {
    return (
      this.flag_partner_is_person_or_org ||
      this.flag_partner_name ||
      this.flag_if_excution_partner ||
      this.flag_if_limited ||
      this.flag_partnar_sex ||
      this.flag_partner_country ||
      this.flag_partner_id_type ||
      this.flag_partner_id_or_org_id ||
      this.flag_partner_addr ||
      this.flag_partner_race ||
      this.flag_partner_political ||
      this.flag_partner_education ||
      this.flag_partner_phone_num ||
      this.flag_partner_registered_capital ||
      this.flag_partner_paid_in_captial ||
      this.flag_partner_mail_box ||
      this.flag_partner_investment_date ||
      this.flag_idCardImg
    );
  }
}

// 股东责任类型
export enum LimitedPartnerType {
  GP = "F",
  LP = "T"
}

//股东/合伙人类型     1=自然人 2=公司 3=有限合伙 4=资管产品 5=其他组织
export enum PartnerType {
  person = "1",
  company = "2",
  limitedPartnership = "3",
  technologyProduct = "4",
  otherOrganizations = "5"
}

export const PartnerPersonOrOrgArr = [
  { id: "1", text: "自然人" },
  { id: "2", text: "公司" },
  { id: "3", text: "有限合伙" },
  { id: "4", text: "资管产品" },
  { id: "5", text: "其他组织" }
];
//出资类型
export const PartnerFormOfInvestmentArr = [
  { id: 1, text: "货币" },
  { id: 2, text: "劳务" },
  { id: 3, text: "股权" },
  { id: 4, text: "无形资产" }
];

//证件类型： 1：身份证，2：企业社会信用号，3：护照， 4：资管产品号，
export enum PartnerIdType {
  idCard = "1",
  businessLicense = "2",
  passport = "3",
  technologyProductNo = "4"
}



//审核状态： 1=完全匹配， 2=等待人工审核  3=驳回重填，4=人工审核通过
export enum PartnerVerifyStatus {
  codeMatch = 1,
  wait = 2,
  err = 3,
  workerMacth = 4
}
