export let Small_clasess = {
    type_one: [
        {
            value: 4533,
            label: '有限合伙企业',
            isLeaf: true
        },
        {
            value: 4531,
            label: '普通合伙企业',
            isLeaf: true
        },
        {
            value: 4532,
            label: '特殊普通合伙企业',
            isLeaf: true
        }
    ],

    type_two: [
        {
            value: -1,
            label: '有限责任公司',
            children: [
                {
                    value: 1110,
                    label: '有限责任公司（国有独资）',
                    isLeaf: true
                },
                {
                    value: 1130,
                    label: '有限责任公司（自然人投资或控股）',
                    isLeaf: true
                },
                {
                    value: 1140,
                    label: '有限责任公司（国有控股）',
                    isLeaf: true
                }
            ]
        },
        {
            value: -2,
            label: '一人有限责任公司',
            children: [
                {
                    value: 1151,
                    label: '有限责任公司（自然人独资）',
                    isLeaf: true
                },
                {
                    value: 1152,
                    label: '有限责任公司（自然人投资或控股都法人独资）',
                    isLeaf: true
                },
                {
                    value: 1153,
                    label: '有限责任公司（非自然人投资或控股都法人独资）',
                    isLeaf: true
                },
            ]
        },
        {

            label: '其它有限责任公司',
            value: 1190,
            isLeaf: true
        },
        {
            label: '有限责任公司（外商投资企业投资）',
            value: -3,
            children: [
                {
                    value: 1121,
                    label: '有限责任公司（外商投资企业合伙）',
                    isLeaf: true
                },
                {
                    value: 1122,
                    label: '有限责任公司（外商投资企业与内资合资）',
                    isLeaf: true
                },
                {
                    value: 1123,
                    label: '有限责任公司（外商投资企业法人独资）',
                    isLeaf: true
                },
            ]
        },
        {
            label: '股份有限公司（上市）',
            value: -4,
            children: [
                {
                    label: '股份有限公司（上市、外商投资企业投资）',
                    value: '1211',
                    isLeaf: true
                },
                {
                    label: '股份有限公司（上市、自然人投资或控股）',
                    value: 1212,
                    isLeaf: true
                },
                {
                    label: '股份有限公司（上市、国有控股）',
                    value: 1213,
                    isLeaf: true
                },
                {
                    label: '股份有限公司（上市、国有控股）',
                    value: 1213,
                    isLeaf: true
                }, {
                    label: '其它股份有限公司',
                    value: 1219,
                    isLeaf: true
                },
            ]
        }

    ],
};
export let SourceArr = [
    { id: 0, text: "请选择" },
    { id: 1, text: "网站注册" },
    { id: 2, text: "客户自主联系" },
    { id: 3, text: "客户经理开发" },
    { id: 4, text: "客户推荐" },
    { id: 5, text: "渠道推荐" },
    { id: 6, text: "介绍人推荐" },
];

export const partner_id_type = {
    '1': [
        { value: "1", key: "身份证" },
        { value: "3", key: "护照" }
    ],
    "2": [{ value: "2", key: "企业社会信用代码" }],
    "3": [{ value: "2", key: "企业社会信用代码" }],
    "4": [{ value: "4", key: "资管产品号" }],
    "5": [{ value: "2", key: "企业社会信用代码" }]
}
export const partnerIdAllTypeArr = [
    { value: "1", key: "身份证" },
    { value: "2", key: "企业社会信用代码" },
    { value: "3", key: "护照" },
    { value: "4", key: "资管产品号" }
];

export const raceArr = [
    { value: 1, key: "汉族" },
    { value: 2, key: "蒙古族" },
    { value: 3, key: "回族" },
    { value: 4, key: "藏族" },
    { value: 5, key: "维吾尔族" },
    { value: 6, key: "苗族" },
    { value: 7, key: "彝族" },
    { value: 8, key: "壮族" },
    { value: 9, key: "布依族" },
    { value: 10, key: "朝鲜族" },
    { value: 11, key: "满族" },
    { value: 12, key: "侗族" },
    { value: 13, key: "瑶族" },
    { value: 14, key: "白族" },
    { value: 15, key: "土家族" },
    { value: 16, key: "哈尼族" },
    { value: 17, key: "哈萨克族" },
    { value: 18, key: "傣族" },
    { value: 19, key: "黎族" },
    { value: 20, key: "傈僳族" },
    { value: 21, key: "佤族" },
    { value: 22, key: "畲族" },
    { value: 23, key: "高山族" },
    { value: 24, key: "拉祜族" },
    { value: 25, key: "水族" },
    { value: 26, key: "东乡族" },
    { value: 27, key: "纳西族" },
    { value: 28, key: "景颇族" },
    { value: 29, key: "柯尔克孜族" },
    { value: 30, key: "土族" },
    { value: 31, key: "达斡尔族" },
    { value: 32, key: "仫佬族" },
    { value: 33, key: "羌族" },
    { value: 34, key: "布朗族" }
];

export const educationArr = [
    { value: 1, key: "研究生及以上" },
    { value: 2, key: "大学本科" },
    { value: 3, key: "大学专科" },
    { value: 4, key: "中等专业学校" },
    { value: 5, key: "技工学校" },
    { value: 6, key: "高中学历" },
    { value: 7, key: "初中学历" },
    { value: 8, key: "小学及以下" }
];

export const politicalArr = [
    { value: 1, key: "中共党员" },
    { value: 2, key: "中共预备党员" },
    { value: 3, key: "共青团员" },
    { value: 4, key: "民革会员" },
    { value: 5, key: "民盟盟员" },
    { value: 6, key: "民建会员" },
    { value: 7, key: "民进会员" },
    { value: 8, key: "农工党党员" },
    { value: 9, key: "致公党党员" },
    { value: 10, key: "九三学社社员" },
    { value: 11, key: "台盟盟员" },
    { value: 12, key: "无党派民主人士" },
    { value: 13, key: "群众" }
];
export const partnerFormOfInvestmentArr = [
    { value: 1, key: "货币" },
    { value: 2, key: "劳务" },
    { value: 3, key: "股权" },
    { value: 4, key: "无形资产" }
];

export const companyTypes = [
    { value: "1", key: "自然人" },
    { value: "2", key: "公司" },
    { value: "3", key: "有限合伙" },
    { value: "4", key: "资管产品" },
    { value: "5", key: "其他组织" }
]

// 基金行业投资方向1  选项
export const fundInvestOptions = {
    1: [
        { value: 1, key: "证券投资管理" },
        { value: 2, key: "股权投资管理" },
        { value: 3, key: "创业投资管理" },
        { value: 4, key: "其他" }
    ],
    2: [
        { value: 1, key: "证券投资" },
        { value: 2, key: "股权投资" },
        { value: 3, key: "创业投资" },
        { value: 4, key: "其他" }
    ]
};

// 其他行业投资方向2  选项
export const otherInvestOptions = [
    { value: 1, key: "互联网" },
    { value: 2, key: "文化传媒" },
    { value: 3, key: "科学研究和技术服务" },
    { value: 4, key: "先进制造" },
    { value: 5, key: "金融业" },
    { value: 6, key: "新能源" },
    { value: 7, key: "新材料" },
    { value: 8, key: "教育" },
    { value: 9, key: "生物医药" },
    { value: 10, key: "节能环保" },
    { value: 11, key: "新能源汽车" },
    { value: 12, key: "生物产业" },
    { value: 13, key: "新兴信息产业" },
    { value: 14, key: "高端装备制造业" },
    { value: 15, key: "其他行业" }
];

export const status_arr = [
    { value: "T", key: "是" },
    { value: "F", key: "否" }
];
export const status_num_arr = [
    { value: 1, key: "是" },
    { value: 0, key: "否" }
];
export const status_letter_arr = [
    { value: "A", key: "是" },
    { value: "B", key: "否" }
];

export const fund_open_type_arr = [
    { value: "O", key: "开放式" },
    { value: "C", key: "封闭式" }
];
//基金产品风险评级：1：高度风险，2：中高度，3：中等，4：中低度，; //5：低度
export const fund_risk_ratingArr = [
    { value: "1", key: "高度风险" },
    { value: "2", key: "中高度" },
    { value: "3", key: "中等" },
    { value: "4", key: "中低度" },
    { value: "5", key: "低度" }
];
//客户风险识别、评估、承受能力:; //1:; //进取型，2：成长型，3：平衡型，4：稳健型，5：保守型
export const fund_risk_enduranceArr = [
    { value: "1", key: "进取型" },
    { value: "2", key: "成长型" },
    { value: "3", key: "平衡型" },
    { value: "4", key: "稳健型" },
    { value: "5", key: "保守型" }
];

export const personPostionOptions = [
    { value: 1, key: "企业代办人" },
    { value: 2, key: "企业对接人" },
    { value: 3, key: "企业财务对接人" },
    { value: 4, key: "法人代表" },
    { value: 5, key: "董事长" },
    { value: 6, key: "总经理" },
    { value: 7, key: "董事" },
    { value: 8, key: "监事会主席" },
    { value: 9, key: "监事" },
    { value: 10, key: "副董事长" },
    { value: 11, key: "投资顾问" },
    { value: 12, key: "股份托管机构对接人" },
    { value: 13, key: "项目介绍人" },
    { value: 14, key: "母公司代表" },
    { value: 15, key: "办理业务打款人" },
    { value: 16, key: "投资顾问公司的对接人" },
    { value: 17, key: "外包代缴社保机构对接人" },
    { value: 18, key: "执行董事" },
    { value: 19, key: "财务操作（出纳）" },
    { value: 20, key: "财务复核（会计）" },
    { value: 21, key: "财务主管（领导）" },
    { value: 22, key: "有限公司的实际控制人，个人第一大股东" },
    { value: 23, key: "监事(不设监事会)" }
];

// 默认经营期限
export const DefaultBusinessPeriod = 30;
export const bussinseLicenseReg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
export const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
export const emailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")