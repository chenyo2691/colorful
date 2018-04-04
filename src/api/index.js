// let SERVICE = `http://result.eolinker.com/3nr3tizeeed5ac26c35f83668536bcda0a0f2e290d0ca19?uri=`;
let SERVICE = `http://120.79.174.12:9013/`;

import URLS from './interface.js';

let api = function (url, data, callBack) {
    // application/json; charset=utf-8
    window.$f7.dialog.progress('加载中');
    window.$f7.request({
        url,
        async: true,
        method: 'POST',
        contentType: 'application/json',
        // 跨域
        crossDomain: true,
        data: JSON.stringify(data),
        error: function (xhr, status) {
            window.$f7.dialog.close();
            window.$f7.dialog.alert('加载失败', '系统系统');
        },
        success: function (data, status, xhr) {
            let res = JSON.parse(data);
            console.log(res);
            if (res.code) {
                if (res.code === 100001) {
                    // 登录
                    window.$f7router.navigate('/login/', {
                        history: false
                    });
                }
                else {
                    window.$f7.dialog.alert(res.message, '系统系统');
                }
            }
            else {
                callBack(res);
            }
            window.$f7.dialog.close();
        }
    });
};

export default {
    // 网购
    // 【300】获取网购大类信息	POST
    online_getmaincategorylist(data, callBack) {return api(SERVICE + URLS.ONLINE_GETMAINCATEGORYLIST, data, callBack);},
    // 【301】通过大类获取中类	POST
    online_getmiddlecategorylist(data, callBack) {return api(SERVICE + URLS.ONLINE_GETMIDDLECATEGORYLIST, data, callBack);},
    // 【303】通过小类获取列表	POST
    online_getproductlist(data, callBack) {return api(SERVICE + URLS.ONLINE_GETPRODUCTLIST, data, callBack);},
    // 【304】获取商品购物页信息	POST
    online_getproductinfo(data, callBack) {return api(SERVICE + URLS.ONLINE_GETPRODUCTINFO, data, callBack);},
    // // 【306】放入购物车	POST
    // online_addproducttocart(data, callBack) {return api(SERVICE + URLS.ONLINE_ADDPRODUCTTOCART, data, callBack);},
    // // 【307】会员购物车列表	POST
    // online_getcartinfo(data, callBack) {return api(SERVICE + URLS.ONLINE_GETCARTINFO, data, callBack);},
    // // 会员从购物车删除商品【307】	POST
    // online_deletefromcart(data, callBack) {return api(SERVICE + URLS.ONLINE_DELETEFROMCART, data, callBack);},
    // // 会员调整购物车产品数量【308】	POST
    // online_changeproductquantity(data, callBack) {return api(SERVICE + URLS.ONLINE_CHANGEPRODUCTQUANTITY, data, callBack);},
    // 【302】通过中类获取小类	POST
    online_getsubcategorylist(data, callBack) {return api(SERVICE + URLS.ONLINE_GETSUBCATEGORYLIST, data, callBack);},
    // 【305】获取客服联系电话	POST
    online_getcustomerservicelist(data, callBack) {return api(SERVICE + URLS.ONLINE_GETCUSTOMERSERVICELIST, data, callBack);},

    // 新品
    // 【900】获取新品大类信息	POST
    new_getmaincategorylist(data, callBack) {return api(SERVICE + URLS.NEW_GETMAINCATEGORYLIST, data, callBack);},
    // 【901】通过大类获取中类	POST
    new_getmiddlecategorylist(data, callBack) {return api(SERVICE + URLS.NEW_GETMIDDLECATEGORYLIST, data, callBack);},
    // 【903】通过小类获取列表	POST
    new_getproductlist(data, callBack) {return api(SERVICE + URLS.NEW_GETPRODUCTLIST, data, callBack);},
    // 【904】获取商品购物页信息	POST
    new_getproductinfo(data, callBack) {return api(SERVICE + URLS.NEW_GETPRODUCTINFO, data, callBack);},
    // 【902】通过中类获取小类	POST
    new_getsubcategorylist(data, callBack) {return api(SERVICE + URLS.NEW_GETSUBCATEGORYLIST, data, callBack);},
    // 【905】获取客服联系电话	POST
    new_getcustomerservicelist(data, callBack) {return api(SERVICE + URLS.NEW_GETCUSTOMERSERVICELIST, data, callBack);},

    // 购物车
    // 【1001】放入购物车	POST 
    cart_addproducttocart(data, callBack) {return api(SERVICE + URLS.CART_ADDPRODUCTTOCART, data, callBack);},
    // 【1002】会员购物车列表	POST 
    cart_getcartlist(data, callBack) {return api(SERVICE + URLS.CART_GETCARTLIST, data, callBack);},
    // 【1003】调整购物车产品数量	POST 
    cart_changeproductquantity(data, callBack) {return api(SERVICE + URLS.CART_CHANGEPRODUCTQUANTITY, data, callBack);},
    // 【1004】从购物车删除商品	POST 
    cart_deletefromcart(data, callBack) {return api(SERVICE + URLS.CART_DELETEFROMCART, data, callBack);},


    // 登录
    // 【202】获取 缤纷服务站点 信息	POST
    getbranchinfo(data, callBack) {return api(SERVICE + URLS.GETBRANCHINFO, data, callBack);},
    // 【200】验证用户登录信息	POST
    login(data, callBack) {return api(SERVICE + URLS.LOGIN, data, callBack);},
    // 【203】退出	POST
    logout(data, callBack) {return api(SERVICE + URLS.LOGOUT, data, callBack);},
    // 【201】验证用户注册信息	POST
    register(data, callBack) {return api(SERVICE + URLS.REGISTER, data, callBack);},
};