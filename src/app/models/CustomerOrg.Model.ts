import {CustomerInProgressModel} from "./CustomerInProgress.Model";
import {CustomerPersonModel} from "./CustomerPerson.Model";
import {WorkerModel} from "./Worker.Model";

export class CustomerOrgModel {
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public customer_org_reg_sid: number; // 机构的机构客户序列号
  public customer_person_id: number; // 业务办理并直接掌控合伙企业的人
  public zone_id: number; // 基金园区编码
  public org_status: string; //  企业状态： 1=正常， 2=注销
  public org_structure: string; //  企业架构： 1、有限合伙，2、有限公司
  public org_class: number; // 客户可注册的类别（1：投资类企业、2：总部企业、3：双创企业、4：其他企业）
  public org_type: number; // 企业类型：1=管 理 人 2=私募基金 3=员工持股（需要母公司） 4=股权改造（需要母公司） 5=产业投资 6=高管平台（需要母公司） 7=实业经营 8=政府基金 9=内部持股（需要母公司） 10=债权投资 11=并购投资 12=员工跟投（需要母公司） 13=创投企业 14=其他投资
  public org_big_type: number; //企业类型（代替org_type）1:管理人 2:私募基金 4:持股平台 5:产业投资 7:投资服务 15:特殊载体 99:其他投资
  public fund_focus: number; // 基金投资方向：基金管理人： 1=证券投资管理 2=股权投资管理 3=创业投资管理 4=其他， 私募基金： 1=证券投资 2=股权投资 3=创业投资 4=其他
  public industry_focus: number; // （非私募基金）投资类企业的投资方向（行业）见表 industry_focus
  public scope_of_operation: string; //  经营范围
  public customer_name: string; //  最终确认的在园区将要设立或将要变成的企业名称
  public is_top_org: string; //  是否顶级机构， T: 顶级， M:中级（有上级，也有下级）， L：低级（无下级，有上级）
  public top_org: string; //  如果is_top_org 是否顶层机构='T' 则此栏为自身的社会信用代码， 否则为上层机构的社会信用代码
  public top_org_name: string; //如果is_top_org 是否顶层机构='T' 则此栏为空， 否则为上层机构名“标签”
  public contact_person_name: string; //联络人姓名
  public contact_person_phone: string; //联络人电话
  public attribution_area: string; // 归属地区（深圳办事处、上海办事处、北京办事处）
  public attribution_worker: number; // 归属客户经理（非做材料的办事员）
  public if_tax_return: string; // 是否返税：T:是，F:否
  public tax_return_rate: number; // 反税率
  public if_scan: string; // 是否已经扫描： T:是， F:否
  public customer_vol: number; // 机构客户当前版本，每变更一次加一
  public org_id_url: string; //营业执照文件地址
  public customer_org_begin_date: string; //  合伙期限开始年月日
  public customer_org_end_date: string; //  合伙期限终止年月日
  public last_day_4_pay: string; //  付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
  public registered_address: string; //  注册地址
  public register_person_id: number; // 注册(代办)人信息，指向customer_relation_person 表中的relation_person_id
  public org_fax: string; //  企业传真：订单协议需要
  public post_code: string; //  生产经营地邮政编码
  public abut_joint_person_id: number; // 对接人/联络人信息，指向customer_relation_person 表中的relation_person_id
  public c_accountant_person: number; // 客户财务人员，指向customer_relation_person 表中的relation_person_id
  public administrant_name: string; //  管理人名称
  public administrant_id: string; //  管理人编码：[Pnnnnnnn]
  public partner_execution_type: string; //  执行事务合伙人类别:1=自然人 2=公司 3=有限合伙 4=其他组织
  public partner_execution_org: number; // 执行事物合伙人是机构时指向 customer_relation_org 表的relation_org_id
  public partner_execution_person: number; // 执行事物合伙人（自然人）或者机构代表： 指向customer_relation_person 表中的relation_person_id
  public legal_representative: number; // 有限公司的法人代表：指向customer_relation_person 表中的relation_person_id
  public real_control_url: string; // 实际控制人证件URL
  public num_of_employee: number; // 员工个数
  public entrust_type: string; //  委托人类别: ？？未知用途 1、全体合伙人 2、执行事务合伙人 3、委派代表
  public if_registration_guidance: string; //  是否需要私募基金管理人登记辅导？T: 是， F: 否, 注释：是我们自己针对管理人提供的服务
  public if_investment_adviser: string; //  是否聘请外部投资顾问: T=是， F=否
  public investment_adviser_name: string; //  投资顾问名称，协议里用
  public adviser_certificate_id: string; //  投资顾问登记证书号码
  public if_trusteeship_org: string; //  托管机构？ F=不需要指定机构  T=之后选择1=中信证券， 2=招商证券
  public trusteeship_org_name: string; //  托管机构名称，私募基金才有
  public if_bank_futures_transfer: string; //  是否开通银期转账服务？T: 是， F: 否
  public if_bank_futures_org: number; // 银期转账服务机构：0=无需服务 1=中信证券， 2=招商证券
  public if_bank_securities_transfer: string; //  是否开通银证转账服务？T: 是， F: 否
  public if_bank_securities_org: number; // 银证转账服务机构： 0=无需服务  1=中信证券， 2=招商证券
  public credit_institution_code: string; //  信用机构代码，人民银行
  public bank_sid: number; // 开户银行的顺序号：见表 zone_bank 相应的银行列表 共青城：1=九江银行   2=中国银行   3=农业银行   4=建设银行   5=江西银行
  public bank_account: string; //  银行账号
  public if_pre_deposit: string; //  是否预存（订单）资金：T=是， F=否
  public w_admin_id: number; // 客户经理，员工号
  public worker_id: number; // 客户专员，员工号
  public w_accountant_person: number; // 财务人员的员工ID
  public undertake1: number; // 承揽人1
  public undertake2: number; // 承揽人2
  public source: number; // 来源：0=<空> 1=网站注册 2=客户自主上门或联系 3=客户经理开发 4=客户推荐 5=渠道推荐 6=介绍人推荐
  public source_id: number; // 来源ID，按来源取值：0-2= <空> 3=员工ID 4=客户ID 5=渠道ID 6=介绍人ID
  public agreement_templet: string; //  合伙协议/公司章程模板： 1=普通合伙， 2=基金合伙， 3=普通有限公司  4=基金类公司（不提供）
  public if_client_template: string; //是否是客户模版(T: 是 F:否）
  public if_asset_product_in_partner: string; //  是否有资管产品作为合伙人: T:是， F:否
  public if_short_message: string; //  是否开通银行短信提醒业务？ T: 是， F: 否
  public if_secret_key_2_town: string; //  企业是否向园区移交秘钥（报税）: T: 是， F: 否
  public secret_key: string; //  秘钥（报税）
  public if_financial_account: string; //  是否开通银行理财账户:  T: 是， F: 否
  public if_paging_sign: string; //  是否分页签署: T:是， F:否
  public express_num_in: string; //  收到从客户寄来的快递单号
  public express_num_out: string; //  给客户发送资料的快递单号
  public establish_time: string; //  企业成立时间
  public recent_change_time: string; //  最近一次变更日期时间
  public if_cancel: string; //  是否注销
  public cancel_reason: number; // 注销原因,1.期限届满不再经营 2. 出现合伙协议约定的解散事由 3.全体合伙人决定解散 4.合伙人已不具备法定人数满30天 5.合伙目的已经实现或无法实现 6.依法被吊销执照、责令关闭或者被撤销 7.其他法定原因
  public cancel_time: string; //  注销日期
  public local_admin_id: string; //本企业管理人编码：管理人类型企业：出营业执照后180天内完成管理人登记
  public product_id: string; //产品编码：私募基金类型企业：出营业执照后180天内完成产品备案
  public if_parent_org_change: string; //母公司是否变更：F:否，T：是，员工持股，股权改造，员工跟投企业：出营业执照后90天内完成母公司工商变更
  public if_org_start: string; //企业是否启用：F:否， T:是，出营业执照后180天内启用

  //辅助字段
  public progress: CustomerInProgressModel = new CustomerInProgressModel();
  public customerPerson: CustomerPersonModel = new CustomerPersonModel(); //企业的所有人
  public worker: WorkerModel = new WorkerModel(); //企业对应的客户经理
}
