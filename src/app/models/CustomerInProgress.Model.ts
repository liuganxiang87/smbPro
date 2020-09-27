// import { Helper } from "../core/tools";
import { CustomerInputArgModel } from "./CustomerInputArg.Model";
import { CustomerPartnerModel } from "./CustomerPartner.Model";
import { CustomerRelationPersonModel } from "./CustomerRelationPerson.Model";
import { CustomerRelationOrgModel } from "./CustomerRelationOrg.Model";
import { FileDocModel } from "./FileDoc.Model";
import { WorkerModel } from "./Worker.Model";
import { FileNotFundPartnerModel } from "./FileNotFundPartner.Model";
import { FileFundPartnerModel } from "./FileFundPartner.Model";
import { FileCompanyModel } from "./FileCompany.Model";
import { CustomerPersonModel } from "./CustomerPerson.Model";
import { CustomerOrderModel } from "./CustomerOrder.Model";
import { CustomerPreDemandModel } from './CustomerPreDemand.Model';
import { CustomerMoveBeforeModel } from './CustomerMoveBefore.Model';

export class CustomerInProgressModel {
  public customer_org_reg_sid: number; // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_person_id: number; // 业务办理并直接掌控合伙企业的人
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public zone_id: number; // 基金园区编码
  public org_structure_detail: Number;//企业小类别
  public biz_type: string = "1"; // 业务类型：1：设立，2：变更，3：迁入，4：迁转，5：质押，6：调档，7：迁出，8：注销
  public org_structure: any = "1"; // 企业架构： 1、有限合伙，2、有限公司
  public org_class: number = 1; // 客户可注册的类别（1：投资类企业、2：总部企业、3：双创企业、4：其他企业）
  public org_type: number = 0; // 企业类型：1=管 理 人 2=私募基金 3=员工持股（需要母公司） 4=股权改造（需要母公司） 5=产业投资 6=高管平台（需要母公司） 7=实业经营 8=政府基金 9=内部持股（需要母公司） 10=债权投资 11=并购投资 12=员工跟投（需要母公司） 13=创投企业 14=其他投资
  public org_big_type: number = 0; //企业类型（代替org_type）1:管理人 2:私募基金 4:持股平台 5:产业投资 7:投资服务 15:特殊载体 99:其他投资
  public order_period: number = 0; // 委托结束年限：0代表直到企业结束
  public order_period_begin_date: number; // 委托开始时间
  public fund_focus: number = 0; // 基金投资方向：基金管理人： 1=证券投资管理 2=股权投资管理 3=创业投资管理 4=其他， 私募基金： 1=证券投资 2=股权投资 3=创业投资 4=其他
  public industry_focus: number = 0; // （非私募基金）投资类企业的投资方向（行业）见表 industry_focus
  public scope_of_operation: string; // = '（未经金融监管部门批准，不得从事吸收存款、融资担保、代客理财、向社会公众集（融）资等金融业务；依法须经批准的项目，经相关部门批准后方可开展经营活动）';  // 经营范围
  public if_success: string = "F"; // 注册/变更/迁移 项目是否完成： F：未完成， T：完成  C:取消
  public customer_name: string; // 最终确认的在园区将要设立或将要变成的企业名称
  public is_top_org: string; // 是否顶级机构， T: 顶级， M:中级（有上级，也有下级）， L：低级（无下级，有上级）
  public top_org: string; // 如果is_top_org 是否顶层机构='T' 则此栏为自身的社会信用代码， 否则为上层机构的社会信用代码
  public customer_old_name: string; // 变更前，或迁入前的企业名称，如果是新注册则为注册人(对接人)所属企业名称
  public customer_vol: number; // 机构客户当前版本，每变更一次加一
  public org_id_url: string; //营业执照文件地址
  public customer_org_begin_date: number; // 合伙期限开始年月日
  public customer_org_end_date: number; // 合伙期限终止年月日
  public last_day_4_pay: number | Date; //付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
  public registered_address: string = "江西省九江市共青城市基金小镇内"; // 注册地址
  public current_step_id: number; // 当前办理业务的步骤号，关联表 biz_step(业务办理步骤表) biz_step_flow(业务步骤流水记录表)
  public register_person_id: number; // 注册(代办)人信息，指向customer_relation_person 表中的relation_person_id
  public org_fax: string; // 企业传真：订单协议需要
  public abut_joint_person_id: number; // 对接人/联络人信息，指向customer_relation_person 表中的relation_person_id
  public c_accountant_person: number; // 客户财务人员，指向customer_relation_person 表中的relation_person_id
  public administrant_name: string; // 管理人名称
  public administrant_id: string; // 管理人编码：[Pnnnnnnn]
  public partner_execution_type: string; // 执行事务合伙人类别:1=自然人 2=公司 3=有限合伙 4=其他组织
  public partner_execution_org: number; // 执行事物合伙人是机构时指向 customer_relation_org 表的relation_org_id
  public partner_execution_person: number; // 执行事物合伙人（自然人）或者机构代表： 指向customer_relation_person 表中的relation_person_id
  public legal_representative: number; // 有限公司的法人代表：指向customer_relation_person 表中的relation_person_id
  public real_control_is_person: string; // 有限公司的实际控制人，第一大股东是否个人 ： T=是， F=否
  public real_control: number; // 有限公司的实际控制人，第一大股东
  public real_control_url: string; // 实际控制人证件URL
  public num_of_employee: number = 2; // 员工个数
  public entrust_type: string; // 委托人类别: ？？未知用途 1、全体合伙人 2、执行事务合伙人 3、委派代表
  public if_registration_guidance: string = "F"; // 是否需要私募基金管理人登记辅导？T: 是， F: 否, 注释：是我们自己针对管理人提供的服务
  public if_investment_adviser: string = "F"; // 是否聘请外部投资顾问: T=是， F=否
  public investment_adviser_name: string; // 投资顾问名称，协议里用
  public adviser_certificate_id: string; // 投资顾问登记证书号码
  public if_trusteeship_org: string; // 托管机构？ F=不需要指定机构  T=之后选择1=中信证券， 2=招商证券
  public trusteeship_org_name: string; // 托管机构名称，私募基金才有
  public if_bank_futures_transfer: string; // 是否开通银期转账服务？T: 是， F: 否
  public if_bank_futures_org: number; // 银期转账服务机构：0=无需服务 1=中信证券， 2=招商证券
  public if_bank_securities_transfer: string; // 是否开通银证转账服务？T: 是， F: 否
  public if_bank_securities_org: number; // 银证转账服务机构： 0=无需服务  1=中信证券， 2=招商证券
  public credit_institution_code: string; // 信用机构代码，人民银行
  public bank_sid: number = 0; // 开户银行的顺序号：见表 zone_bank 相应的银行列表 共青城：1=九江银行   2=中国银行   3=农业银行   4=建设银行   5=江西银行
  public bank_account: string; // 银行账号
  public if_general: string; // 是否一般户：T=是，F=否
  public general_bank_branck: string; // 一般户银行机构
  public bank_general_acct: string; // 一般户账号
  public if_pre_deposit: string; // 是否预存（订单）资金：T=是， F=否
  public w_admin_id: number; // 客户经理，员工号
  public worker_id: number; // 客户专员，员工号
  public w_accountant_person: number; // 财务人员的员工ID
  public undertake1: number; // 承揽人1
  public undertake2: number; // 承揽人2
  public source: number = 0; // 来源：0=<空> 1=网站注册 2=客户自主上门或联系 3=客户经理开发 4=客户推荐 5=渠道推荐 6=介绍人推荐
  public source_id: number = 0; // 来源ID，按来源取值：0-2= <空> 3=员工ID 4=客户ID 5=渠道ID 6=介绍人ID
  public agreement_templet: string; // 合伙协议/公司章程模板： 1=普通合伙， 2=基金合伙， 3=普通有限公司  4=基金类公司（不提供）
  public if_client_template: string = "F"; //是否是客户模版(T: 是 F:否）
  public if_asset_product_in_partner: string; // 是否有资管产品作为合伙人: T:是， F:否
  public informing_file_state: string; // 客户告知书状态： 1=未生成， 2=正在修改， 3=已生成
  public if_short_message: string; // 是否开通银行短信提醒业务？ T: 是， F: 否
  public if_secret_key_2_town: string; // 企业是否向园区移交秘钥（报税）: T: 是， F: 否
  public secret_key: string; // 秘钥（报税）
  public if_financial_account: string; // 是否开通银行理财账户:  T: 是， F: 否
  public if_paging_sign: string; // 是否分页签署: T:是， F:否
  public express_num_in: string; // 收到从客户寄来的快递单号
  public express_num_out: string; // 给客户发送资料的快递单号
  public begin_time: number; // 开始办理时间
  public end_time: number; // 办理成功时间

  //关联字段
  public inputArg: CustomerInputArgModel = new CustomerInputArgModel();
  public partner: CustomerPartnerModel[];
  public relationPerson: CustomerRelationPersonModel[] = [];
  public relationOrg: CustomerRelationOrgModel[] = [];
  public templateFile: FileDocModel[] = [];
  public customerPerson: CustomerPersonModel = new CustomerPersonModel();
  public worker: WorkerModel = new WorkerModel();
  public docking: CustomerRelationPersonModel = new CustomerRelationPersonModel();
  public fileNoFund: FileNotFundPartnerModel = new FileNotFundPartnerModel();  //园区通用
  public fileFund: FileFundPartnerModel = new FileFundPartnerModel();         //基金通用
  public fileCompany: FileCompanyModel = new FileCompanyModel();              //有限公司通用
  public order: CustomerOrderModel[] = [];
  public moveBefore: CustomerMoveBeforeModel = new CustomerMoveBeforeModel()
  //辅助字段
  public orderPeriodToEnd: boolean = true; //企业委托期限是否是至企业注销 （即委托期限结束日期=企业注销日期）

  public personPageDisplay: boolean = false; //选择客户页面是否显示
  public workerPageDispaly: boolean = false; //选择员工页面是否显示
  public values: any[] = [];
  public customerFromSource: customerFromSourceModel = new customerFromSourceModel();
  public nzOptions: any[] = [];
  public preDemand: CustomerPreDemandModel = new CustomerPreDemandModel();

  public type: number = 1;   //数据类型  1.设立数据类型 2.迁转数据类型 3.迁入数据类型
  public businessPeriod: number = 30; //企业经营期限
  public businessPeriodInfinite: boolean = false; //经营期限 是否无限
  public small_class: number[] = [4533];
  public org_big_type_options: any[] = []   //企业类型选项
}

export class customerFromSourceModel {
  source: number;
  source_id: number;
  text: string;
}

export class CustomerInProgressHelper {
  // 客户专员，员工号
  public flag_worker_id: boolean = false;
  public info_worker_id: string;
  // 业务办理并直接掌控合伙企业的人
  public flag_customer_person_id: boolean = false;
  public info_customer_person_id: string;
  //企业架构： 1、有限合伙，2、有限公司
  public flag_org_structure: boolean = false;
  public info_org_structure: string;
  // 客户可注册的类别（1：投资类企业、2：总部企业、3：双创企业、4：其他企业）
  public flag_org_class: boolean = false;
  public info_org_class: string;

  public flag_structure_detail: boolean = false;
  public info_structure_detail: string = "请选择企业小类别";
  // 企业类型：1=管 理 人 2=私募基金 3=员工持股（需要母公司） 4=股权改造（需要母公司） 5=产业投资 6=高管平台（需要母公司） 7=实业经营 8=政府基金 9=内部持股（需要母公司） 10=债权投资 11=并购投资 12=员工跟投（需要母公司） 13=创投企业 14=其他投资
  public flag_org_type: boolean = false;
  public info_org_type: string;
  //企业类型（代替org_type）1:管理人 2:私募基金 4:持股平台 5:产业投资 7:投资服务 15:特殊载体 99:其他投资
  public flag_org_big_type: boolean = false;
  public info_org_big_type: string;
  // 经营范围
  public flag_scope_of_operation: boolean = false;
  public info_scope_of_operation: string;
  //企业经营期限
  public flag_businessPeriod: boolean = false;
  public info_businessPeriod: string;
  //付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
  public flag_last_day_4_pay: boolean = false;
  public info_last_day_4_pay: string;
  // 合伙协议/公司章程模板： 1=普通合伙， 2=基金合伙， 3=普通有限公司  4=基金类公司（不提供）
  public flag_agreement_templet: boolean = false;
  public info_agreement_templet: string;
  //投资方向：; //见表; //industry_focus
  public flag_industry_focus: boolean = false;
  public info_industry_focus: string;
  // 基金投资方向：基金管理人： 1=证券投资管理 2=股权投资管理 3=创业投资管理 4=其他， 私募基金： 1=证券投资 2=股权投资 3=创业投资 4=其他
  public flag_fund_focus: boolean = false;
  public info_fund_focus: string;
  // 注册地址
  public flag_registered_address: boolean = false;
  public info_registered_address: string;
  // 开户银行的顺序号：见表 zone_bank 相应的银行列表 共青城：1=九江银行   2=中国银行   3=农业银行   4=建设银行   5=江西银行
  public flag_bank_sid: boolean = false;
  public info_bank_sid: string;
  // 银行账号
  public flag_bank_account: boolean = false;
  public info_bank_account: string;
  // 企业传真：订单协议需要
  public flag_org_fax: boolean = false;
  public info_org_fax: string;
  // 员工个数
  public flag_num_of_employee: boolean = false;
  public info_num_of_employee: string;
  // 管理人名称
  public flag_administrant_name: boolean = false;
  public info_administrant_name: string;
  // 管理人编码：[Pnnnnnnn]
  public flag_administrant_id: boolean = false;
  public info_administrant_id: string;
  //是否需要私募基金管理人登记辅导？T:; //是，; //F:; //否
  public flag_if_registration_guidance: boolean = false;
  public info_if_registration_guidance: string;
  //是否聘用外部投资顾问。T：是，F:; //否
  public flag_if_investment_adviser: boolean = false;
  public info_if_investment_adviser: string;
  // 投资顾问名称，协议里用
  public flag_investment_adviser_name: boolean = false;
  public info_investment_adviser_name: string;
  // 投资顾问登记证书号码
  public flag_adviser_certificate_id: boolean = false;
  public info_adviser_certificate_id: string;
  // 托管机构？ F=不需要指定机构  T=之后选择1=中信证券， 2=招商证券
  public flag_if_trusteeship_org: boolean = false;
  public info_if_trusteeship_org: string;
  // 托管机构名称，私募基金才有
  public flag_trusteeship_org_name: boolean = false;
  public info_trusteeship_org_name: string;
  // 是否开通银期转账服务？T: 是， F: 否
  public flag_if_bank_futures_transfer: boolean = false;
  public info_if_bank_futures_transfer: string;
  // 银期转账服务机构：0=无需服务 1=中信证券， 2=招商证券
  public flag_if_bank_futures_org: boolean = false;
  public info_if_bank_futures_org: string;
  // 是否开通银证转账服务？T: 是， F: 否
  public flag_if_bank_securities_transfer: boolean = false;
  public info_if_bank_securities_transfer: string;
  // 银证转账服务机构： 0=无需服务  1=中信证券， 2=招商证券
  public flag_if_bank_securities_org: boolean = false;
  public info_if_bank_securities_org: string;
  // 是否开通银行短信提醒业务？ T: 是， F: 否
  public flag_if_short_message: boolean = false;
  public info_if_short_message: string;
  // 企业是否向园区移交秘钥（报税）: T: 是， F: 否
  public flag_if_secret_key_2_town: boolean = false;
  public info_if_secret_key_2_town: string;
  // 是否开通银行理财账户:  T: 是， F: 否
  public flag_if_financial_account: boolean = false;
  public info_if_financial_account: string;
  // 是否分页签署: T:是， F:否
  public flag_if_paging_sign: boolean = false;
  public info_if_paging_sign: string;
  // 来源：0=<空> 1=网站注册 2=客户自主上门或联系 3=客户经理开发 4=客户推荐 5=渠道推荐 6=介绍人推荐
  public flag_source: boolean = false;
  public info_source: string;
  // 最终确认的在园区将要设立或将要变成的企业名称
  public flag_customer_name: boolean = false;
  public info_customer_name: string;
  // 是否一般户：T=是，F=否
  public flag_if_general: boolean = false;
  public info_if_general: string;
  // 一般户银行机构
  public flag_general_bank_branck: boolean = false;
  public info_general_bank_branck: string;
  // 一般户账号
  public flag_bank_general_acct: boolean = false;
  public info_bank_general_acct: string;
  // 实际控制人证件URL
  public flag_real_control_url: boolean = false;
  public info_real_control_url: string;
  //relationPerson 提示信息
  public flag_RPerson_remind: boolean = false;
  public info_RPerson_remind: string = "";

  public check() {
    return (
      this.flag_worker_id ||
      this.flag_customer_person_id ||
      this.flag_org_structure ||
      this.flag_org_class ||
      this.flag_org_type ||
      this.flag_scope_of_operation ||
      this.flag_businessPeriod ||
      this.flag_last_day_4_pay ||
      this.flag_industry_focus ||
      this.flag_fund_focus ||
      this.flag_org_big_type ||
      this.flag_registered_address ||
      this.flag_bank_sid ||
      this.flag_bank_account ||
      this.flag_org_fax ||
      this.flag_num_of_employee ||
      this.flag_administrant_name ||
      this.flag_administrant_id ||
      this.flag_if_registration_guidance ||
      this.flag_if_investment_adviser ||
      this.flag_investment_adviser_name ||
      this.flag_adviser_certificate_id ||
      this.flag_if_trusteeship_org ||
      this.flag_trusteeship_org_name ||
      this.flag_if_bank_futures_transfer ||
      this.flag_if_bank_futures_org ||
      this.flag_if_bank_securities_transfer ||
      this.flag_if_bank_securities_org ||
      this.flag_if_short_message ||
      this.flag_if_secret_key_2_town ||
      this.flag_if_financial_account ||
      this.flag_if_paging_sign ||
      this.flag_source ||
      this.flag_customer_name ||
      this.flag_if_general ||
      this.flag_general_bank_branck ||
      this.flag_bank_general_acct ||
      this.flag_real_control_url ||
      this.flag_RPerson_remind
    );
  }
}

//银行信息
export class BankInfo {
  public bank_sid: number; //开户银行
  public bank_account: string; //银行帐号
}

//一般户信息
export class GeneralBankInfo {
  public if_general: string = "F"; //是否一般户：T=是，F=否
  public general_bank_branck: string; //一般户银行机构
  public bank_general_acct: string; //一般户账号
}

//营业执照信息
export class BusinessLicenseInfo {
  public businessLicenseNo: string; //营业执照号
  public startTime: string; //营业执照出证时间
  public businessLicenseUrl: string; //营业执照pdf
}

export class BusinessLicenseHelper {
  //营业执照出证时间
  public flag_businessLicenseNo: boolean = false;
  public info_businessLicenseNo: string;
  //营业执照号
  public flag_startTime: boolean = false;
  public info_startTime: string;
  //营业执照pdf
  public flag_businessLicenseUrl: boolean = false;
  public info_businessLicenseUrl: string;

  public check() {
    return (
      this.flag_businessLicenseNo ||
      this.flag_startTime ||
      this.flag_businessLicenseUrl
    );
  }
}

export const StatusArr = [
  { status: "T", text: "是" },
  { status: "F", text: "否" }
];

//记录对应操作
export enum ProgressType {
  modify = "0", //企业信息修改
  setUp = "1", //设立
  change = "2", //变更
  moveIn = "3",
  moveTo = "4",
  pledge = "5",
  getArchives = "6",
  moveOut = "7",
  cancellation = "8", //注销
  beian = "9", //备案
  noPaperChange = "a"
}
export const ProgressTypeObj = {
  "0": "信息修改",
  "1": "设立",
  "2": "变更",
  "3": "迁入",
  "4": "迁转",
  "5": "质押",
  "6": "调档",
  "7": "迁出",
  "8": "注销",
  "9": "备案",
  "a": "无纸化变更"
};

//progress记录状态
export enum ProgressState {
  complete = "T",
  noComplete = "F",
  cancel = "C"
}

// 企业架构： 1、有限合伙，2、有限公司
export enum OrgStructure {
  partner = "1",
  company = "2"
}
export const OrgStructureArr = [
  { id: "1", text: "有限合伙" },
  { id: "2", text: "有限公司" }
];
export const OrgStructureObj = {
  "1": "有限合伙",
  "2": "有限公司"
};

//客户可注册的类别（1：投资类企业、2：总部企业、3：双创企业、4：其他企业）
export enum OrgClass {
  investment = 1,
  headquarters = 2,
  doubleEntrepreneurship = 3,
  other = 4
}
export const OrgClassArr = [
  { id: 1, text: "投资类企业" },
  { id: 2, text: "总部企业" },
  { id: 3, text: "双创企业" },
  { id: 4, text: "其他企业" }
];
export const OrgClassObj = {
  1: "投资类企业",
  2: "总部企业",
  3: "双创企业",
  4: "其他企业"
};

//企业类型（代替org_type）1:管理人 2:私募基金 4:持股平台 5:产业投资 7:投资服务 15:特殊载体 99:其他投资
export enum OrgBigType {
  unChoose = 0,
  administrator = 1, //管理人
  fund = 2, //私募基金
  sharePlatform = 4, //持股平台
  industryInvestment = 5, //产业投资
  investmentServices = 7, //投资服务
  specialCarrier = 15, //特殊载体
  otherInvestment = 99 //其他投资
}
export const OrgBigTypeObj = {
  1: {
    0: { text: "请选择企业类型", needParent: false, warnDay: 180 },
    1: { text: "管理人", needParent: false, warnDay: 180 },
    2: { text: "私募基金", needParent: false, warnDay: 180 },
    4: { text: "持股平台", needParent: true, warnDay: 90 },
    5: { text: "产业投资", needParent: false, warnDay: 180 },
    7: { text: "投资服务", needParent: false, warnDay: 180 },
    15: { text: "特殊载体", needParent: false, warnDay: 180 },
    99: { text: "其他投资", needParent: false, warnDay: 180 }
  },
  2: {
    0: { text: "无分类", needParent: false, warnDay: 180 }
  },
  3: {
    0: { text: "暂无分类2", needParent: false, warnDay: 180 }
  },
  4: {
    0: { text: "暂无分类3", needParent: false, warnDay: 180 }
  }
};
export const OrgBigTypeArr = [
  [
    { id: 0, text: "请选择企业类型", needParent: false, warnDay: 180 },
    { id: 1, text: "管理人", needParent: false, warnDay: 180 },
    { id: 2, text: "私募基金", needParent: false, warnDay: 180 },
    { id: 4, text: "持股平台", needParent: true, warnDay: 90 },
    { id: 5, text: "产业投资", needParent: false, warnDay: 180 },
    { id: 7, text: "投资服务", needParent: false, warnDay: 180 },
    { id: 15, text: "特殊载体", needParent: false, warnDay: 180 },
    { id: 99, text: "其他投资", needParent: false, warnDay: 180 }
  ],
  [{ id: 0, text: "无分类", needParent: false, warnDay: 180 }],
  [{ id: 0, text: "暂无分类2", needParent: false, warnDay: 180 }],
  [{ id: 0, text: "暂无分类3", needParent: false, warnDay: 180 }]
];
export const OrgBigTypeArrValue = [
  [
    { value: 0, key: "请选择企业类型", needParent: false, warnDay: 180 },
    { value: 1, key: "管理人", needParent: false, warnDay: 180 },
    { value: 2, key: "私募基金", needParent: false, warnDay: 180 },
    { value: 4, key: "持股平台", needParent: true, warnDay: 90 },
    { value: 5, key: "产业投资", needParent: false, warnDay: 180 },
    { value: 7, key: "投资服务", needParent: false, warnDay: 180 },
    { value: 15, key: "特殊载体", needParent: false, warnDay: 180 },
    { value: 99, key: "其他投资", needParent: false, warnDay: 180 }
  ],
  [{ value: 0, key: "无分类", needParent: false, warnDay: 180 }],
  [{ value: 0, key: "暂无分类2", needParent: false, warnDay: 180 }],
  [{ value: 0, key: "暂无分类3", needParent: false, warnDay: 180 }]
];


//合伙协议/公司章程模板
export enum AgreementTemplet {
  fileNotFund = "1",
  fileFund = "2",
  fileCompany = "3"
}
export const AgreementTempletObj = {
  "1": "园区通用",
  "2": "基金通用",
  "3": "有限公司通用"
};

//基金投资方向：基金管理人：; //1=证券投资管理; //2=股权投资管理; //3=创业投资管理; //4=其他，; //私募基金：; //1=证券投资; //2=股权投资; //3=创业投资; //4=其他
export const fundFocusArr = {
  1: [
    { id: 1, text: "证券投资管理" },
    { id: 2, text: "股权投资管理" },
    { id: 3, text: "创业投资管理" },
    { id: 4, text: "其他" }
  ],
  2: [
    { id: 1, text: "证券投资" },
    { id: 2, text: "股权投资" },
    { id: 3, text: "创业投资" },
    { id: 4, text: "其他" }
  ]
};

//投资方向：; //见表; //industry_focus
export const IndustryFocusArr = [
  { id: 1, text: "互联网" },
  { id: 2, text: "文化传媒" },
  { id: 3, text: "科学研究和技术服务" },
  { id: 4, text: "先进制造" },
  { id: 5, text: "金融业" },
  { id: 6, text: "新能源" },
  { id: 7, text: "新材料" },
  { id: 8, text: "教育" },
  { id: 9, text: "生物医药" },
  { id: 10, text: "节能环保" },
  { id: 11, text: "新能源汽车" },
  { id: 12, text: "生物产业" },
  { id: 13, text: "新兴信息产业" },
  { id: 14, text: "高端装备制造业" },
  { id: 15, text: "其他行业" }
];

//托管机构？; //0=不需要指定机构; //; //1=中信证券，; //2=招商证券
export const TrusteeshipOrgArr = [
  { id: 1, text: "中信证券" },
  { id: 2, text: "招商证券" }
];

//当前办理业务的步骤号
export const CurStepObj = {
  "1": {
    1: "",
    2: "",
    3: "",
    4: "客户填写基础信息", //客户填写股东/合伙人信息
    5: "确认基础信息", //客户选择模版
    6: "确认股东/合伙人信息", //客户填写模版公共信息
    7: "确认模版", //客户填写模版特殊信息
    8: "确认模版信息",
    9: "生成文件",
    10: "客户的纸质材料",
    11: "风控审核纸质材料",
    12: "园区领导审核纸质材料",
    13: "工商岗出营业执照",
    14: "公章/法人章/财务章审批、刻制",
    15: "开立银行基本户、开通网银",
    //16 : '办理《开户许可证》、《信用代码证》',
    16: "工商归档",
    17: "工商归档",
    18: "税务登记/财务/税务归档",
    19: "归档，等待快递证照章等",
    20: "设立完成"
  },
  "2": {
    1: "",
    2: "",
    3: "确认变更选项",
    4: "确认变更内容",
    5: "生成文件",
    6: "收到客户的纸质材料",
    7: "风控审核纸质材料",
    8: "园区领导审核纸质材料",
    9: "工商岗营业执照",
    10: "公章/法人章/财务章审批、刻制",
    11: "开立银行基本户、开通网银",
    //12 : '办理《开户许可证》、《信用代码证》',
    12: "工商归档",
    13: "工商归档",
    14: "税务登记/财务/税务归档",
    15: "归档，等待快递证照章等",
    16: "变更完成"
  },
  "8": {
    1: "",
    2: "",
    3: "确认清算组成员信息",
    4: "生成文件",
    5: "收到客户的纸质材料",
    6: "风控审核纸质材料",
    7: "园区领导审核纸质材料",
    8: "工商登报",
    9: "清算组备案",
    10: "税务注销",
    11: "银行注销",
    12: "工商注销",
    13: "税务登记/财务/税务归档",
    14: "归档，等待快递证照章等",
    15: "注销完成"
  }
};

//设立操作步骤
export enum SetUpStep {
  customerEdit = 4, //客户填写基础信息
  baseInfo = 5, //确认基础信息
  partner = 6, //确认股东/合伙人信息
  template = 7, //确认模版
  templateInfo = 8, //确认模版信息
  generateFile = 9, //生成文件
  receivePaper = 10,   //收到客户的纸质材料
  confirmPaper = 11,   //风控审核纸质材料
  managerConfirmPaper = 12, //园区领导审核纸质材料
  creditCode = 13, //工商岗出营业执照，登记统一社会信用代码
  officialSeal = 14,   //公安岗办理公章/法人章/财务章审批、刻制
  bankNo = 15,  //银行岗开立银行基本户、开通网银
  bankCreditCode = 16,    //银行岗办理《开户许可证》、《信用代码证》
  industrialCommercialArchive = 17,   //工商归档，将章子证照寄给客户，登记快递单号
  taxArchive = 18, //税务岗办理税务登记/财务/税务归档
  clerkArchive = 19, //行政归档，客户获取快递单号，等待接收证照章等
  complete = 20    //设立完成
}
//变更操作步骤
export enum ChangeStep {
  customerEdit = 2, // 客户填写变更内容
  changeItem = 3, // 确认变更选项
  changeInfo = 4, // 确认变更内容
  generateFile = 5, //生成文件
  receivePaper = 6, //收到客户的纸质材料
  fk_confirmPaper = 7,   //风控审核纸质材料
  ld_confirmPaper = 8, //园区领导审核纸质材料
  creditCode = 9, //工商岗出营业执照，登记统一社会信用代码
  officialSeal = 10,   //公安岗办理公章/法人章/财务章审批、刻制
  bankNo = 11,  //银行岗开立银行基本户、开通网银
  bankCreditCode = 12,    //银行岗办理《开户许可证》、《信用代码证》
  gsArchive = 13,   //工商归档，将章子证照寄给客户，登记快递单号
  cwArchive = 14, //税务岗办理税务登记/财务/税务归档
  xzArchive = 15, //行政归档，客户获取快递单号，等待接收证照章等
  complete = 16    //变更完成
}



// 默认经营期限
export const DefaultBusinessPeriod = 30;
