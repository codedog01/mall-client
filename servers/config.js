var app = getApp();
//项目URL相同部分，减轻代码量，同时方便项目迁移

//本地环境
const domain = 'http://localhost'
//测试环境
// const domain = 'http://1.15.184.191'

//拼接端口
export const SYS = domain + ':1311/';
export const FLAG = domain + ':1312/'
export const BMG = domain + ':1313/'

//API-sys

// 检查登录状态
export const account_getRegStatus =  SYS + "user/account/getRegStatus"
// 微信登录
export const account_login = SYS + "user/account/login"
// 上传头像
export const info_uploadAvatar =  SYS + "user/info/uploadAvatar"
// 获取用户信息
export const info_getUserInfo = SYS + "user/info/getUserInfo"
// 修改用户信息
export const info_updateUserInfo = SYS + "user/info/updateUserInfo"
//获取所有标签
export const label_getLabelList =SYS + "user/label/getLabelList"
// 获取用户标签
export const label_getUserLabel =SYS + "user/label/getUserLabel"
// 修改用户标签
export const label_updateUserLabel =SYS + "user/label/updateUserLabel"
// 举报用户
export const report_addReport = SYS + "user/report/addReport"
// 获取用户关注列表
export const watch_getWatchlist = SYS + "user/watch/getWatchlist"
// 关注
export const watch_subscribe = SYS + "user/watch/subscribe"
// 取消关注
export const watch_unsubscribe = SYS + "user/watch/unsubscribe"
// 查询用户余额
export const wallet_getWallet = SYS + "user/wallet/getWallet"
// 用户分钱收入
export const wallet_income = SYS + "user/wallet/income"
// 获取用户拉黑列表
export const blackList_getBlackList = SYS + "user/blackList/getBlackList"
// 拉黑
export const blackList_pullBlack = SYS + "user/blackList/pullBlack"
// 取消拉黑
export const blackList_outBlacklist = SYS + "user/blackList/outBlacklist"


//API-evenflag
//围观
export const userFlag_create = FLAG + "flag/userFlag/create";
//取消围观
export const userFlag_delete = FLAG + "flag/userFlag/delete";
//围观分页
export const userFlag_select = FLAG + "flag/userFlag/select";
// 获取所有围观的flag
export const userFlag_getAllFlag= FLAG + "flag/userFlag/getAllFlag";

// 删除动态
export const dynamic_delete = FLAG + "flag/dynamic/delete";
// 发布动态
export const dynamic_publish = FLAG + "flag/dynamic/publish";
//查询动态
export const dynamic_selectAll = FLAG + "flag/dynamic/selectAll";
//查询某条动态
export const flag_selectOne = FLAG + "flag/dynamic/selectOne";

// 删除flag
export const flag_delete = FLAG + "flag/evenflag/delete";
// 发布flag
export const flag_publish = FLAG + "flag/evenflag/publish";
//查询flag
export const flag_selectAll = FLAG + "flag/evenflag/selectAll";
//flag分页
export const flag_flagPage = FLAG + "flag/evenflag/flagPage";
//创建队伍
export const team_createTeam = FLAG + "flag/team/createTeam";
//解散队伍
export const team_deleteTeam = FLAG + "flag/team/deleteTeam";
//查询所有队伍
export const team_selectAll = FLAG + "flag/team/selectAll";
// 删除评论
export const comment_delete = FLAG + "flag/comment/delete";
// 发布评论
export const comment_publish = FLAG + "flag/comment/publish";
//查询评论
export const comment_selectAll = FLAG + "flag/comment/selectAll";

//API-bmg
//添加url
export const url_createUrl = BMG + "bmg/url/createUrl";
//添加url分组
export const url_createUrlGroup = BMG + "bmg/url/createUrlGroup";
//Url组关联Url
export const url_doUrlGroupRelUrl = BMG + "bmg/url/doUrlGroupRelUrl";
//获取Url组的url的CheckBox列表
export const url_getCheckedUrlGroupUrl = BMG + "bmg/url/getCheckedUrlGroupUrl";
//获取url组拥有的url
export const url_getUrlsOfGroup = BMG + "bmg/url/getUrlsOfGroup";
//修改url
export const url_updateUrl = BMG + "bmg/url/updateUrl";
//修改url
export const url_updateUrlGroup = BMG + "bmg/url/updateUrlGroup";
//修改url
export const url_urlGroupPage = BMG + "bmg/url/urlGroupPage";
//修改url
export const url_urlPage = BMG + "bmg/url/urlPage";
//添加用户
export const worker_create = BMG + "bmg/worker/create";
//查询用户
export const worker_getWorker = BMG + "bmg/worker/getWorker";
//用户分页
export const worker_page = BMG + "bmg/worker/page";
//重置为默认密码
export const worker_resetPwd = BMG + "bmg/worker/resetPwd";
//修改用户信息
export const worker_update = BMG + "bmg/worker/update";
//修改密码
export const worker_updatePwd = BMG + "bmg/worker/updatePwd";
//添加菜单
export const menu_create = BMG + "bmg/menu/create";
//根据父菜单查询子菜单
export const menu_getChildrenMenu = BMG + "bmg/menu/getChildrenMenu";
//菜单分页
export const menu_page = BMG + "bmg/menu/page";
//修改菜单
export const menu_update = BMG + "bmg/menu/update";
//添加角色
export const role_create = BMG + "bmg/role/create";
//角色分页
export const role_page = BMG + "bmg/role/page";
//修改角色
export const role_update = BMG + "bmg/role/update";