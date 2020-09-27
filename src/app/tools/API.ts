

import { environment } from 'src/environments/environment';
const host = environment.host;
const hostB = environment.hostB;
const hostFile = environment.hostFile;

export const API = {
    zoneInfo: host + "zone/info", // 获取园区信息
    getLoginCode: host + "sms/get-login-code", //获取登录验证码
    getCodeByPhone: host + "sms/get-code-by-phone", //通过手机号码获取验证码
    getIdCardInfo: host + "id-card/get-info", //获取身份证照片信息
    saveCertificate: host + "id-card/save-certificate", //身份证外其他不需要校验的证件
    getAllProduct: host + 'product/get-all',  //获取园区的产品列表
    UploadFile: hostFile + 'upload/upload-file',  //上传文件,返回文件链接
    batchGenerateDocxFile: hostFile + 'file-doc/batch-generate', //批量生成fileDoc文件
    login: hostB + "worker/login", //客户登录
    resetPwd: hostB + "worker/reset-pwd", //重置用户密码
    progressStatistical: hostB + "progress/statistical", //获取正在办理的记录的统计
    getCustomerPersons: hostB + 'customer-person/get-all',  // 获取所有客户联络人
    getAllBank: hostB + 'zone/banks', //获取园区所有指定银行
    getWorkers: hostB + "serve-worker/get-all", //获取所有客户专员
    getOrgList: hostB + "org/get-list", //获取企业列表
    getProgressList: hostB + "progress/get-list", //获取正在办理的记录
    progressData: hostB + "progress/get-data", //获取progress记录信息
    progressEdit: hostB + "progress/edit", //修改客户基础参数
    chooseTempalte: hostB + "progress/choose-template", //选择模版
    recordCancel: hostB + "progress/record-cancel", //progress记录取消
    recordBack: hostB + "progress/record-back", ////progress记录返回修改
    getPartnerRelatedInfo: hostB + 'partner/get-related-info',  // 获取[股东/合伙人]关联信息
    partnerEdit: hostB + "partner/edit", //[股东/合伙人]信息编辑
    partnerDel: hostB + "partner/del", //删除[股东/合伙人]信息
    partnerFitVerify: hostB + 'partner/fit-verify', //校验[股东/合伙人]数据 是否与 预填数据相匹配
    submitTemplatePublic: hostB + 'template/submit-template-public',  //修改模版的公共信息
    templateDataNotFundSave: hostB + 'template/not-fund-save', //园区通用模版数据修改
    templateDataFundSave: hostB + 'template/fund-save',  //有限合伙基金通用模板数据保存
    templateDataCompanySave: hostB + 'template/company-save', //有限公司通用模板数据保存
    customerRelationPersonEdit: hostB + 'relation-person/edit', //新增/编辑关联人信息
    customerRelationPersonDelete: hostB + 'relation-person/delete', //删除关联人信息
    customerRelationOrgEdit: hostB +
        'relation-org/edit', //新增/编辑关联企业信息
    fileDocVerifyPass: hostB + 'file-doc/verify-pass',  //客户专员审核通过
    fileDocSendToCustomer: hostB + 'file-doc/send-to-customer', //发送PDF文件给客户
    fileDocToPdf: hostB + 'file-doc/to-pdf',  //fileDoc转PDF
    fileDocBatchToPdf: hostB + 'file-doc/batch-to-pdf', //fileDoc批量转PDF
    fileDocUploadPdf: hostB + 'file-doc/upload-pdf',  //上传PDF文件
    fileDocUploadDocx: hostB + 'file-doc/upload-docx',  //上传Docx文件


    riskVerifyFile: hostB + 'risk/verify-file', //风控审核电子文件
    addOrders: hostB + 'order/add-orders',  //新增订单q
    orderCancel: hostB + 'order/cancel',  //删除订单
    customerMan: hostB + 'zone/workers',  //客户来源  --- 客户经理
    customerRecommend: hostB + 'zone/customer-persons',//客户来源  --- 客户推荐
    customerChannels: hostB + 'zone/channels',
    downloadTemplateZip: hostFile + 'file-doc/download-zip',  //打包生成的文件，并下载
    email: hostB + 'mail/post-persons',
    emailSend: hostFile + 'file-doc/send-to-customer', //邮件发送||重新发送
    emailList: hostB + 'mail/flows',//邮件流水（列表）

    // 风控
    controlCheck_industrypaper: hostB + 'risk/verify-paper-get-all',  //风控审核纸质材料
    //工商入口
    industrypaperlist: hostB + 'industry-commerce/receive-paper-get-all', //接收工商纸质材料
    industryCommerce_write: hostB + 'industry-commerce/credit-code-save',//填写营业执照
    industrypaper_confirmRecivice: hostB + 'industry-commerce/receive-paper',

    industryBussinessLicenseList: hostB + 'industry-commerce/credit-code-list',
    // 风控入口
    getRiskTas: hostB + 'risk/get-tas',  //获取所有风控任务记录
    riskVerifyPaperList: hostB + 'risk/verify-paper-list',
    riskVerifyPaper: hostB + 'risk/verify-paper',
    // 领导中心
    leaderAuditPaperFileList: hostB + 'leader/verify-paper-list',

    leaderAuditPaperFile: hostB + 'leader/verify-paper',
    // 公安入口
    commonSealAll: hostB + 'pub-security/official-seal-get-all',
    commonSealConfirm: hostB + 'pub-security/official-seal'
    // email: '192.168.1.135/smjj/worker/web/index.php?r=mail/post-persons'
    // test: "http://127.0.0.1/fileHandle/api/web/index.php?r=test/test", 
};
