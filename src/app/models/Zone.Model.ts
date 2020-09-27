export class ZoneModel {
    public zone_id: number;   // 私募基金园区ID
    public zone_name: string; // 私募基金园区名称
    public zone_short_name: string; // 园区简称
    public zone_top_name: string; //
    public zone_addr: string; // 园区地址
    public zone_website: string;  // 园区网站地址
    public zone_order_title: string;  // 合同号标题
    public zone_order_num: number;  // 合同号： 递增： 跨年从1重新开始
    public serve_org: string; // 服务商
    public bank_name: string; // 银行名称
    public bank_account: string;  // 银行账号
    public telephone: string; // 联系电话
}

export enum Gender {
  man = "M",
  woman = "F"
}
