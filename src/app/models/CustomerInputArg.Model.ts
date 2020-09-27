export class CustomerInputArgModel {
  public customer_org_reg_sid: number; //正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_register_name: string; // 企业字号
  public start_name: string = "3"; // 冠名类型（1：冠省名，2：冠市名，3：冠县名）
  public short_name: string; // 企业字号
  public biz_desc: string; // 行业描述
  public org_style: string; //组织形式

  public customar_backup_name1: string; // 企业备选字号1
  public customar_backup_name2: string; // 企业备选字号2
  public customar_backup_name3: string; // 企业备选字号3
  public industry_focus: number; //投资方向： 见表 industry_focus
  public partner_count: number; //合伙企业合伙人总数，或股东总数
  public GP_count: number = 1; //GP 个数
  public org_partner_count: number; //机构合伙人个数，或机构股东个数
  public exection_count: number = 1; //执行事物合伙人个数
  public employee_num: number; //员工个数
  public registered_capital: number = 1000; //: string; // 注册/认缴资金 整数，需要除 100
  public paid_capital: number = 0; //: string; // 实缴资金：整数，需要除 100
  public GP_total_capital: number; //: string; // GP出资总额 : 整数，需要 除 100
  public real_control_name: string; // 实控人姓名
  public real_control_phone: string; // 实控人手机
  public real_control_email: string; // 实控人email
  public capital_investment: string; // 资金投向
  public party_a: string; // 甲方
  public party_a_org: string; // 甲方企业
  public append_quotation: string; //追加报价单（T：追加，F：不追加）
  public append_city: string = "F"; // 加'市'字(T:加, F:不加)

  // 辅助字段
  public append_city_boo: boolean = false  //是否加市字
}

export class CustomerInputArgHelper {
  //企业字号
  public flag_customer_register_name: boolean = false;
  public info_customer_register_name: string;
  // 冠名类型（1：冠省名，2：冠市名，3：冠县名）
  public flag_start_name: boolean = false;
  public info_start_name: string;
  // 企业字号
  public flag_short_name: boolean = false;
  public info_short_name: string;
  // 行业描述
  public flag_biz_desc: boolean = false;
  public info_biz_desc: string;
  //企业备选字号1
  public flag_customar_backup_name1: boolean = false;
  public info_customar_backup_name1: string;
  //企业备选字号2
  public flag_customar_backup_name2: boolean = false;
  public info_customar_backup_name2: string;
  //企业备选字号3
  public flag_customar_backup_name3: boolean = false;
  public info_customar_backup_name3: string;
  //投资方向：; //见表; //industry_focus
  public flag_industry_focus: boolean = false;
  public info_industry_focus: string;
  //执行事物合伙人是否是法人或其他组织:; //T:是，; //F:否
  public flag_if_exec_is_org: boolean = false;
  public info_if_exec_is_org: string;
  //全体合伙人是否授权执行事务合伙人代签工商登记文件：; //T：是，; //F：否
  public flag_if_exec_2_biz_reg: boolean = false;
  public info_if_exec_2_biz_reg: string;
  //是否允许有限合伙人与普通合伙人相互转变:; //T:是，; //F：否
  public flag_if_GP_LP_can_change: boolean = false;
  public info_if_GP_LP_can_change: string;
  //是否有资管产品作为合伙人:; //T:是，; //F:否
  public flag_if_asset_product_in_partner: boolean = false;
  public info_if_asset_product_in_partner: string;
  //是否允许合伙份额出质:; //T:; //是,; //F:否
  public flag_if_portion_can_pledge: boolean = false;
  public info_if_portion_can_pledge: string;
  //是否代账：; //; //T:; //是，; //F:; //否
  public flag_if_agent_accounting: boolean = false;
  public info_if_agent_accounting: string;
  //企业是否向园区移交秘钥:; //T:; //是，; //F:; //否
  public flag_if_secret_key_2_town: boolean = false;
  public info_if_secret_key_2_town: string;
  //是否开通银行短信提醒业务？; //T:; //是，; //F:; //否
  public flag_if_short_message: boolean = false;
  public info_if_short_message: string;
  //是否开通银行理财账户:; //; //T:; //是，; //F:; //否
  public flag_if_financial_account: boolean = false;
  public info_if_financial_account: string;
  //是否分页签署:; //T:是，; //F:否
  public flag_if_paging_sign: boolean = false;
  public info_if_paging_sign: string;
  //注册/认缴资金; //整数，需要除; //100
  public flag_registered_capital: boolean = false;
  public info_registered_capital: string;
  //合伙企业合伙人总数，或股东总数
  public flag_partner_count: boolean = false;
  public info_partner_count: string;
  //机构合伙人个数，或机构股东个数
  public flag_org_partner_count: boolean = false;
  public info_org_partner_count: string;
  //GP; //个数
  public flag_GP_count: boolean = false;
  public info_GP_count: string;
  //执行事物合伙人个数
  public flag_exection_count: boolean = false;
  public info_exection_count: string;
  //是否设立董事会; //:; //T:设立董事会，; //F:不设立董事会
  public flag_set_board_of_directors: boolean = false;
  public info_set_board_of_directors: string;
  //是否设副董事长,; //T:设立，; //F：不设立
  public flag_set_vice_chairman: boolean = false;
  public info_set_vice_chairman: string;
  //是否由董事会决定聘用、解聘承办公司审计业务的会计师事务所,; //T:是，F：否
  public flag_if_accounting_firm: boolean = false;
  public info_if_accounting_firm: string;
  //是否设立监事会，T:设立监事会，; //F:不设立监事会
  public flag_set_board_of_supervisors: boolean = false;
  public info_set_board_of_supervisors: string;
  //基金类型：; //O:开放式，; //C:封闭式
  public flag_fund_open_type: boolean = false;
  public info_fund_open_type: string;
  //是否执行事务合伙人管理，T:; //是，; //F:委托其他私募管理机构管理
  public flag_manage_by_executive_partner: boolean = false;
  public info_manage_by_executive_partner: string;
  //是否聘用外部投资顾问。T：是，F:; //否
  public flag_hire_investment_advisor: boolean = false;
  public info_hire_investment_advisor: string;
  //基金产品风险评级：1：高度风险，2：中高度，3：中等，4：中低度，; //5：低度
  public flag_fund_risk_rating: boolean = false;
  public info_fund_risk_rating: string;
  //客户风险识别、评估、承受能力:; //1:; //进取型，2：成长型，3：平衡型，4：稳健型，5：保守型
  public flag_fund_risk_endurance: boolean = false;
  public info_fund_risk_endurance: string;
  //股份是否托管,; //T:; //托管，; //F:; //不托管
  public flag_if_stock_trusteeship: boolean = false;
  public info_if_stock_trusteeship: string;
  //托管机构？; //0=不需要指定机构; //; //1=中信证券，; //2=招商证券
  public flag_if_trusteeship_org: boolean = false;
  public info_if_trusteeship_org: string;
  //是否需要私募基金管理人登记辅导？T:; //是，; //F:; //否
  public flag_if_registration_guidance: boolean = false;
  public info_if_registration_guidance: string;
  //管理人辅导机构：0=不要辅导机构; //1=中信证券，; //2=招商证券
  public flag_if_guidance_org: boolean = false;
  public info_if_guidance_org: string;
  //是否开通银期转账服务？T:; //是，; //F:; //否
  public flag_if_bank_futures_transfer: boolean = false;
  public info_if_bank_futures_transfer: string;
  //银期转账服务机构：0=无需服务; //1=中信证券，; //2=招商证券
  public flag_if_bank_futures_org: boolean = false;
  public info_if_bank_futures_org: string;
  //是否开通银证转账服务？T:; //是，; //F:; //否
  public flag_if_bank_securities_transfer: boolean = false;
  public info_if_bank_securities_transfer: string;
  //银证转账服务机构：; //0=无需服务; //; //1=中信证券，; //2=招商证券
  public flag_if_bank_securities_org: boolean = false;
  public info_if_bank_securities_org: string;
  //是否需要私募基金行政管理服务？T:; //是，; //F:; //否
  public flag_if_fund_administration: boolean = false;
  public info_if_fund_administration: string;
  //私募基金行政管理服务机构：; //0=无需服务; //1=中信证券，; //2=招商证券
  public flag_if_fund_admin_org: boolean = false;
  public info_if_fund_admin_org: string;
  // 实缴资金：整数，需要除 100
  public flag_paid_capital: boolean = false;
  public info_paid_capital: string;
  // GP出资总额 : 整数，需要 除 100
  public flag_GP_total_capital: boolean = false;
  public info_GP_total_capital: string;
  // 实控人姓名
  public flag_real_control_name: boolean = false;
  public info_real_control_name: string;
  // 实控人手机
  public flag_real_control_phone: boolean = false;
  public info_real_control_phone: string;
  // 实控人email
  public flag_real_control_email: boolean = false;
  public info_real_control_email: string;
  // 资金投向
  public flag_capital_investment: boolean = false;
  public info_capital_investment: string;
  // 甲方
  public flag_party_a: boolean = false;
  public info_party_a: string;
  // 甲方企业
  public flag_party_a_org: boolean = false;
  public info_party_a_org: string;
  //追加报价单（T：追加，F：不追加）
  public flag_append_quotation = false;
  public info_append_quotation: string;

  public check() {
    return (
      this.flag_customer_register_name ||
      this.flag_start_name ||
      this.flag_short_name ||
      this.flag_biz_desc ||
      this.flag_customar_backup_name1 ||
      this.flag_customar_backup_name2 ||
      this.flag_customar_backup_name3 ||
      this.flag_industry_focus ||
      this.flag_if_exec_is_org ||
      this.flag_if_exec_2_biz_reg ||
      this.flag_if_GP_LP_can_change ||
      this.flag_if_asset_product_in_partner ||
      this.flag_if_agent_accounting ||
      this.flag_if_secret_key_2_town ||
      this.flag_if_short_message ||
      this.flag_if_financial_account ||
      this.flag_if_paging_sign ||
      this.flag_registered_capital ||
      this.flag_partner_count ||
      this.flag_org_partner_count ||
      this.flag_GP_count ||
      this.flag_exection_count ||
      this.flag_set_board_of_directors ||
      this.flag_set_vice_chairman ||
      this.flag_if_accounting_firm ||
      this.flag_set_board_of_supervisors ||
      this.flag_fund_open_type ||
      this.flag_manage_by_executive_partner ||
      this.flag_hire_investment_advisor ||
      this.flag_fund_risk_rating ||
      this.flag_fund_risk_endurance ||
      this.flag_if_stock_trusteeship ||
      this.flag_if_trusteeship_org ||
      this.flag_if_registration_guidance ||
      this.flag_if_guidance_org ||
      this.flag_if_bank_futures_transfer ||
      this.flag_if_bank_futures_org ||
      this.flag_if_bank_securities_transfer ||
      this.flag_if_bank_securities_org ||
      this.flag_if_fund_administration ||
      this.flag_if_fund_admin_org ||
      this.flag_paid_capital ||
      this.flag_GP_total_capital ||
      this.flag_real_control_name ||
      this.flag_real_control_phone ||
      this.flag_real_control_email ||
      this.flag_capital_investment ||
      this.flag_party_a ||
      this.flag_party_a_org ||
      this.flag_append_quotation
    );
  }
}

// 冠名类型（1：冠省名，2：冠市名，3：冠县名）
export const StartNameArr = [
  { id: "1", text: "冠省名" },
  { id: "2", text: "冠市名" },
  { id: "3", text: "冠县名" }
];
export enum StartName {
  province = "1",
  city = "2",
  county = "3"
}
export const StartNameTextObj = {
  "1": "江西省",
  "2": "九江市",
  "3": "共青城"
};
