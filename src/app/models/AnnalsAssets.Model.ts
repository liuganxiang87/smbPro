export class AnnalsAssetsModel {
  public annal_id: number; // 对应年报记录ID
  public total_assets: string;  // 资产总额
  public total_assets_display: string;  // 资产总额（T：公示，F：不公示）
  public owner_equity: string;  // 所有者权益合计
  public owner_equity_display: string;  // 所有者权益合计（T：公示，F：不公示）
  public total_liabilities: string;  // 负债总额
  public total_liabilities_display: string;  // 负债总额（T：公示，F：不公示）
  public total_income: string;  // 营业总收入
  public total_income_display: string;  // 营业总收入（T：公示，F：不公示）
  public main_income: string;  // 其中主营业收入
  public main_income_display: string;  // 其中主营业收入（T：公示，F：不公示）
  public total_profit: string;  // 利润总额
  public total_profit_display: string;  // 利润总额（T：公示，F：不公示）
  public retained_profits: string;  // 净利润
  public retained_profits_display: string;  // 净利润（T：公示，F：不公示）
  public total_tax: string;  // 纳税总额
  public total_tax_display: string;  // 纳税总额（T：公示，F：不公示）
  public created_at: number; // 创建时间
  public updated_at: number; // 更新时间
}
