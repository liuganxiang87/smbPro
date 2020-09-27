export class FileNotFundPartnerModel{
  public customer_org_reg_sid: number;  // 正在办理设立的机构顺序号， 指向customer_in_progress 的主键
  public zone_id: number;  //  基金园区编码
  public if_exec_2_biz_reg: string = 'F';  // 全体合伙人是否授权执行事务合伙人代签工商登记文件： T：是， F：否
  public if_exec_is_org: string;  // 执行事物合伙人是否是法人或其他组织: T:是， F:否, 在customer_in_progress 中有信息
  public if_GP_LP_can_change: string = 'F';  // 是否允许有限合伙人与普通合伙人相互转变: T:是， F：否
  public if_portion_can_pledge: string = 'F';  // 是否允许合伙份额出质: T: 是, F:否
  public purpose_of_partnership: string = '合法经营，获取经济效益';  // 合伙目的
  public scope_of_operation: string = "(未经金融监管部门批准,不得从事吸收存款、融资担保、代客理财、向社会公众集(融)资等金融业务) (除许可业务外,可自主依法经营法律法规非禁止或限制的项目)";  // 经营范围
  public operating_period: string;  // 经营期限
  public profit_distribution_mode: string = '按合伙人各自实缴的出资比例分配';  // 利润分配方式
  public profit_distribution_currency: string = '人民币或全体合伙人共同认可的其他形式';  // 利润分配币种
  public profit_distribution_time: string = '每年一月份最后一个工作日前，或经合伙人会议或执行事务合伙人决定的更早时间';  // 利润分配时间
  public loss_share_responsibility: string = '合伙企业的经营亏损由合伙企业的全部财产承担，所有合伙人按各自实缴的出资比例分担亏损';  // 企业亏损分担
  public excution_partner_fee: string = '执行事务合伙人的费用和报酬由全体合伙人另行约定。';  // 执行事务合伙人的费用和报酬
  public overdue_days: number = 30;  //  逾期天数【30天】及以上的，执行事务合伙人有权（但非义务）要求该有限合伙人退伙，
  public special_appointment: string;  // 特别约定
  public agreement_f_state: string;  // 合伙协议文件状态： 1=未生成， 2=正在修改， 3=已生成
  public agreement_file_name: string;  // 合伙协议（agreement file not fund partner)文件名(16位)： 【AFNFP】+ [customer_org_reg_sid]
  public agreement_file_link: string;  // 合伙协议 存储位置【AFNFP】（agreement file not fund partner）存放位置
  public if_recovery_then_distribution: string = 'T'; // 是否先回本再分配： T=是， F=否
}

export class FileNotFundPartnerHelper{
  // 全体合伙人是否授权执行事务合伙人代签工商登记文件： T：是， F：否
  public flag_if_exec_2_biz_reg: boolean = false;
  public info_if_exec_2_biz_reg: string = '';
  // 是否允许有限合伙人与普通合伙人相互转变: T:是， F：否
  public flag_if_GP_LP_can_change: boolean = false;
  public info_if_GP_LP_can_change: string = '';
  // 是否允许合伙份额出质: T: 是, F:否
  public flag_if_portion_can_pledge: boolean = false;
  public info_if_portion_can_pledge: string = '';
  // 合伙目的
  public flag_purpose_of_partnership: boolean = false;
  public info_purpose_of_partnership: string = '';
  // 经营范围
  public flag_scope_of_operation: boolean = false;
  public info_scope_of_operation: string = '';
  // 利润分配方式
  public flag_profit_distribution_mode: boolean = false;
  public info_profit_distribution_mode: string = '';
  // 利润分配币种
  public flag_profit_distribution_currency: boolean = false;
  public info_profit_distribution_currency: string = '';
  // 利润分配时间
  public flag_profit_distribution_time: boolean = false;
  public info_profit_distribution_time: string = '';
  // 企业亏损分担
  public flag_loss_share_responsibility: boolean = false;
  public info_loss_share_responsibility: string = '';
  // 执行事务合伙人的费用和报酬
  public flag_excution_partner_fee: boolean = false;
  public info_excution_partner_fee: string = '';
  //  逾期天数【30天】及以上的，执行事务合伙人有权（但非义务）要求该有限合伙人退伙，
  public flag_overdue_days: boolean = false;
  public info_overdue_days: string = '';
  // 特别约定
  public flag_special_appointment: boolean = false;
  public info_special_appointment: string = '';
  // 是否先回本再分配： T=是， F=否
  public flag_if_recovery_then_distribution: boolean = false;
  public info_if_recovery_then_distribution: string = '';

  check(){
    return this.flag_if_exec_2_biz_reg || this.flag_if_GP_LP_can_change || this.flag_if_portion_can_pledge || this.flag_purpose_of_partnership
        || this.flag_scope_of_operation || this.flag_profit_distribution_mode || this.flag_profit_distribution_currency || this.flag_profit_distribution_time
        || this.flag_loss_share_responsibility  || this.flag_excution_partner_fee || this.flag_overdue_days || this.flag_special_appointment
        || this.flag_if_recovery_then_distribution;
  }
}
