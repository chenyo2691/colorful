export default {
    // 网购
    // 【300】获取网购大类信息	POST
    ONLINE_GETMAINCATEGORYLIST: `api/online/getmaincategorylist`,
    // 【301】通过大类获取中类	POST
    ONLINE_GETMIDDLECATEGORYLIST: `api/online/getmiddlecategorylist`,
    // 【303】通过小类获取列表	POST
    ONLINE_GETPRODUCTLIST: `api/online/getproductlist`,
    // 【304】获取商品购物页信息	POST
    ONLINE_GETPRODUCTINFO: `api/online/getproductinfo`,
    // // 【306】放入购物车	POST
    // ONLINE_ADDPRODUCTTOCART: `api/online/addproducttocart`,
    // // 【307】会员购物车列表	POST
    // ONLINE_GETCARTINFO: `api/online/getcartinfo`,
    // // 会员从购物车删除商品【307】	POST
    // ONLINE_DELETEFROMCART: `api/online/deletefromcart`,
    // // 会员调整购物车产品数量【308】	POST
    // ONLINE_CHANGEPRODUCTQUANTITY: `api/online/changeproductquantity`,
    // 【302】通过中类获取小类	POST
    ONLINE_GETSUBCATEGORYLIST: `api/online/getsubcategorylist`,
    // 【305】获取客服联系电话	POST
    ONLINE_GETCUSTOMERSERVICELIST: `api/online/getcustomerservicelist`,

    // 新品
    // 【900】获取新品大类信息	POST
    NEW_GETMAINCATEGORYLIST: `api/new/getmaincategorylist`,
    // 【901】通过大类获取中类	POST
    NEW_GETMIDDLECATEGORYLIST: `api/new/getmiddlecategorylist`,
    // 【903】通过小类获取列表	POST
    NEW_GETPRODUCTLIST: `api/new/getproductlist`,
    // 【904】获取商品购物页信息	POST
    NEW_GETPRODUCTINFO: `api/new/getproductinfo`,
    // 【902】通过中类获取小类	POST
    NEW_GETSUBCATEGORYLIST: `api/new/getsubcategorylist`,
    // 【905】获取客服联系电话	POST
    NEW_GETCUSTOMERSERVICELIST: `api/new/getcustomerservicelist`,


    // 购物车
    // 【1001】放入购物车	POST 
    CART_ADDPRODUCTTOCART: `api/cart/addproducttocart`,
    // 【1002】会员购物车列表	POST 
    CART_GETCARTLIST: `api/cart/getcartlist`,
    // 【1003】调整购物车产品数量	POST 
    CART_CHANGEPRODUCTQUANTITY: `api/cart/changeproductquantity`,
    // 【1004】从购物车删除商品	POST 
    CART_DELETEFROMCART: `api/cart/deletefromcart`,

    // 登录
    // 【202】获取 缤纷服务站点 信息	POST
    GETBRANCHINFO: 'api/getbranchinfo',
    // 【200】验证用户登录信息	POST
    LOGIN: 'api/login',
    // 【203】退出	POST
    LOGOUT: 'api/logout',
    // 【201】验证用户注册信息	POST
    REGISTER: 'api/register',

    // 订单
    // 【701】提交订单	POST
    SUBMITORDER: 'api/order/submitorder',
    // 【702】取消订单	POST
    CANCELORDER: 'api/order/cancelorder',
    // 【700】获取订单信息	POST
    GETORDERINFO: 'api/order/getorderinfo',
    // 【703】获取订单列表	POST
    GETORDERLIST: 'api/order/getorderlist',
    // 【704】获取运费信息	POST
    GETDELIVERYFEE: 'api/order/getdeliveryfee',
    // 【705】完成支付后的信息更新(测试用)	POST
    FINISHPAY: 'api/order/finishpay',
    // 【706】获取可供配送的日期列表	POST
    GETAVAILABLEDELIVERYDATE: 'api/order/getavailabledeliverydate',

    // 会员
    // 【801】获取会员地址簿信息	POST
    GETCONTACTLIST: 'api/member/getcontactlist',
    // 【802】新增地址项信息	POST
    CREATECONTACT: 'api/member/createcontact',
    // 【803】修改地址项信息	POST
    UPDATECONTACT: 'api/member/updatecontact',
    // 【804】删除地址簿信息	POST
    DELETECONTACT: 'api/member/deletecontact',
    // 【805】获取区域信息	POST
    GETDISTLIST: 'api/member/getdistlist',
};
