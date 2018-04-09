<template>
    <f7-page class="cart-container">
        <f7-navbar v-show="currentStep===0">
            <f7-nav-left>
                <f7-link back class="nav-icon">
                    <i class="fa fa-chevron-left"></i>
                </f7-link>
                <f7-link class="nav-icon" panel-open="left">
                    <i class="fa fa-bars"></i>
                </f7-link>
            </f7-nav-left>
            <f7-nav-title>{{pageTitle}}</f7-nav-title>
            <f7-nav-right>
                <f7-link class="nav-icon">
                    <i class="fa fa-qrcode"></i>
                </f7-link>
                <f7-link class="nav-icon">
                    <i class="fa fa-shopping-cart"></i>
                </f7-link>
                <f7-link class="nav-icon">
                    <i class="fa fa-file"></i>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-navbar v-show="currentStep===1">
            <f7-nav-left>
                <f7-link class="nav-icon" @click="currentStep--">
                    <i class="fa fa-chevron-left">确认订单</i>
                </f7-link>
            </f7-nav-left>
        </f7-navbar>

        <div v-show="currentStep===0">
            <f7-list>
                <li class="swipeout swipeout-transitioning" v-for="(item,index) in productList" :key="index">
                    <div class="swipeout-content">
                        <div class="item-content">
                            <f7-checkbox style="padding-right:16px;" :checked="item.isCheck" @change="itemCheck($event, index)"></f7-checkbox>
                            <div class="item-media">
                                <img :src="item.productImageName.primary.img" width="80" />
                            </div>
                            <div class="item-inner item-cell">
                                <div class="item-row">
                                    <div class="item-cell">
                                        <div class="c-ellipsis">
                                            {{item.productName}}
                                        </div>
                                    </div>
                                </div>
                                <div class="item-row">
                                    <div class="item-cell">
                                        <div class="c-ellipsis c-text">
                                            {{item.productNumber}}
                                        </div>
                                    </div>
                                </div>
                                <div class="item-row">
                                    <div class="item-cell">
                                        <div class="c-ellipsis c-text">
                                            {{item.productSpecification}}
                                        </div>
                                    </div>
                                </div>
                                <div class="item-row">
                                    <div class="item-cell">
                                        <div class="c-ellipsis c-text">
                                            {{item.deliveryDay | dfm}}
                                        </div>
                                    </div>
                                </div>
                                <div class="item-row">
                                    <div class="item-cell">
                                        <div>
                                            <span class="c-price">{{`HK$${item.purchasePrice}`}}</span>
                                            <CStepper style="float:right" v-model="item.purchaseQuantity" :min="0" :max="100" @change="quantityChange($event,index)"></CStepper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <f7-swipeout-actions right>
                        <f7-swipeout-button color="red" @click="deletePro(index)">删除</f7-swipeout-button>
                    </f7-swipeout-actions>
                </li>
            </f7-list>
        </div>
        <div v-show="currentStep===1">
            <!-- 提货方式 -->
            <f7-block strong>
                <p>
                    <label>
                        <f7-radio name="deliveryType" value="Delivery" :checked="deliveryType === 'Delivery'" @change="deliveryType = $event.target.value"></f7-radio>送货
                    </label>
                    <label>
                        <f7-radio name="deliveryType" value="Pick" :checked="deliveryType === 'Pick'" @change="deliveryType = $event.target.value"></f7-radio>自提
                    </label>
                </p>
            </f7-block>

            <!-- 提货地址 -->
            <f7-list media-list>
                <f7-list-item link="#" title="JACK" after="12345678999">
                    <i slot="media" class="fa fa-map-marker fa-2x" style="margin:0 auto;color:#757575;"></i>
                    <div slot="text">s tellus. Mauris rt, commodo augue id, pulvinar lacus.</div>
                </f7-list-item>
            </f7-list>

            <f7-list>
                <li v-for="(item,index) in productList" :key="index" v-if="item.isCheck">
                    <div class="item-content">
                        <div class="item-media">
                            <img :src="item.productImageName.primary.img" width="80" />
                        </div>
                        <div class="item-inner item-cell">
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-ellipsis">
                                        {{item.productName}}
                                    </div>
                                </div>
                                <div class="item-cell">
                                    <div class="c-ellipsis">
                                        {{item.productNumber}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-ellipsis">
                                        {{item.productSpecification}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-ellipsis">
                                        {{item.deliveryDay | dfm}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div>
                                        <span style="color:red">{{`HK$${item.purchasePrice}`}}</span>
                                        <span style="float:right">x {{item.purchaseQuantity}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </f7-list>

        </div>

        <f7-toolbar bottom-md>
            <span style="padding-left:16px" v-show="currentStep===0">
                <label>
                    <f7-checkbox :checked="selectAll" @change="handleCheckAll"></f7-checkbox>全部</label>
            </span>
            <span v-show="currentStep===0">合计：{{totalValue}}元</span>
            <div class="orderSubmitBtn" @click="submitorder" v-show="currentStep===0">去结算({{productCheckLength}})</div>

            <span v-show="currentStep===1"></span>
            <span v-show="currentStep===1">实付款：HK$4343.00</span>
            <div class="orderSubmitBtn" v-show="currentStep===1">提交订单</div>
        </f7-toolbar>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
import CStepper from '@/components/CStepper.vue';
let dateFormat = function (date, fmt) {
    let o = {
        "M+": date.getMonth() + 1,                 //月份 
        "d+": date.getDate(),                    //日 
        "h+": date.getHours(),                   //小时 
        "m+": date.getMinutes(),                 //分 
        "s+": date.getSeconds(),                 //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
export default {
    components: {
        CStepper
    },
    filters: {
        dfm: function (value) {
            return dateFormat(new Date(value), 'yyyy-MM-dd');
        }
    },
    mounted() {
        this.init();
        this.getData();
    },
    computed: {
        productCheckLength: function () {
            let checkedList = this.productList.filter(v => v.isCheck);
            return checkedList.length;
        }
    },
    data() {
        return {
            pageTitle: '',
            productList: [],
            totalValue: 0,
            selectAll: false,
            currentStep: 0,
            // Delivery/Pick
            deliveryType: 'Delivery'
        }
    },
    methods: {
        init() {
            this.pageTitle = '购物车';
        },
        getData() {
            if (storage.lStorage.getData('memberInfo') === null) {
                this.$f7router.navigate(`/Login/`, {
                    history: true,
                    animate: false,
                    ignoreCache: false
                });
            }
            else {
                api.cart_getcartlist(
                    {token: storage.lStorage.getData('memberInfo').token},
                    function (res) {
                        if (!res.code) {
                            let list = res.data.productList;
                            list.forEach(function (element) {
                                element.isCheck = false;
                            }, this);
                            this.productList = list;
                            this.totalValue = res.data.totalValue;
                        }
                    }.bind(this)
                );
            }
        },
        quantityChange($val, index) {
            api.cart_changeproductquantity(
                {
                    token: storage.lStorage.getData('memberInfo').token,
                    purchaseQuantity: $val,
                    cartUuid: this.productList[index]['cartUuid']
                },
                function (res) {
                    if (!res.code) {
                        this.productList[index]['purchaseQuantity'] = $val;
                        this.totalValue = res.data.totalValue;
                    }
                }.bind(this)
            );
        },
        deletePro(index) {
            api.cart_deletefromcart(
                {
                    token: storage.lStorage.getData('memberInfo').token,
                    cartUuidList: [this.productList[index]['cartUuid']]
                },
                function (res) {
                    if (!res.code) {
                        this.productList.splice(index, 1);
                        this.totalValue = res.data.totalValue;
                    }
                }.bind(this)
            );
        },
        handleCheckAll($event) {
            this.selectAll = $event.target.checked;
            this.productList.forEach(function (element) {
                element.isCheck = this.selectAll;
            }, this);
        },
        itemCheck($event, index) {
            this.productList[index].isCheck = $event.target.checked;
            let checkedList = this.productList.filter(v => v.isCheck);
            this.selectAll = checkedList.length === this.productList.length;
        },
        submitorder() {
            console.log('提交订单');
            this.currentStep++;
        }
    }
}
</script>
<style lang="less" scoped>
.cart-container {
  .nav-icon {
    padding: 0 1rem;
  }

  .orderSubmitBtn {
    background-color: red;
    height: 100%;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-ellipsis {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
    &.c-text {
      font-size: 12px;
    }
  }

  .c-price {
    color: red;
    font-size: 14px;
  }
}
</style>
