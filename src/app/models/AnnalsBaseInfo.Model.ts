import {AnnalsPartyBuildModel} from "./AnnalsPartyBuild.Model";
import {AnnalsAssetsModel} from "./AnnalsAssets.Model";
import {AnnalsSocialSecurityModel} from "./AnnalsSocialSecurity.Model";
import {AnnalsWebModel} from "./AnnalsWeb.Model";
import {AnnalsForInvestmentModel} from "./AnnalsForInvestment.Model";
import {WorkerModel} from "./Worker.Model";

export class AnnalsBaseInfoModel {
  public id: number;
  public zone_id: number; //基金园区编码
  public customer_org_id: string;  // 统一社会信用代码/注册号
  public customer_name: string;  // 企业名称
  public annals_year: number;  // 报告年度
  public annal_status: number;  // 年报状态
  public contact_address: string;  // 企业通讯地址
  public postal_code: string = '332020';  // 邮政编码
  public call_num: string = '0792-4395333';  // 企业联系电话
  public email: string;  // 电子邮箱
  public scope_of_operation: string;  // 经营范围
  public employee_num: number = 2;  // 从业人数
  public employee_num_display: string = 'F';  // 从业人数，是否公示（T：公示，F：不公示）
  public female_employee_num: number = 0;  // 女性从业人数
  public female_employee_num_display: string = 'F';  // 女性从业人数，是否公示（T：公示，F：不公示）
  public org_status: number = 1;  // 企业经营状态（1：开业，2：歇业，3：清算）
  public holdings_msg: number;  // 企业控股情况（1：私人控股）
  public holdings_msg_display: string = 'F';  // 企业控股情况，是否公示（T：公示，F：不公示）
  public if_for_guarantee: string = 'F';  // 是否有对外担保（T：是，F：否）
  public if_web: string = 'F';  // 是否有网站或网店（T：是，F：否）
  public if_transfer: string = 'F';  // 本年度是否发生股东股权转让（T：是，F：否）
  public if_for_investment: string = 'F';  // 是否有投资信息或购买其他公司股权（T：是，F：否）
  public if_prepaid_card: string = 'F';  // 是否有预付卡（T：是，F：否）
  public boss_college_student_nums: number = 1;  //   其中高校毕业生人数（经营者）
  public employe_college_student_nums: number = 1;  //  其中高校毕业生人数（雇员）
  public boss_retired_soldier_nums: number = 1;  //  其中退役士兵人数（经营者）
  public employe_retired_soldier_nums: number = 1;  //  其中退役士兵人数（雇员）
  public boss_handicapped_nums: number = 1;  //  其中残疾人人数（经营者）
  public employe_handicapped_nums: number = 1;  //  其中残疾人人数（雇员）
  public boss_reemployment_nums: number = 1;  //  其中失业人员再就业人数（经营者）
  public employe_reemployment_nums: number = 1;  //  其中失业人员再就业人数（雇员）
  public worker_id: number; // 申报人（员工ID）
  public worker_pwd: string;  // 密码
  public updated_by: number;  // 最后操作人（员工ID）
  public created_at: number;  // 创建时间
  public updated_at: number;  // 更新时间

  // 辅助字段
  public party: AnnalsPartyBuildModel = new AnnalsPartyBuildModel();  // 党建信息
  public asset: AnnalsAssetsModel = new AnnalsAssetsModel();  // 资产状况信息
  public socialSecurity: AnnalsSocialSecurityModel = new AnnalsSocialSecurityModel(); // 社保信息
  public webs: AnnalsWebModel[] = []; // 网站或网店信息
  public investments: AnnalsForInvestmentModel[] = [];  // 对外投资信息
  public worker: WorkerModel = new WorkerModel();
}
