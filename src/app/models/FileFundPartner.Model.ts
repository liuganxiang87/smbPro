export class FileFundPartnerModel {
  public customer_org_reg_sid: number; // 正在办理设立的机构顺序号， 指向customer_in_progress 的主键
  public zone_id: number; // 基金园区编码
  public if_stock_right: string = "T"; // 是否股权投资： T=是， F=其他投资
  public if_exec_2_biz_reg: string = "T"; // 全体合伙人是否授权执行事务合伙人代签工商登记文件： T：是， F：否
  public if_exec_is_org: string; // 执行事物合伙人是否是法人或其他组织: T:是， F:否
  public if_GP_LP_can_change: string = "F"; // 是否允许有限合伙人与普通合伙人相互转变: T:是， F：否
  public if_portion_can_pledge: string = "F"; // 是否允许合伙份额出质: T: 是, F:否
  public fund_open_type: string = "O"; // 基金类型： O:开放式， C:封闭式
  public if_open_locking: string = "T"; // 开放式基金是否设锁定期：T=设锁定期， F=不设置锁定期
  public locking_period: number = 6; // 开放式基金的锁定期(月)
  public if_lock_period_can_apply: string = "F"; // 是否封闭期内可入伙申购： T=是， F=否
  public if_pre_locking: string = "F"; // 是否设置准锁定期
  public pre_locking_period: number = 6; // 开放式基金的准锁定期（月）
  public manage_by_executive_partner: string = "T"; // 是否执行事务合伙人管理，T: 是， F:委托其他私募管理机构管理
  public third_fund_agency_name: string; // 第三方基金管理机构名称， 当 manage_by_executive_partner 为F 时
  public third_fund_agency_id: string; // 第三方基金管理机构登记证书号：Pxxxxxx, 当 manage_by_executive_partner 为F 时
  public fund_risk_rating: string = "1"; // 基金产品风险评级：1：高度风险，2：中高度，3：中等，4：中低度， 5：低度
  public fund_risk_endurance: string = "1"; // 客户风险识别、评估、承受能力: 1: 进取型，2：成长型，3：平衡型，4：稳健型，5：保守型
  public purpose_of_partnership: string = "对本合伙企业的财产进行投资管理和专业运作，以实现合伙企业财产的保值增值"; // 合伙企业经营目的
  public scope_of_operation: string =
    "(未经金融监管部门批准,不得从事吸收存款、融资担保、代客理财、向社会公众集(融)资等金融业务) (除许可业务外,可自主依法经营法律法规非禁止或限制的项目)"; // 经营范围
  public operating_period: string; // 经营期限: 当前日期（xxxx年xx月xx日）]至【[默认值=30年后的对日-1日（xxxx年xx月xx日）， 从 customer_in_progress 表 customer_org_begin_date，和customer_org_end_date
  public period_extend: string =
    "执行事务合伙人可以决定延长合伙企业的经营期限。执行事务合伙人决定延长经营期限的，其他合伙人不得要求合伙企业解散，但可以依本协议的规定退伙"; // 经营期限延长
  public lowest_capital: number = 100; // 最低出资额（万元）
  public increments_capital: number = 10; // 出资额递增量（万元）
  public days_overdue: number = 30; // 逾期[30]天,有限合伙人未按照本协议约定的金额和约定的时间、或者未按照执行事务合伙人指定的时间和金额实缴资金的，应承担违约责任。逾期[30]天及以上的，执行事务合伙人有权利（但非义务）将该有限合伙人退伙，该有限合伙人必须无条件协助合伙企业或执行事务合伙人办理与退伙相关的工商登记手续。
  public fund_open_date: string = "每季度最后一个工作日"; // 开放式基金开放日
  public withdraw_rate: number = 3; // 封闭式基金提前退伙费率 %
  public append_fund_start: number = 10; // 追加投资起点
  public append_fund_increase: number = 10; // 追加投资增量
  public pre_lock_withdraw_rate: number = 3; // 准锁定期减资费率 %
  public investment_calm_period: number = 24; // 投资冷静期(小时)
  public management_expense_rate: number = 0.2; // 基金管理费比率默认值
  public stock_trusteeship_rate: number = 0.2; // 托管费比率默认值=0.2%
  public liquidated_damages: number = 10; // 违约，其他守约合伙人支付其已缴纳出资的金额【10%】的违约金
  public transfer_possession: number = 10; // 以实际出资时货币价值的【100%】为交易价格，违约转让
  public other_clause1: string =
    "本协议未约定、约定不明确、或者互相冲突的事项，由合伙人协商决定；协商不成的，依照本法和其他有关法律、行政法规的规定处理。"; // 第三十五条 其他,第一条
  public other_clause2: string; // 第三十五条 其他,第2条
  public agreement_f_state: string; // 合伙协议文件状态： 1=未生成， 2=正在修改， 3=已生成
  public agreement_file_name: string; // 合伙协议（agreement file fund partner)文件名(15位)： 【AFFP】+ [customer_org_reg_sid]
  public agreement_file_link: string; // 合伙协议 存储位置【AFNFP】（agreement file not fund partner）存放位置
}

export class FileFundPartnerHelper {
  // 是否股权投资： T=是， F=其他投资
  public flag_if_stock_right: boolean = false;
  public info_if_stock_right: string;
  // 全体合伙人是否授权执行事务合伙人代签工商登记文件： T：是， F：否
  public flag_if_exec_2_biz_reg: boolean = false;
  public info_if_exec_2_biz_reg: string;
  // 是否允许有限合伙人与普通合伙人相互转变: T:是， F：否
  public flag_if_GP_LP_can_change: boolean = false;
  public info_if_GP_LP_can_change: string;
  // 是否允许合伙份额出质: T: 是, F:否
  public flag_if_portion_can_pledge: boolean = false;
  public info_if_portion_can_pledge: string;
  // 基金类型： O:开放式， C:封闭式
  public flag_fund_open_type: boolean = false;
  public info_fund_open_type: string;
  // 开放式基金是否设锁定期：T=设锁定期， F=不设置锁定期
  public flag_if_open_locking: boolean = false;
  public info_if_open_locking: string;
  // 开放式基金的锁定期(月)
  public flag_locking_period: boolean = false;
  public info_locking_period: string;
  // 是否封闭期内可入伙申购： T=是， F=否
  public flag_if_lock_period_can_apply: boolean = false;
  public info_if_lock_period_can_apply: string;
  // 是否设置准锁定期
  public flag_if_pre_locking: boolean = false;
  public info_if_pre_locking: string;
  // 开放式基金的准锁定期（月）
  public flag_pre_locking_period: boolean = false;
  public info_pre_locking_period: string;
  // 是否执行事务合伙人管理，T: 是， F:委托其他私募管理机构管理
  public flag_manage_by_executive_partner: boolean = false;
  public info_manage_by_executive_partner: string;
  // 第三方基金管理机构名称， 当 manage_by_executive_partner 为F 时
  public flag_third_fund_agency_name: boolean = false;
  public info_third_fund_agency_name: string;
  // 第三方基金管理机构登记证书号：Pxxxxxx, 当 manage_by_executive_partner 为F 时
  public flag_third_fund_agency_id: boolean = false;
  public info_third_fund_agency_id: string;
  // 基金产品风险评级：1：高度风险，2：中高度，3：中等，4：中低度， 5：低度
  public flag_fund_risk_rating: boolean = false;
  public info_fund_risk_rating: string;
  // 客户风险识别、评估、承受能力: 1: 进取型，2：成长型，3：平衡型，4：稳健型，5：保守型
  public flag_fund_risk_endurance: boolean = false;
  public info_fund_risk_endurance: string;
  // 托管费比率默认值=0.2%
  public flag_stock_trusteeship_rate: boolean = false;
  public info_stock_trusteeship_rate: string;
  // 合伙企业经营目的
  public flag_purpose_of_partnership: boolean = false;
  public info_purpose_of_partnership: string;
  // 经营范围
  public flag_scope_of_operation: boolean = false;
  public info_scope_of_operation: string;
  // 经营期限: 当前日期（xxxx年xx月xx日）]至【[默认值=30年后的对日-1日（xxxx年xx月xx日）， 从 customer_in_progress 表 customer_org_begin_date，和customer_org_end_date
  public flag_operating_period: boolean = false;
  public info_operating_period: string;
  // 经营期限延长
  public flag_period_extend: boolean = false;
  public info_period_extend: string;
  // 最低出资额（万元）
  public flag_lowest_capital: boolean = false;
  public info_lowest_capital: string;
  // 出资额递增量（万元）
  public flag_increments_capital: boolean = false;
  public info_increments_capital: string;
  // 逾期[30]天,有限合伙人未按照本协议约定的金额和约定的时间、或者未按照执行事务合伙人指定的时间和金额实缴资金的，应承担违约责任。逾期[30]天及以上的，执行事务合伙人有权利（但非义务）将该有限合伙人退伙，该有限合伙人必须无条件协助合伙企业或执行事务合伙人办理与退伙相关的工商登记手续。
  public flag_days_overdue: boolean = false;
  public info_days_overdue: string;
  // 开放式基金开放日
  public flag_fund_open_date: boolean = false;
  public info_fund_open_date: string;
  // 封闭式基金提前退伙费率 %
  public flag_withdraw_rate: boolean = false;
  public info_withdraw_rate: string;
  // 追加投资起点
  public flag_append_fund_start: boolean = false;
  public info_append_fund_start: string;
  // 追加投资增量
  public flag_append_fund_increase: boolean = false;
  public info_append_fund_increase: string;
  // 准锁定期减资费率 %
  public flag_pre_lock_withdraw_rate: boolean = false;
  public info_pre_lock_withdraw_rate: string;
  // 投资冷静期(小时)
  public flag_investment_calm_period: boolean = false;
  public info_investment_calm_period: string;
  // 基金管理费比率默认值
  public flag_management_expense_rate: boolean = false;
  public info_management_expense_rate: string;
  // 违约，其他守约合伙人支付其已缴纳出资的金额【10%】的违约金
  public flag_liquidated_damages: boolean = false;
  public info_liquidated_damages: string;
  // 以实际出资时货币价值的【100%】为交易价格，违约转让
  public flag_transfer_possession: boolean = false;
  public info_transfer_possession: string;
  // 第三十五条 其他,第一条
  public flag_other_clause1: boolean = false;
  public info_other_clause1: string;
  // 第三十五条 其他,第2条
  public flag_other_clause2: boolean = false;
  public info_other_clause2: string;

  public check() {
    return (
      this.flag_if_stock_right ||
      this.flag_if_exec_2_biz_reg ||
      this.flag_if_GP_LP_can_change ||
      this.flag_if_portion_can_pledge ||
      this.flag_fund_open_type ||
      this.flag_if_open_locking ||
      this.flag_locking_period ||
      this.flag_if_lock_period_can_apply ||
      this.flag_if_pre_locking ||
      this.flag_pre_locking_period ||
      this.flag_manage_by_executive_partner ||
      this.flag_third_fund_agency_name ||
      this.flag_third_fund_agency_id ||
      this.flag_fund_risk_rating ||
      this.flag_fund_risk_endurance ||
      this.flag_stock_trusteeship_rate ||
      this.flag_purpose_of_partnership ||
      this.flag_scope_of_operation ||
      this.flag_operating_period ||
      this.flag_period_extend ||
      this.flag_lowest_capital ||
      this.flag_increments_capital ||
      this.flag_days_overdue ||
      this.flag_fund_open_date ||
      this.flag_withdraw_rate ||
      this.flag_append_fund_start ||
      this.flag_append_fund_increase ||
      this.flag_pre_lock_withdraw_rate ||
      this.flag_investment_calm_period ||
      this.flag_management_expense_rate ||
      this.flag_liquidated_damages ||
      this.flag_transfer_possession ||
      this.flag_other_clause1 ||
      this.flag_other_clause2
    );
  }
}

//基金类型：; //O:开放式，; //C:封闭式
export enum FundOpenType {
  open = "O",
  close = "C"
}
export const FundOpenTypeArr = [
  { status: "O", text: "开放式" },
  { status: "C", text: "封闭式" }
];
//基金产品风险评级：1：高度风险，2：中高度，3：中等，4：中低度，; //5：低度
export const FundRiskRatingArr = [
  { id: "1", text: "高度风险" },
  { id: "2", text: "中高度" },
  { id: "3", text: "中等" },
  { id: "4", text: "中低度" },
  { id: "5", text: "低度" }
];
//客户风险识别、评估、承受能力:; //1:; //进取型，2：成长型，3：平衡型，4：稳健型，5：保守型
export const FundRiskEnduranceArr = [
  { id: "1", text: "进取型" },
  { id: "2", text: "成长型" },
  { id: "3", text: "平衡型" },
  { id: "4", text: "稳健型" },
  { id: "5", text: "保守型" }
];
