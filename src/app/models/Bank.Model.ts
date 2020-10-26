export class BankModel {
    bank_name: string;
    bank_sid: number;
    display: number;
    display_for_customer: number;
    if_biz_futures: number;
    if_biz_security: number;
    if_foreign_exchange: number;
    if_fund_custody_account: number;
    if_raise_money_account: number;
    text: string;
    zone_id: number;
    // 添加辅助
    key: string;
    value: number;
    isHidden: boolean;
}