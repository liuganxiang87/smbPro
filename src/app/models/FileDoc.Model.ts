export class FileDocModel{
  public file_index: number;
  public customer_org_reg_sid: number;  // 正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_org_id: string;  // 企业客户ID = 社会信用代码
  public step_cnt: number;  //变更的步骤
  public zone_id: number;  // 基金园区编码
  public file_type: number;  // 文件类型： 1=名称预审核书， 2=设立申请书， 3=合伙协议/公司章程， 4=       5=变更申请书，
  public file_name: string;  // file name
  public file_status: string = '0';  // 文件状态： 1=未审核，  2=客户经理审核通过， 3=风控审核通过，  4=客户收到PDF， 5=客户快递了文档
  public file_check_status: string;  // 审核状态： 1=审核未通过，  2=审核通过
  public file_check_time: string;  // 审核通过时间
  public file_link: string;  //
  public pdf_file_link: string;  //

  public uploadDisplay: boolean = false;  //上传pdf module是否显示
}

//甲方信息
export class PartyAInfo{
  public name: string;
  public company: string;
}

// 文件状态： 1=未审核，  2=客户经理审核通过， 3=风控审核通过，  4=客户收到PDF， 5=客户快递了文档
export enum FileStatus {
  wait = '1',
  workerPass = '2',
  riskPass = '3',
  sendCustomer = '4'
}
export const FileStatusObj = {
  '1' : '未审核',
  '2' : '待风控审核',
  '3' : '风控审核通过',
  '4' : '客户收到PDF'
};
// 文件类型： 1=名称预审核书， 2=设立申请书， 3=合伙协议/公司章程， 4=       5=变更申请书，
export enum FileType {
  nameApprove = 1,   // 名称预核准书
  setUpApply = 2,   // 设立申请书
  changeApply = 2,   // 变更申请书
  clearApply = 2,    // 注销申请书
  agreement = 3,  // 合伙协议/公司章程
  businessService = 4,    //商务服务协议
  informAdministrator = 5,   //管理人告知书
  informFund = 5,    //私募基金告知书
  informSharePlatform = 5,  //持股平台告知书
  informIndustryInvestment = 5,  //产业投资告知书
  informInvestmentServices = 5, //投资服务告知书
  informSpecialCarrier = 5,    //特殊载体告知书
  informOtherInvestment = 5,    //其他投资告知书
  inParkInfoValidity = 6,    //入园企业签字盖章真实性承诺函
  transferAgreement = 7, //份额转让协议部分
  warmPrompt = 8,    //温馨提示
  inform = 9, //企业入驻告知书
}

