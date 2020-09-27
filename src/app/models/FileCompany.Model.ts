export class FileCompanyModel{
  public customer_org_reg_sid: number;  // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public scope_of_operation: string = "(未经金融监管部门批准,不得从事吸收存款、融资担保、代客理财、向社会公众集(融)资等金融业务) (除许可业务外,可自主依法经营法律法规非禁止或限制的项目)"; // 经营范围
  public set_board_of_directors: string = "T"; // 是否设立董事会 : T:设立董事会， F:不设立董事会
  public set_board_of_supervisors: string = "T"; // 是否设立监事会，T:设立监事会， F:不设立监事会
  public set_vice_chairman: string = "T"; // 是否设副董事长, T:设立， F：不设立
  public if_accounting_firm: string = "T"; // 是否由董事会决定聘用、解聘承办公司审计业务的会计师事务所, T:是，F：否
  public if_administrant: string = "F"; // 是否私募基金管理人：T=是， F=否
  public if_director_decide_Investment: string = "T"; // 是否授权董事长或执行董事对公司管理的私募产品的投资做出决定： T=是， F=否
  public num_person_board_of_directors: number;  // 董事会人数
  public years_board_of_directors: number = 3;  // 董事每届任期[三]年
  public num_person_board_of_supervisors: number;  // 监事会成员人数
  public years_person_board_of_supervisors: number = 3;  // 监事会人员任期年数
  public num_of_supervisors: number;  // 无监事会时，监事的人数
  public agreement_f_state: string; // 合伙协议文件状态： 1=未生成， 2=正在修改， 3=已生成
  public agreement_file_name: string; // 合伙协议（agreement file not fund company)文件名(16位)： 【AFNFC】+ [customer_org_reg_sid]
  public agreement_file_link: string; // 合伙协议 存储位置
}

export class FileCompanyHelper{
  // 是否设立董事会 : T:设立董事会， F:不设立董事会
  public flag_set_board_of_directors: boolean = false;
  public info_set_board_of_directors: string;
  // 董事会人数
  public flag_num_person_board_of_directors: boolean = false;
  public info_num_person_board_of_directors: string;
  // 董事每届任期[三]年
  public flag_years_board_of_directors: boolean = false;
  public info_years_board_of_directors: string;
  // 是否设副董事长, T:设立， F：不设立
  public flag_set_vice_chairman: boolean = false;
  public info_set_vice_chairman: string;
  // 是否由董事会决定聘用、解聘承办公司审计业务的会计师事务所, T:是，F：否
  public flag_if_accounting_firm: boolean = false;
  public info_if_accounting_firm: string;
  // 是否设立监事会，T:设立监事会， F:不设立监事会
  public flag_set_board_of_supervisors: boolean = false;
  public info_set_board_of_supervisors: string;
  // 监事会人员任期年数
  public flag_years_person_board_of_supervisors: boolean = false;
  public info_years_person_board_of_supervisors: string;
  // 经营范围
  public flag_scope_of_operation: boolean = false;
  public info_scope_of_operation: string;
  // 是否私募基金管理人：T=是， F=否
  public flag_if_administrant: boolean = false;
  public info_if_administrant: string;
  // 是否授权董事长或执行董事对公司管理的私募产品的投资做出决定： T=是， F=否
  public flag_if_director_decide_Investment: boolean = false;
  public info_if_director_decide_Investment: string;

  check(){
    return this.flag_set_board_of_directors || this.flag_num_person_board_of_directors || this.flag_years_board_of_directors
      || this.flag_set_vice_chairman || this.flag_if_accounting_firm || this.flag_set_board_of_supervisors || this.flag_years_person_board_of_supervisors
      || this.flag_scope_of_operation || this.flag_if_administrant || this.flag_if_director_decide_Investment;
  }
}
