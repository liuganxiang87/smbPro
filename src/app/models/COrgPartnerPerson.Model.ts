export class COrgPartnerPersonModel {
  public customer_partner_sid: number; // 股东ID
  public customer_org_reg_sid: number; //  正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_vol: number; //  机构客户当前版本，每变更一次加一
  public zone_id: number; //  私募园区代码
  public R_person_name: string; //  关联人姓名
  public R_person_sex: string; //  关联人性别：M:男  F:女
  public R_person_id_card_num: string; //  关联人身份证号
  public R_person_phone_num: string; //  关联人手机号码
  public R_person_addr: string; //  关联人身份证地址
  public R_person_race: number; // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public R_person_political: number; // 政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public R_person_education: number; // 文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public R_person_position: string; //  关联人所在机构的职位
  public R_person_wechat: string; //  关联人微信号
  public R_person_QQ: string; //  关联人QQ号
  public R_email: string; //邮箱
}

export class COrgPartnerPersonHelper {
  //  关联人姓名
  public flag_R_person_name: boolean = false;
  public info_R_person_name: string;
  //  关联人性别：M:男  F:女
  public flag_R_person_sex: boolean = false;
  public info_R_person_sex: string;
  //  关联人身份证号
  public flag_R_person_id_card_num: boolean = false;
  public info_R_person_id_card_num: string;
  //  关联人手机号码
  public flag_R_person_phone_num: boolean = false;
  public info_R_person_phone_num: string;
  //  关联人身份证地址
  public flag_R_person_addr: boolean = false;
  public info_R_person_addr: string;
  // 民族(1：汉族，2：蒙古族，3：回族，4：藏族，5：维吾尔族，6：苗族，7：彝族，8：壮族，9：布依族，10：朝鲜族，11：满族，12：侗族，13：瑶族，14：白族，15：土家族，16：哈尼族，17：哈萨克族，18：傣族，19：黎族，20：傈僳族，21：佤族，22：畲族，23：高山族，24：拉祜族，25：水族，26：东乡族，27：纳西族，28：景颇族，29：柯尔克孜族，30：土族，31：达斡尔族，32：仫佬族，33：羌族，34：布朗族)
  public flag_R_person_race: boolean = false;
  public info_R_person_race: string;
  // 政治面貌(1：中共党员，2：中共预备党员，3：共青团员，4：民革会员，5：民盟盟员，6：民建会员，7：民进会员，8：农工党党员，9：致公党党员，10：九三学社社员，11：台盟盟员，12：无党派民主人士，13：群众)
  public flag_R_person_political: boolean = false;
  public info_R_person_political: string;
  // 文化程度(1：研究生及以上，  2：大学本科，  3：大学专科，  4：中等专业学校，  5：技工学校，  6：高中学历，  7：初中学历，  8：小学及以下)
  public flag_R_person_education: boolean = false;
  public info_R_person_education: string;
  // 邮箱
  public flag_R_email: boolean = false;
  public info_R_email: string;

  public check() {
    return (
      this.flag_R_person_name ||
      this.flag_R_person_sex ||
      this.flag_R_person_id_card_num ||
      this.flag_R_person_phone_num ||
      this.flag_R_person_addr ||
      this.flag_R_person_race ||
      this.flag_R_person_political ||
      this.flag_R_person_education ||
      this.flag_R_email
    );
  }
}
