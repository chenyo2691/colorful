<template>
    <f7-page class="cart-container">
        <f7-navbar v-if="currentStep===0">
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
        <f7-navbar v-if="currentStep===1">
            <f7-nav-left>
                <f7-link class="nav-icon" @click="currentStep--">
                    <i class="fa fa-chevron-left">确认订单</i>
                </f7-link>
            </f7-nav-left>
        </f7-navbar>

        <div v-show="currentStep===0">
            <CartProduct :productList="productList" :isEdit="true" @deletePro="deletePro" @itemCheck="itemCheck" @quantityChange="quantityChange"></CartProduct>
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
                <!-- <f7-list-item link="#" title="JACK" after="12345678999">
                    <i slot="media" class="fa fa-map-marker fa-2x" style="margin:0 auto;color:#757575;"></i>
                    <div slot="text">s tellus. Mauris rt, commodo augue id, pulvinar lacus.</div>
                </f7-list-item> -->

                <f7-list-item v-if="contactList.length===0" link="/Address/" title="点击我新增地址" badge="新增" badge-color="blue">
                    <i slot="media" class="fa fa-map-marker fa-2x" style="margin:0 auto;color:#757575;"></i>
                </f7-list-item>
            </f7-list>

            <CartProduct :productList="productChecked" :isEdit="false"></CartProduct>
        </div>

        <f7-toolbar bottom-md>
            <!-- step1 -->
            <span v-if="currentStep===0" style="padding-left:16px">
                <label>
                    <f7-checkbox :checked="selectAll" @change="handleCheckAll"></f7-checkbox>全部</label>
            </span>
            <span v-if="currentStep===0">合计：{{totalValue}}元</span>
            <div v-if="currentStep===0" class="orderSubmitBtn" @click="++currentStep">去结算({{productCheckLength}})</div>
            <!-- step2 -->
            <span v-if="currentStep===1"></span>
            <span v-if="currentStep===1">实付款：HK$4343.00</span>
            <div class="orderSubmitBtn" v-if="currentStep===1" @click="submitorder">提交订单</div>
        </f7-toolbar>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
import CartProduct from '@/components/CartProduct.vue';

export default {
    components: {
        CartProduct
    },
    mounted() {
        this.init();
    },
    computed: {
        productCheckLength: function () {
            let checkedList = this.productList.filter(v => v.isCheck);
            return checkedList.length;
        },
        productChecked: function () {
            // let productList = this.productList;
            return this.productList.filter(function (product) {
                return product.isCheck;
            });
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
            deliveryType: 'Delivery',
            contactList: []
        }
    },
    methods: {
        checkMember() {
            if (storage.lStorage.getData('memberInfo') === null) {
                this.$f7router.navigate(`/Login/`, {
                    history: true,
                    animate: false,
                    ignoreCache: false
                });
            }
        },
        init() {
            this.pageTitle = '购物车';
            this.checkMember();
            this.getCartList();
            this.getContactList();
            // 
        },
        getCartList() {
            // 购物车商品
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
        },
        getContactList() {
            // 获取会员地址簿信息
            api.getcontactlist(
                {token: storage.lStorage.getData('memberInfo').token, deliveryType: this.deliveryType},
                function (res) {
                    if (!res.code) {
                        this.contactList = res.data.contactList;
                    }
                }.bind(this)
            );
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
        itemCheck($event, index) {
            this.productList[index].isCheck = $event.target.checked;
            let checkedList = this.productList.filter(v => v.isCheck);
            this.selectAll = checkedList.length === this.productList.length;
        },
        // 全选
        handleCheckAll($event) {
            this.selectAll = $event.target.checked;
            this.productList.forEach(function (element) {
                element.isCheck = this.selectAll;
            }, this);
        },
        submitorder() {
            console.log('提交订单');
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
}
</style>
