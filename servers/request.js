//引入promisfy
// const util = require('util');

export function post(url, data = {}) {
    return request("POST", url, data)
}

export function get(url, data = {}) {
    return request("GET", url, data)
}

/**
 * 默认失败回调函数
 */
function dfDailCallBack(err, resolve, reject) {
    //服务器连接异常
    reject("服务器连接异常，请检查网络再试")
}

/**
 * 默认成功回调
 */
function dfSuccessCallback(res, resolve, reject) {
    // console.log("请求成功");
    // console.log(res);
    if (res.statusCode == 0 | res.statusCode == 200) {
        //请求正常200
        resolve(res.data);
    } else if (res.statusCode == 401) {
        //此处验证了token的登录失效，如果不需要，可以去掉。
        //未登录，跳转登录界面
        reject("登录已过期")
        wx.showModal({
            title: '提示',
            content: '登录已过期，请立即登录，否则无法正常使用',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.navigateTo({
                        url: '/pages/login/login?toPageUrl=401',
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    } else {
        //请求失败
        reject(res)
    }
}

function request(method, url, data = {}) {
    const {
        isForm,
        hideLoading,
        ...restData
    } = data;
    const openId = wx.getStorageSync('openId')
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: method,
            data: restData,
            header: {
                "content-type": isForm ? "application/x-www-form-urlencoded" : "application/json",
                "openId": openId
            },
            success(res) {
                dfSuccessCallback(res, resolve, reject)
            },
            fail(err) {
                dfDailCallBack(err, resolve, reject)
            }
        })
    });
}


/**
 * 微信获取定位
 */
export function wxGetLocation() {
    // const wxGetLocation = util.promisify(wx.getLocation);
    return wx.request({
        type: "wgs84"
    });
}

/**
 * 微信支付
 */
export function wxRequestPayment(param) {
    // const wxRequestPayment = util.promisify(wx.requestPayment);
    return wx.requestPayment({
        timeStamp: param.timeStamp,
        nonceStr: param.nonceStr,
        package: param.package,
        signType: param.signType,
        paySign: param.sign,
    })
}

/**
 * 微信用户登录,获取code
 */
export function wxLogin() {
    // return util.promisify(wx.login)()
}

/**
 * 检测微信用户登录状态
 */
export function wxCheckSession() {
    // return util.promisify(wx.checkSession)()
}

/**
 * 检测微信用户授权状态
 */
export function wxGetSetting() {
    // return util.promisify(wx.getSetting)()
}

/**
 * 获取微信用户信息
 * 注意:须在登录之后调用
 */
export function wxGetUserInfo() {
    return wx.getUserInfo()
}

/**
 * 获取系统信息
 */
export function wxGetSystemInfo() {
    // return util.promisify(wx.getSystemInfo)()
}