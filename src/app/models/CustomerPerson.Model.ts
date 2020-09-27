import { CertificationPhotoModel } from './CertificationPhoto.Model';

export class CustomerPersonModel {
  public c_person_id: number; //注册的个人客户，用此ID和身份证 管理自己设立的机构，在同一园区此ID 唯一
  public zone_id: number; //园区ID
  public c_person_name: string = ''; //个人：客户姓名(与身份证一致)
  public c_person_id_card: string = '';  //身份证号
  public c_person_addr: string = ''; //身份证上的地址
  public c_person_sex: string = '';  //M:男， F:女
  public c_undertake1: number;  //承揽人1
  public c_undertake2: number;  //承揽人2
  public c_employer: string = '';  //所属单位名称
  public c_employer_addr: string = ''; //客户所在机构注册地址
  public c_org_id: string = '';  //企业客户ID = 社会信用代码
  public c_department: string = '';  //个人：客户所在单位部门,机构：对接人所在部门
  public c_position: string = '';  //个人：客户职务,机构：对接人职务
  public c_mobilephone: string = ''; //个人：客户手机号码,机构：对接人手机号码
  public c_email: string = ''; //个人：客户电子邮箱,机构：对接人电子邮箱
  public c_wechat: string = '';  //个人客户微信号,
  public c__QQ_no: string = '';  //个人客户QQ号,
  public c_2nd_mobile_phone: string = '';  //第二手机号码
  public c_phone_no: string = '';  //办公电话
  public c_website: string = ''; //客户所属机构网址
  public c_memo: string = '';  //备注信息
  public c_password: string = '';  //注册用户必填项，初始化为客户手机号码后8位
  public worker_id: number; //当前服务客户经理（工号）
  public c_source: number;  //来源：0=<空> 1=网站注册 2=客户自主上门或联系 3=客户经理开发 4=客户推荐 5=渠道推荐 6=介绍人推荐
  public c_sourceID: number;  //来源ID，按来源取值：0-2= <空> 3=员工ID 4=客户ID 5=渠道ID 6=介绍人ID
  public c_logonIP: string = ''; //客户最近登录IP地址
  public c_logon_dtime: number; //登录时间
  public c_logoff_dtime: number;  //客户最近登出日期时间
  public c_info_update_id: number;  //最新修改客户信息的员工ID（工号)
  public c_info_update_time: number;  ////最新修改客户信息的员工ID（工号)
  public c_create_datetime: number; //记录创建日期+时间
  public c_update_time: number; //客户自己 记录更新日期+时间
  public c_verify_status: number; //审核状态： 1=完全匹配， 2=等待人工审核  3=驳回重填，

  //辅助字段
  public re_password: string;  //重复手机号码
  public phoneIsWechat: string = '1';  //手机号是否是微信号
  public idCardImg: string;   //身份证照片地址(上传时)
  public certificationInfo: CertificationPhotoModel = new CertificationPhotoModel();  //认证信息
  public last_password: string; //原密码（修改密码时使用）
  public checked: boolean = false;
}

//提示信息类
export class CustomerPersonHelper {
  //个人：客户手机号码,机构：对接人手机号码
  public flag_mobilePhone: boolean = false;
  public info_mobilePhone: string;
  //注册用户必填项，初始化为客户手机号码后8位
  public flag_password: boolean = false;
  public info_password: string;
  //重复手机号码
  public flag_repassword: boolean = false;
  public info_repassword: string;
  //验证码
  public flag_code: boolean = false;
  public info_code: string;
  //姓名
  public flag_person_name: boolean = false;
  public info_person_name: string;
  //性别
  public flag_person_sex: boolean = false;
  public info_person_sex: string;
  //身份证号码
  public flag_person_id_card: boolean = false;
  public info_person_id_card: string;
  //身份证地址
  public flag_person_addr: boolean = false;
  public info_person_addr: string;
  //身份证照片地址
  public flag_idCardImg: boolean = false;
  public info_idCardImg: string;
  //原密码（修改密码时使用）
  public flag_last_password: boolean = false;
  public info_last_password: string;

  public check() {
    return this.flag_mobilePhone || this.flag_password || this.flag_repassword || this.flag_code
      || this.flag_person_name || this.flag_person_sex || this.flag_person_id_card || this.flag_person_addr
      || this.flag_idCardImg || this.flag_last_password;
  }
}
