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


    // 购物车
    // 【1001】放入购物车	POST 
    CART_ADDPRODUCTTOCART: `api/cart/addproducttocart`,
    // 【1002】会员购物车列表	POST 
    CART_GETCARTLIST: `api/cart/getcartlist`,
    // 【1003】调整购物车产品数量	POST 
    CART_CHANGEPRODUCTQUANTITY: `api/cart/changeproductquantity`,
    // 【1004】从购物车删除商品	POST 
    CART_DELETEFROMCART: `api/cart/deletefromcart`,
};
