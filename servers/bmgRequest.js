const api = require("./config.js")
const request = require("./request.js")


//添加url
export function createUrl(data) {
    return request.postRequest(api.url_createUrl, data);
}

//添加url分组
export function createUrlGroup(data) {
    return request.postRequest(api.url_createUrlGroup, data);
}

//Url组关联Url
export function doUrlGroupRelUrl(data) {
    return request.postRequest(api.url_doUrlGroupRelUrl, data);
}

//获取Url组的url的CheckBox列表
export function getCheckedUrlGroupUrl(data) {
    return request.postRequest(api.url_getCheckedUrlGroupUrl, data);
}

//获取url组拥有的url
export function getUrlsOfGroup(data) {
    return request.postRequest(api.url_getUrlsOfGroup, data);
}

//修改url
export function updateUrl(data) {
    return request.postRequest(api.url_updateUrl, data);
}

//修改url
export function updateUrlGroup(data) {
    return request.postRequest(api.url_updateUrlGroup, data);
}

//修改url
export function urlGroupPage(data) {
    return request.postRequest(api.url_urlGroupPage, data);
}

//修改url
export function urlPage(data) {
    return request.postRequest(api.url_urlPage, data);
}

//添加用户
export function createWorker(data) {
    return request.postRequest(api.worker_create, data);
}

//查询用户
export function getWorker(data) {
    return request.postRequest(api.worker_getWorker, data);
}

//用户分页
export function workerPage(data) {
    return request.postRequest(api.worker_page, data);
}

//重置为默认密码
export function resetWorkerPwd(data) {
    return request.postRequest(api.worker_resetPwd, data);
}

//修改用户信息
export function updateWorker(data) {
    return request.postRequest(api.worker_update, data);
}

//修改密码
export function updateWorkerPwd(data) {
    return request.postRequest(api.worker_updatePwd, data);
}

//添加菜单
export function createMenu(data) {
    return request.postRequest(api.menu_create, data);
}

//根据父菜单查询子菜单
export function getChildrenMenu(data) {
    return request.postRequest(api.menu_getChildrenMenu, data);
}

//菜单分页
export function menuPage(data) {
    return request.postRequest(api.menu_page, data);
}

//修改菜单
export function updateMenu(data) {
    return request.postRequest(api.menu_update, data);
}

//添加角色
export function createRole(data) {
    return request.postRequest(api.role_create, data);
}

//角色分页
export function rolePage(data) {
    return request.postRequest(api.role_page, data);
}

//修改角色
export function updateRole(data) {
    return request.postRequest(api.role_update, data);
}