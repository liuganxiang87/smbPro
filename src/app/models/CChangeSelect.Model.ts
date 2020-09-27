export class CChangeSelect {
  public customer_org_reg_sid: number;
  public if_change_amount: boolean; // 出资额是否变：T=是，F否
  public if_change_name: boolean; // 是否变2=合伙人名字
  public if_change_pay_period: boolean; // 3=缴付期限
  public if_change_scope_operation: boolean; // 4=经营范围
  public if_change_operating_period: boolean; // 5=经营期限
  public if_change_org_name: boolean; // 6=企业名称
  public if_change_real_pay: boolean; // 7=实缴金额
  public if_out: boolean; // 8=退伙
  public if_in: boolean; // 9=入伙
  public if_change_representative: boolean; // 10=委派代表
  public if_change_exec_partner: boolean; // 11=执行事务合伙人(有限合伙)
  public if_transfer_possession: boolean; // 12=转让
  public if_change_total_amount: boolean; // 13=总出资额
  public if_change_GP_LP: boolean; // 14=是否变更GP到LP ，或 LP到GP(有限合伙)
  public if_change_directors: boolean; // 15=是否有董事变更(有限公司)
  public if_change_supervisors: boolean; // 16=是否有监事变更(有限公司)
  public if_change_legal_representative: boolean; // 17=是否变更法人代表(有限公司)
  public if_change_manager: boolean; // 18=是否变更经理(有限公司)

  //辅助字段
  /***************************(是否被选中) start***************************/
  public flag_change_amount: boolean = false; // 出资额是否变：T=是，F否
  public flag_change_name: boolean = false; // 是否变2=合伙人名字
  public flag_change_pay_period: boolean = false; // 3=缴付期限
  public flag_change_scope_operation: boolean = false; // 4=经营范围
  public flag_change_operating_period: boolean = false; // 5=经营期限
  public flag_change_org_name: boolean = false; // 6=企业名称
  public flag_change_real_pay: boolean = false; // 7=实缴金额
  public flag_out: boolean = false; // 8=退伙
  public flag_in: boolean = false; // 9=入伙
  public flag_change_representative: boolean = false; // 10=委派代表
  public flag_change_exec_partner: boolean = false; // 11=执行事务合伙人(有限合伙)
  public flag_transfer_possession: boolean = false; // 12=转让
  public flag_change_total_amount: boolean = false; // 13=总出资额
  public flag_change_GP_LP: boolean = false; // 14=是否变更GP到LP ，或 LP到GP(有限合伙)
  public flag_change_directors: boolean = false; // 15=是否有董事变更(有限公司)
  public flag_change_supervisors: boolean = false; // 16=是否有监事变更(有限公司)
  public flag_change_legal_representative: boolean = false; // 17=是否变更法人代表(有限公司)
  public flag_change_manager: boolean = false; // 18=是否变更经理(有限公司)
  /***************************(是否被选中) end***************************/
}

//辅助类 更名企业
export class orgContrast{
  public lastOrg: string;  //过去的企业
  public newOrg: string;  //新的企业
}

//辅助类 份额转让
export class transferShares{
  public transferOut: string; //转出股份股东/合伙人
  public transferIn: string;  //转入股份股东/合伙人
  public transferMoney: number; //转让份额
}



