export class CustomerRelationOrgModel {
  public relation_org_id: number; // 关联企业的企业顺序号（唯一）：同一机构在一个/多个企业可以有多个角色
  public customer_org_reg_sid: number; // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_vol: number; // 机构客户当前版本，每变更一次加一
  public zone_id: number; // 私募园区代码
  public R_org_name: string; // 关联企业名称
  public R_org_mode: number; // 关联方式：参见 relation_mode_org 表
  public R_org_id: string; // 关联企业三证合一的信用代码
  public R_org_phone_num: string; // 关联企业电话号码
  public R_org_addr: string; // 关联企业地址
  public R_org_representative: number; //关联企业的代表，指向表 customer_relation_person 的 relation_person_id

}

export class CustomerRelationOrgHelper {
  // 关联方式：参见 relation_mode_org 表
  public flag_R_org_mode: boolean = false;
  public info_R_org_mode: string;
  // 关联企业名称
  public flag_R_org_name: boolean = false;
  public info_R_org_name: string;
  // 关联企业三证合一的信用代码
  public flag_R_org_id: boolean = false;
  public info_R_org_id: string;
  // 关联企业电话号码
  public flag_R_org_phone_num: boolean = false;
  public info_R_org_phone_num: string;
  // 关联企业地址
  public flag_R_org_addr: boolean = false;
  public info_R_org_addr: string;
  // 母公司信息
  public flag_parentCompany: boolean = false;
  public info_parentCompany: string;

  check() {
    return (
      this.flag_R_org_mode ||
      this.flag_R_org_name ||
      this.flag_R_org_id ||
      this.flag_R_org_phone_num ||
      this.flag_R_org_addr ||
      this.flag_parentCompany
    );
  }
}

//关联企业类型
export enum RelationOrgMode {
  parentCompany = 1, //母公司
  indirectStake = 2, //间接持股企业
  investmentAdviser = 3, //投资顾问机构
  sharesCustody = 4, //股份托管机构
  fundsEntrusted = 5, //基金委托管理机构（管理人）
  projectChannel = 6, //项目渠道（介绍机构）
  invoice = 7, //发票（税务）的开具机构
  remittance = 8, //项目的汇款机构
  socialSecurity = 9 //外包代缴社保机构
}
export const RelationOrgModeArr = [
  { id: 1, text: "母公司" },
  { id: 2, text: "间接持股企业" },
  { id: 3, text: "投资顾问机构" },
  { id: 4, text: "股份托管机构" },
  { id: 5, text: "基金委托管理机构（管理人）" },
  { id: 6, text: "项目渠道（介绍机构）" },
  { id: 7, text: "发票（税务）的开具机构" },
  { id: 8, text: "项目的汇款机构" },
  { id: 9, text: "外包代缴社保机构" }
];
