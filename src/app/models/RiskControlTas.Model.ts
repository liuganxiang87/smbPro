import { FileDocModel } from "./FileDoc.Model";
import { CustomerInProgressModel } from "./CustomerInProgress.Model";

export class RiskControlTasModel {
  public risk_control_task_id: number; // 风控审核任务表
  public customer_org_reg_sid: number; //正在办理机构的机构客户序列号，企业变更，机构ID（社会信用代码）不变，但多了一个临时序列号
  public customer_org_id: string; // 企业客户ID = 社会信用代码
  public zone_id: number; //基金园区编码
  public pdf_file_status: string; // 文件审核状态， 1=未通过， 2=通过
  public deliver_time: string; // 客户经理提交时间
  public check_time: string; // 风控专员审核时间

  //辅助字段
  public fileDoc: FileDocModel[] = [];
  public progress: CustomerInProgressModel = new CustomerInProgressModel();
}

// 文件审核状态， 1=待审核， 2=通过， 3=驳回
export enum PdfFileStatus{
  wait = '1',
  pass = '2',
  noPass = '3'
}
export const PdfFileStatusObj = {
  "1" : "待审核",
  "2" : "审核通过",
  "3" : "被驳回"
};
export const PdfFileStatusArr = [
  { id: "1", text: "待审核"},
  { id: "2", text: "审核通过"},
  { id: "3", text: "被驳回"},
];
