import {ProductCodeModel} from "./ProductCode.Model";

export class CustomerOrderModel {
  public order_id: number; // 订单编号
  public customer_org_reg_sid: number; //  正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public zone_id: number; //  基金园区编码
  public edition_vol: string; //版本号
  public contract_id: string; // 合同号：RSC[2018nnnnn] 一个合同有多个订单
  public place_order_dtime: string; // 下单日期时间
  public product_code: string; // 产品编码，见产品编码表：product_code
  public payment_period: string; // 付费周期： 1=按次付费产品，2=一年产品一次付费，3=多年产品每年续费
  public payment_method: string; // 付费方式： 1=实时付费，2=预存付费，3=一次付多年
  public original_price: number; //  未折扣初始价格
  public discount_type: string; // 折扣类型： 1=产品自选，  2=园区批准
  public discount_rate: string; // 折扣率：默认 100%
  public price_after_discount: string; // 折后价格
  public purchase_quantity: number; //  购买数量
  public order_begin_date: string; // 订单生效日期
  public order_end_date: string; // 订单终止日
  public if_urgent: string; // 是否加急： T=加急  F=普通
  public if_discount_approval: string; // 折扣率是否已被批准
  public discount_apply_worker_id: number; //  折扣率申请工号
  public discount_apply_date_time: string; // 折扣率申请日期+时间
  public discount_approval_worker_id: number; //  折扣率批准工号
  public discount_approval_date_time: string; // 折扣略批准日期+时间
  public order_note: string; // 客户经理或客户对订单的备注
  public order_state: string; // 订单执行状态： N=未执行， I=执行中， E=结束， C=取消
  public pay_state: string; //订单支付状态： N=未支付(未生成汇款记录) W=等待支付(已生成汇款记录) Y=已支付
  public capital_flow_id: number; //  资金变动流水号: 指向 customer_capital_flow 表的  capital_flow_id 客户资金流水号
  public order_file_link: string; // 订单合同文件地址

  //关联字段
  public product: ProductCodeModel; //订单关联产品信息
}

// 订单支付状态： N=未支付 W=待支付 Y=已支付
export enum PayState {
  no = 'N',
  wait = 'W',
  paid = 'Y'
}
export const PayStateObj = {
  "N" : "未支付",
  "W" : "待支付",
  "Y" : "已支付"
};
// 订单执行状态： N=未执行， I=执行中， E=结束
export enum OrderState {
  noDo = 'N',
  ing = 'I',
  end = 'E',
  cancel = 'C'
}
export const OrderStateObj = {
  "N" : "未执行",
  "I" : "执行中",
  "E" : "结束",
  "C" : "取消"
};
