export class CustomerPreDemandModel {
  public customer_org_reg_sid: number;  // 业务ID号
  public customer_org_id: string;  // 企业客户ID = 社会信用代码
  public zone_id: number;  // 基金园区编码
  public pre_bank_sid: number;  // 预选开户银行
  public if_registration_guidance: number;  // 是否需要私募基金管理人登记辅导(注释：是我们自己针对管理人提供的服务)
  public if_investment_adviser: number;  // 是否聘请外部投资顾问
  public investment_adviser_name: string;  // 投资顾问名称，协议里用
  public adviser_certificate_id: string;  // 投资顾问登记证书号码
  public if_trusteeship_org: number;  // 股份是否托管
  public trusteeship_org_name: string;  // 股份托管机构名称
  public if_invoice_seal: number;  // 是否刻发票章
  public if_contract_seal: number;  // 是否刻合同专用章
  public if_short_message: number;  // 是否开通银行短信通知
  public if_financial_account: number;  // 是否开通银行理财账户
  public if_foreign_exchange: number;  // 是否涉及外汇业务
  public if_biz_futures: number;  // 是否开通银期转账服务
  public futures_org: number;  // 银期转账服务机构
  public if_biz_security: number;  // 是否开通银证转账服务
  public security_org: number;  // 银证转账服务机构
  public if_raise_money_account: number;  // 是否开通募集监管账户
  public if_fund_custody_account: number;  // 是否开通基金托管账户
}
