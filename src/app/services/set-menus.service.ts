import { Injectable } from '@angular/core';
import { MyStorageService } from './my-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SetMenusService {

  constructor(private mystor: MyStorageService) { }


  setMeuns() {
    const isShow = this.mystor.getObject(this.mystor.storKey.USER_INFO).w_if_risk_control == 'T';
    // console.log("isShow", isShow)
    return [
      {
        title: "办理中",
        icon: 'form',
        isShow: true,
        children: [
          { link: '/welcome/inProcess/statistics', text: '统计' },
          { link: '/welcome/inProcess/going', text: '进行中' },

        ]
      },
      {
        title: "业务入口",
        icon: 'dashboard',
        isShow: true,
        children: [
          { link: '/welcome/bussinessIO/setUp/one/0', text: '我要设立' },
          { link: '/welcome/bussinessIO/emailList', text: '邮件列表' },
          { link: '/welcome/bussinessIO/immigration/one/0', text: '企业迁入' },
          { link: '/welcome/bussinessIO/moving/one/0', text: '企业迁转' },
          { link: '/welcome/bussinessIO/emigration/one/0', text: '企业迁出' },
        ]
      },
      {
        title: "风控入口",
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/riskControl/docAduit', text: '审核文件' },
          { link: '/welcome/riskControl/paperAduit', text: '审核纸质文件' }
        ]
      },
      {
        title: "财务入口",
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/financeIO/order', text: '企业订单' }
        ]
      },
      {
        title: "工商入口",
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/industryIO/paperMaterial', text: '纸质材料' },
          { link: '/welcome/industryIO/businessLicense', text: '营业执照' }
        ]
      },
      {
        title: '领导中心',
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/leaderIO/auditFile', text: '审核文件' }
        ]
      },
      {
        title: '公安入口',
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/PSBIO/officialSeals', text: '刻制公章' }
        ]
      },
      {
        title: '银行中心',
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/bankIO/basicAccountInfo', text: '基本户账户信息' },
          { link: '/welcome/bankIO/institutionCode', text: '信用机构代码' },
          { link: '/welcome/bankIO/bankAccountManage', text: '银行账户管理' },
          { link: '/welcome/bankIO/basicAccountDestory', text: '基本户注销' }
        ]
      },
      {

        title: '行政入口',
        icon: 'file-search',
        isShow: isShow,
        children: [
          { link: '/welcome/adminIO/materialArchive', text: '材料归档' },
          { link: '/welcome/adminIO/protocolFile', text: '商服协议归档' }
        ]


      }

    ]

  }
}
