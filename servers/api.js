const request = require("./request.js")
var app = getApp();
//项目URL相同部分，减轻代码量，同时方便项目迁移
//本地环境
const domain = 'http://localhost:8080/api'
//测试环境
// const domain = 'http://1.15.184.191:8080/api'


// 获取用户信息
export function getUserInfo(data) {
    return request.get(api.user_getUserInfo, data)
}

// 修改用户信息
export function updateUserInfo(data) {
    return request.post(api.user_updateUserInfo, data)
}