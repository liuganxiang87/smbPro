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

export const partnerIdType = {
    '1': [
        { value: "1", key: "身份证" },
        { value: "3", key: "护照" }
    ],
    "2": [{ value: "2", key: "企业社会信用代码" }],
    "3": [{ value: "2", key: "企业社会信用代码" }],
    "4": [{ value: "4", key: "资管产品号" }],
    "5": [{ value: "2", key: "企业社会信用代码" }]
}

export const raceArr = [
    { value: 1, key: "汉族" },
    { value: 2, text: "蒙古族" },
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
    { value: 1, text: "研究生及以上" },
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
// 默认经营期限
export const DefaultBusinessPeriod = 30;
export const bussinseLicenseReg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
export const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
export const emailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")