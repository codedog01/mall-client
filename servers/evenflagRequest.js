const api = require("./config.js")
const request = require("./request.js")


//围观
export function createUserFlag(data) {
    return request.postRequest(api.userFlag_create, data);
}

//取消围观
export function deleteUserFlag(data) {
    return request.postRequest(api.userFlag_delete, data);
}

//围观分页
export function selectUserFlag(data) {
    return request.postRequest(api.userFlag_select, data);
}

// 获取所有围观的flag
export function getAllFlag(data) {
    return request.getRequest(api.userFlag_getAllFlag, data);
}

// 删除动态
export function deleteDynamic(data) {
    return request.getRequest(api.dynamic_delete, data);
}

// 发布动态
export function publishDynamic(data) {
    return request.postRequest(api.dynamic_publish, data);
}

//查询动态
export function selectAllDynamic(data) {
    return request.postRequest(api.dynamic_selectAll, data);
}

// 查询某条动态
export function selectOneDynamic(data) {
    return request.getRequest(api.flag_selectOne, data);
}

// 删除flag
export function deleteFlag(data) {
    return request.getRequest(api.flag_delete, data);
}

// 发布flag
export function publishFlag(data) {
    return request.postRequest(api.flag_publish, data);
}

// 查询flag
export function selectAllFlag(data) {
    return request.getRequest(api.flag_selectAll, data);
}

// flag分页
export function flagPage(data) {
    return request.postRequest(api.flag_flagPage, data);
}

// 创建队伍
export function createTeam(data) {
    return request.postRequest(api.team_createTeam, data);
}

// 解散队伍
export function deleteTeam(data) {
    return request.getRequest(api.team_deleteTeam, data);
}

// 查询所有队伍
export function selectAllTeam(data) {
    return request.getRequest(api.team_selectAll, data);
}

// 删除评论
export function deleteComment(data) {
    return request.getRequest(api.comment_delete, data);
}

// 发布评论
export function publishComment(data) {
    return request.postRequest(api.comment_publish, data);
}

//查询评论
export function selectAllComment(data) {
    return request.getRequest(api.comment_selectAll, data)
}