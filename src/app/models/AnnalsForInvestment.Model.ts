export class AnnalsForInvestmentModel {
  public id: number;
  public annal_id: number; // 对应年报记录ID
  public invest_org_name: string;  // 投资设立企业或购买股权企业名称
  public invest_org_id: string;  //  统一社会信用代码/注册号
  public created_at: number; // 创建时间
  public updated_at: number; //  更新时间
}
