export class ProductCodeModel {
  public product_code: string; // 产品编码
  public zone_id: number; // 基金园区编码
  public service_type: string; // 服务类型： 1=基本服务， 2=订单服务
  public product_service: string; // 产品服务项目
  public payment_period: string; // 付费方式： 1=按次付费产品，2=一年产品一次付费，3=多年产品每年续费
  public apply_org: string; // 适用企业类型：1=投资类企业，2=总部类企业，3=双创类企业
  public price: string; // 产品价格
  public year3_discount: number; // 三年折扣  100=100%
  public year5_discount: number; // 五年折扣   100=100%
  public edition_vol: string; // 版本号
  public note: string; // 产品注释
  public service_clause: string; // 服务条款
  public additional_instructions: string; // 附加说明

  // 辅助字段
  public buyCount: number = 0; //购买份数
  public totalPrice: number = 0; //总价格
}

// 付费方式： 1=按次付费产品，2=一年产品一次付费，3=多年产品每年续费
export enum PaymentPeriod {
  payNum = '1',  //按次付费产品
  payYear = '2',  //一年产品一次付费
  payManyYear = '3',  //多年产品每年续费
}

export const PaymentPeriodObj = {
  '1' : '次',
  '2' : '年',
  '3' : '年'
}
