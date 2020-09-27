export class CAssetPartnerNoteModel{
  public customer_partner_sid: number;  // 企业关联人ID（唯一）：同一个人在一个/多个企业可以有多个角色
  public customer_org_reg_sid: number;  // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_vol: number;  // 机构客户当前版本，每变更一次加一
  public zone_id: number;  // 私募园区代码
  public asset_product_note1: string = '其中，X诚XXXX系列5号优选私募投资基金（私募基金备案号（如有）：  ）出资额 n 万元；X诚XXXX系列6号优选私募投资基金（私募基金备案号（如有）：  ）出资额 n万元；';  // 资管产品作为合伙人注释1
  public asset_product_note2: string = 'X诚XX（上海）股权投资管理有限公司根据X诚XXXX系列5号优选私募投资基金基金合同、X诚XXXX系列6号优选私募投资基金基金合同的授权，代表该等资管产品入伙本企业，代为行使该资管产品在本企业的全部权利，代为承担该等资管产品在本企业的全部义务。';  // 资管产品作为合伙人注释2
}

export class CAssetPartnerNoteHelper{
  //资管产品作为合伙人注释1
  public flag_asset_product_note1: boolean = false;
  public info_asset_product_note1: string;
  //资管产品作为合伙人注释2
  public flag_asset_product_note2: boolean = false;
  public info_asset_product_note2: string;

  check(){
    return this.flag_asset_product_note1 || this.flag_asset_product_note2;
  }
}
