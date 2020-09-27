import { CustomerPartnerModel } from "./CustomerPartner.Model";

export class CustomerRelationPersonModel {
  public relation_person_id: number; // 企业关联人ID（唯一）：
  public customer_org_reg_sid: number; // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public customer_vol: number; // 机构客户当前版本，每变更一次加一
  public zone_id: number; // 私募园区代码
  public R_person_name: string; // 关联人姓名
  public R_person_sex: string; // 关联人性别：M:男  F:女
  public R_person_mode: number = 0; // 关联方式：参见 relation_mode_person 表
  public R_person_id_type: string = "1"; //证件类型： 1：身份证，2：企业社会信用代码(不能填)，3：护照
  public R_person_id_card_num: string; // 关联人身份证号
  public R_person_phone_num: string; // 关联人手机号码
  public R_person_addr: string; // 关联人身份证地址
  public R_person_race: number = 0; // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public R_person_political: number = 0; // 政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public R_person_education: number = 0; // 文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public R_person_org_name: string; // 关联人所属机构名称(非园区注册企业)
  public R_person_position: string; // 关联人所在机构的职位
  public R_person_wechat: string; // 关联人微信号
  public R_person_QQ: string; // 关联人QQ号
  public R_email: string; //邮箱

  //辅助字段
  public display: boolean = false; //是否显示
  public phoneIsWechat: string = "1"; //手机号码是否是微信
  public isPersonInPartner: string = "T"; //关联人是否存在股东列表中
}

export class CustomerRelationPersonHelper {
  // 关联人身份，关联方式：参见 relation_mode_person 表
  public flag_R_person_mode: boolean = false;
  public info_R_person_mode: string;
  // 关联人姓名
  public flag_R_person_name: boolean = false;
  public info_R_person_name: string;
  // 关联人性别：M:男  F:女
  public flag_R_person_sex: boolean = false;
  public info_R_person_sex: string;
  //证件类型： 1：身份证，2：企业社会信用代码(不能填)，3：护照
  public flag_R_person_id_type: boolean = false;
  public info_R_person_id_type: string;
  // 关联人身份证号
  public flag_R_person_id_card_num: boolean = false;
  public info_R_person_id_card_num: string;
  // 关联人身份证地址
  public flag_R_person_addr: boolean = false;
  public info_R_person_addr: string;
  // 关联人手机号码
  public flag_R_person_phone_num: boolean = false;
  public info_R_person_phone_num: string;
  // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public flag_R_person_race: boolean = false;
  public info_R_person_race: string;
  // 政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public flag_R_person_political: boolean = false;
  public info_R_person_political: string;
  // 文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public flag_R_person_education: boolean = false;
  public info_R_person_education: string;
  //邮箱
  public flag_R_email: boolean = false;
  public info_R_email: string;
  //关联人是否存在股东列表中
  public flag_isPersonInPartner: boolean = false;
  public info_isPersonInPartner: string;
  //关联人对应股东（关联人是股东）
  public flag_choosePartner: boolean = false;
  public info_choosePartner: string;
  //企业对接人是否存在
  public flag_docking: boolean = false;
  public info_docking: string;
  //企业财务对接人是否存在
  public flag_financialDocking: boolean = false;
  public info_financialDocking: string;
  //客户的财务操作（出纳）是否存在
  public flag_cashier: boolean = false;
  public info_cashier: string;
  //客户的财务复核（会计）
  public flag_accounting: boolean = false;
  public info_accounting: string;
  ////客户的财务主管（领导）
  public flag_treasurer: boolean = false;
  public info_treasurer: string;
  //经理是否存在
  public flag_generalManager: boolean = false;
  public info_generalManager: string;
  //董事长是否存在
  public flag_directorChairman: boolean = false;
  public info_directorChairman: string;
  //副董事长是否存在
  public flag_deputyDirector: boolean = false;
  public info_deputyDirector: string;
  //董事 提示信息
  public flag_director: boolean = false;
  public info_director: string;
  //执行董事是否存在
  public flag_executiveDirector: boolean = false;
  public info_executiveDirector: string;
  //监事长是否存在
  public flag_supervisor: boolean = false;
  public info_supervisor: string;
  //监事 提示信息
  public flag_supervisors: boolean = false;
  public info_supervisors: string;
  //独立监事（不设立监事会）
  public flag_singleSupervisor: boolean = false;
  public info_singleSupervisor: string;
  //企业法人代表（有限公司）
  public flag_legal: boolean = false;
  public info_legal: string;

  check() {
    return (
      this.flag_R_person_mode ||
      this.flag_R_person_name ||
      this.flag_R_person_sex ||
      this.flag_R_person_id_card_num ||
      this.flag_R_person_addr ||
      this.flag_R_person_phone_num ||
      this.flag_R_person_race ||
      this.flag_R_person_political ||
      this.flag_R_person_education ||
      this.flag_R_email ||
      this.flag_isPersonInPartner ||
      this.flag_choosePartner ||
      this.flag_docking ||
      this.flag_financialDocking ||
      this.flag_cashier ||
      this.flag_accounting ||
      this.flag_treasurer ||
      this.flag_generalManager ||
      this.flag_directorChairman ||
      this.flag_deputyDirector ||
      this.flag_director ||
      this.flag_executiveDirector ||
      this.flag_supervisor ||
      this.flag_supervisors ||
      this.flag_singleSupervisor ||
      this.flag_legal
    );
  }
}

//与园区注册机构客户的关联人类型
export enum RelationPersonMode {
  agent = 1, //合伙企业代办人（通常是注册客户)
  docking = 2, //企业对接人
  financialDocking = 3, //企业财务对接人
  legal = 4, //企业法人代表（有限公司）
  directorChairman = 5, //董事长
  generalManager = 6, //经理
  director = 7, //董事
  supervisor = 8, //监事长
  supervisors = 9, //监事
  deputyDirector = 10, //副董事长
  investmentAdviser = 11, //投资顾问（个人）
  custodyAgencyDocking = 12, //股份托管机构对接人
  projectReferences = 13, //项目介绍人
  parentOrgBehalf = 14, //母公司代表
  businessMoneyHandle = 15, //办理业务打款人
  investmentAdvisorsDocking = 16, //投资顾问公司的对接人
  securityAgencyDocking = 17, //外包代缴社保机构对接人
  executiveDirector = 18, //执行董事（无董事会）
  cashier = 19, //客户的财务操作（出纳）
  accounting = 20, //客户的财务复核（会计）
  treasurer = 21, //客户的财务主管（领导）
  controlPeople = 22, //有限公司的实际控制人，个人第一大股东
  singleSupervisor = 23 //独立监事（不设立监事会）
}
export const RelationPersonModeArr = [
  { id: 1, text: "企业代办人" },
  { id: 2, text: "企业对接人" },
  { id: 3, text: "企业财务对接人" },
  { id: 4, text: "法人代表" },
  { id: 5, text: "董事长" },
  { id: 6, text: "总经理" },
  { id: 7, text: "董事" },
  { id: 8, text: "监事会主席" },
  { id: 9, text: "监事" },
  { id: 10, text: "副董事长" },
  { id: 11, text: "投资顾问" },
  { id: 12, text: "股份托管机构对接人" },
  { id: 13, text: "项目介绍人" },
  { id: 14, text: "母公司代表" },
  { id: 15, text: "办理业务打款人" },
  { id: 16, text: "投资顾问公司的对接人" },
  { id: 17, text: "外包代缴社保机构对接人" },
  { id: 18, text: "执行董事" },
  { id: 19, text: "财务操作（出纳）" },
  { id: 20, text: "财务复核（会计）" },
  { id: 21, text: "财务主管（领导）" },
  { id: 22, text: "有限公司的实际控制人，个人第一大股东" },
  { id: 23, text: "监事(不设监事会)" }
];
export const RPersonModeObj = {
  1 : "企业代办人",
  2: "企业对接人" ,
  3: "企业财务对接人" ,
  4: "法人代表" ,
  5: "董事长" ,
  6: "总经理" ,
  7: "董事" ,
  8: "监事会主席" ,
  9: "监事" ,
  10: "副董事长" ,
  11: "投资顾问" ,
  12: "股份托管机构对接人" ,
  13: "项目介绍人" ,
  14: "母公司代表" ,
  15: "办理业务打款人" ,
  16: "投资顾问公司的对接人" ,
  17: "外包代缴社保机构对接人" ,
  18: "执行董事" ,
  19: "财务操作（出纳）" ,
  20: "财务复核（会计）" ,
  21: "财务主管（领导）" ,
  22: "有限公司的实际控制人，个人第一大股东" ,
  23: "监事(不设监事会)"
};
//证件类型： 1：身份证，2：企业社会信用代码(不能填)，3：护照
export enum RPersonIdType {
  idCard = '1',
  // businessLicense = '2',
  passport = '3'
}
export const RPersonIdTypeObj = {
  "1" : "身份证",
  // "2" : "企业社会信用代码",
  "3" : "护照"
};
