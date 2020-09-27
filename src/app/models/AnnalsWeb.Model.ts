export class AnnalsWebModel {
  public id: number;
  public annal_id: number;  // 对应年报记录ID
  public web_type: number;  // 网站或网店类型（1：网站，2：网店）
  public web_name: string;  // 网站或网店名称
  public web_site: string;  //  网站或网店网址
  public created_at: number;  // 创建时间
  public updated_at: number;  // 更新时间
}
