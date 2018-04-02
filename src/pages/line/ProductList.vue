<template>
    <f7-page class="first-container">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>{{pageTitle}}</f7-nav-title>
        </f7-navbar>
        <!-- <f7-list media-list>
            <f7-list-item v-for="(item,index) in data" :key="index" swipeout @click="selectItem(item)" 
            title="titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle" 
            after="after" 
            subtitle="subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle" 
            text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext">
                <img slot="media" :src="APPICON" width="80" />
                <f7-swipeout-actions left>
                    <f7-swipeout-button overswipe color="green">Reply</f7-swipeout-button>
                    <f7-swipeout-button color="blue">Forward</f7-swipeout-button>
                </f7-swipeout-actions>
                <f7-swipeout-actions right>
                    <f7-swipeout-button>More</f7-swipeout-button>
                    <f7-swipeout-button color="orange">Mark</f7-swipeout-button>
                    <f7-swipeout-button delete overswipe confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
                </f7-swipeout-actions>
            </f7-list-item>
        </f7-list> -->
        <!-- <f7-list media-list>
            <f7-list-item v-for="(item,index) in data" :key="index" swipeout @click="selectItem(item)" 
            header="" 
            :footer="item.specification" 
            :title="item.productTCName" 
            :after="`HK$${item.onlinePurchasePrice}`" 
            :subtitle="item.productENName" 
            :text="item.remark">
                <img slot="media" :src="APPICON" width="80" />
                <f7-swipeout-actions left>
                    <f7-swipeout-button overswipe color="green">Reply</f7-swipeout-button>
                    <f7-swipeout-button color="blue">Forward</f7-swipeout-button>
                </f7-swipeout-actions>
                <f7-swipeout-actions right>
                    <f7-swipeout-button>More</f7-swipeout-button>
                    <f7-swipeout-button color="orange">Mark</f7-swipeout-button>
                    <f7-swipeout-button delete overswipe confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
                </f7-swipeout-actions>
            </f7-list-item>
        </f7-list> -->

        <f7-list>
            <li class="swipeout swipeout-transitioning" v-for="(item,index) in data" :key="index" @click="selectItem(item)">
                <div class="swipeout-content">
                    <div class="item-content">
                        <div class="item-media">
                            <img :src="APPICON" width="80" />
                        </div>
                        <div class="item-inner item-cell">
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-title">
                                        {{item.productTCName}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-subtitle">
                                        {{item.productENName}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-text">
                                        {{item.specification}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-price">
                                        <div>售价</div>
                                        <div>Price</div>
                                    </div>
                                </div>
                                <div class="item-cell">
                                    <div class="c-price">
                                        {{`HK$${item.onlinePurchasePrice}`}}
                                    </div>
                                </div>
                            </div>
                            <div class="item-row">
                                <div class="item-cell">
                                    <div class="c-text">
                                        {{item.remark}}
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
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import APPICON from 'static/icon/AOS/app/192x192/192.png';
export default {
    mounted() {
        this.init();
        this.getData();
    },
    data() {
        return {
            pppUuid: '',
            ppUuid: '',
            pUuid: '',
            pageTitle: '',
            data: [],
            APPICON
        }
    },
    methods: {
        init() {
            let query = this.$f7route.query;
            this.pUuid = query.uuid;
            this.ppUuid = query.pUuid;
            this.pppUuid = query.ppUuid;
            this.pageTitle = query.name;
        },
        getData() {
            api.online_getproductlist(
                {language: 'tc', page: 1, pageSize: 5, mainCategoryUuid: this.pppUuid, middleCategoryUuid: this.ppUuid, subCategoryUuid: this.pUuid},
                function (res) {
                    if (!res.code) {
                        this.data = res.data.productList;
                    }
                }.bind(this)
            );
        },
        selectItem(item) {
            this.$f7router.navigate(`/line/Product/?uuid=${item.productUuid}`, {
                history: true,
                animate: false,
                ignoreCache: false
            });
        }
    }
}
</script>
<style lang="less" scoped>
.first-container {
  .item-container {
    padding: 8px;
  }
}

.c-title {
  font-weight: 600;
  min-width: 0;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.c-subtitle {
  font-weight: 600;
  min-width: 0;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.c-text {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;

  font-size: 15px;
  color: #8e8e93;
}

.c-price {
  color: #ed3f14;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
}
</style>
