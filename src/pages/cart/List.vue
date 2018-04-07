<template>
    <f7-page class="cart-container">
        <f7-navbar>
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

        <f7-list>
            <li class="swipeout swipeout-transitioning" v-for="(item,index) in productList" :key="index">
                <div class="swipeout-content">
                    <div class="item-content">
                        <f7-checkbox :checked="item.isCheck" @change="item.isCheck = $event.target.checked"></f7-checkbox>
                        <div class="item-media">
                            <img :src="item.productImageName.primary.img" width="80" />
                        </div>
                        <div class="item-inner item-cell">
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-title">
                                        {{item.productName}}
                                    </div>
                                </div>
                                <div class="item-cell">
                                    <div class="c-title">
                                        {{item.productNumber}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-subtitle">
                                        {{item.productSpecification}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-text">
                                        {{item.deliveryDay}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div>
                                        <span style="color:red">{{`HK$${item.purchasePrice}`}}</span>
                                        <CStepper style="float:right" v-model="item.purchaseQuantity" :min="0" :max="100" @change="quantityChange($event,index)"></CStepper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <f7-swipeout-actions left>
                    <f7-swipeout-button overswipe color="green">Reply</f7-swipeout-button>
                    <f7-swipeout-button color="blue">Forward</f7-swipeout-button>
                </f7-swipeout-actions>
                <f7-swipeout-actions right>
                    <f7-swipeout-button>More</f7-swipeout-button>
                    <f7-swipeout-button color="orange">Mark</f7-swipeout-button>
                    <f7-swipeout-button delete overswipe confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
                </f7-swipeout-actions>
            </li>
        </f7-list>

        <f7-toolbar bottom-md>
            <span style="padding-left:16px">
                <f7-checkbox :checked="selectAll" @change="selectAll = $event.target.checked"></f7-checkbox>
                <span>全部</span>
            </span>
            <span>合计：xxx元</span>
            <f7-button>去结算(3)</f7-button>
        </f7-toolbar>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
import CStepper from '@/components/CStepper.vue';
export default {
    components: {
        CStepper
    },
    mounted() {
        this.init();
        this.getData();
    },
    data() {
        return {
            pageTitle: '',
            productList: [],
            selectAll: false
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
                        }
                    }.bind(this)
                );
            }
        },
        quantityChange($val, index) {
            this.productList[index]['purchaseQuantity'] = $val;
            // this.$set(this.productList, index, this.productList[index]);
        }
    }
}
</script>
<style lang="less" scoped>
.cart-container {
  .nav-icon {
    padding: 0 1rem;
  }
}
</style>
