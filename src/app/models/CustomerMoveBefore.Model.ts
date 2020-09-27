export class CustomerMoveBeforeModel {
  public customer_org_reg_sid: number;
  public customer_org_id: string;  // 营业执照号码
  public org_structure: string | number;  // 企业架构： 1、有限合伙，2、有限公司
  public org_structure_detail: number;  /**迁转企业是有小类别的，需要根据二级 org_structure_detail，推导一级菜单*/
  public customer_name: string;  // 企业名称（迁入迁转之前）
  public scope_of_operation: string;  // 经营范围
  public registered_address: string;  // 注册地址
  public customer_org_begin_date: any;  // 经营期限开始时间
  public customer_org_end_date: any;  // 经营期限结束时间
  //自添   辅助字段
  public customer_lifecycle: any;    //经营期限   
  public isIndefiniteDuration: boolean = false;    //是否无限期
  // public smallClassText: string;        //原公司小类别 
  public values: number[];
  public nzOptions: any[];
  public org_small: any[];  //原公司小类别集合,eg:[-1,1130]
}
