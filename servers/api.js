const request = require("./request.js")
//本地环境
const local = 'http://localhost:8585/api/'
//测试环境
const dev = 'http://121.43.163.177:8585/api/'

export const domain = local;

// 查询商品
export function selectGoods(data) {
    return request.get(domain + "goods/selectAll", data)
}

// 添加商品
export function addGoods(data) {
    return request.post(domain + "goods/addGoods", data)
}

// 发布动态
export function addDynamic(data) {
    return request.post(domain + "dynamic/addDynamic", data)
}

// 查询动态
export function selectDynamics(data) {
    return request.get(domain + "dynamic/selectAll", data)
}

// 查询用户信息
export function getUserInfo(data) {
    return request.get(domain + "user/getUserInfo", data)
}

// 查询一个商品详情
export function selectOne(data) {
    return request.get(domain + "goods/selectOne", data)
}

// 添加/增加购物车商品
export function addLike(data) {
    return request.post(domain + "likes/addLike", data)
}

// 查询购物车
export function getCart(data) {
    return request.get(domain + "likes/getCart", data)
}

// 减少/删除购物车商品
export function reduceLike(data) {
    return request.post(domain + "likes/reduceLike", data)
}

// 查询已完成交易
export function getFinished(data) {
    return request.get(domain + "likes/getFinished", data)
}

// 删除交易记录
export function delDeal(data) {
    return request.post(domain + "likes/delDeal", data)
}

// 清空购物车
export function doDeal(data) {
    return request.get(domain + "likes/doDeal", data)
}

// 添加新地址
export function addAddress(data) {
    return request.post(domain + "address/addAddress", data)
}

// 修改地址
export function updateAddress(data) {
    return request.post(domain + "address/updateAddress", data)
}

// 删除地址
export function delAddress(data) {
    return request.get(domain + "address/delAddress", data)
}

// 查询所有地址
export function selectAllAddr(data) {
    return request.get(domain + "address/selectAllAddr", data)
}

// 查询某个地址
export function selectOneAddr(data) {
    return request.get(domain + "address/selectOneAddr", data)
}

// 查询是否存在默认地址
export function hasDefaultAddr(data) {
    return request.get(domain + "likes/hasDefaultAddr", data)
}
