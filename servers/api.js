const request = require("./request.js")
var app = getApp();
//项目URL相同部分，减轻代码量，同时方便项目迁移
//本地环境
const domain = 'http://localhost:8080/api/'
//测试环境
// const domain = 'http://1.15.184.191:8080/api/'


// 查询商品
export function selectGoods(data) {
    return request.get(domain+"goods/selectAll", data)
}

// 添加商品
export function addGoods(data) {
    return request.post(domain+"goods/addGoods", data)
}

// 发布动态
export function addDynamic(data) {
    return request.post(domain + "dynamic/addDynamic", data)
}

// 查询动态
export function selectAll(data) {
    return request.get(domain+"dynamic/selectAll", data)
}