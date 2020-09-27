export class AnnalsSocialSecurityModel {
  public annal_id: number;  // 对应年报记录ID
  public endowment_insurance_num: number;  //  城镇职工基本养老保险（单位：人）(公示)
  public unemployment_insurance_num: number;  // 失业保险（单位：人）(公示)
  public medical_insurance_num: number;  // 职工基本医疗保险（单位：人）(公示)
  public injury_insurance_num: number;  // 工伤保险（单位：人）(公示)
  public birth_insurance_num: number;  // 生育保险（单位：人）(公示)
  public payment_base_display: string; // 单位缴费基数，是否公示（T：公示，F：不公示）
  public endowment_insurance_base: string; // 单位参加城镇职工基本养老保险缴费基数
  public unemployment_insurance_base: string; // 单位参加失业保险缴费基数
  public medical_insurance_base: string; // 单位参加职工基本医疗保险缴费基数
  public birth_insurance_base: string; // 单位参加生育保险缴费基数
  public real_pay_display: string; // 本期实际缴费金额，是否公示（T：公示，F：不公示）
  public endowment_insurance_real: string; // 参加城镇职工基本养老保险本期实际缴费金额
  public unemployment_insurance_real: string; // 参加失业保险本期实际缴费金额
  public medical_insurance_real: string; // 参加职工基本医疗保险本期实际缴费金额
  public injury_insurance_real: string; // 参加工伤保险本期实际缴费金额
  public birth_insurance_real: string; // 参加生育保险本期实际缴费金额
  public owe_fee_display: string; // 单位累计欠缴金额，是否公示（T：公示，F：不公示）
  public endowment_insurance_owe: string; // 单位参加城镇职工基本养老保险累计欠缴金额
  public unemployment_insurance_owe: string; // 单位参加失业保险累计欠缴金额
  public medical_insurance_owe: string; // 单位参加职工基本医疗保险累计欠缴金额
  public injury_insurance_owe: string; // 单位参加工伤保险累计欠缴金额
  public birth_insurance_owe: string; // 单位参加生育保险累计欠缴金额
  public created_at: number;  // 创建时间
  public updated_at: number;  // 更新时间
}
