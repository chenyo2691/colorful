<template>
    <f7-page class="product-container">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>{{pageTitle}}</f7-nav-title>
        </f7-navbar>
        <f7-swiper class="demo-swiper-multiple" pagination :params="{speed:500, slidesPerView: 1, spaceBetween: 0}">
            <f7-swiper-slide v-for="(item,index) in data['imageName']['other']" :key="index" :style="`background-image:url(${item.img});`">
            </f7-swiper-slide>
        </f7-swiper>
        <f7-list media-list style="margin:0 0 32px">
            <f7-list-item>
                <span slot="title">{{data.productENName}}</span>
                <span slot="subtitle">{{data.productTCName}}</span>
                <span slot="after">
                    <f7-link @click="popupDetail" v-show="data.remark">详情</f7-link>
                </span>
            </f7-list-item>
            <f7-list-item>
                <f7-label>售价 Price (商品编号:{{data.productNumber}})</f7-label>
                <f7-input inputStyle="color:#751BA3" readonly type="text" :value="`HK$${data.onlinePurchasePrice}`"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list media-list>
            <f7-list-item>
                <f7-label>选择交货日期</f7-label>
                <f7-input readonly type="text" placeholder="日期" id="demo-calendar-default" :info="`库存${atp}`" :value="uploadDate"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list inline-labels no-hairlines-md>
            <f7-list-item>
                <f7-label>购买数量</f7-label>
                <CStepper v-model="formItem.purchaseQuantity" :min="0" :max="atp" @change="quantityChange"></CStepper>
            </f7-list-item>
        </f7-list>

        <f7-toolbar bottom-md>
            <f7-button style="width:100%" @click="submit">立即订购</f7-button>
        </f7-toolbar>

        <!-- Add stepper-init class -->
        <!-- {{data.atp}}
        {{data.deliverDay}}
        {{data.remark}}
        {{data.guaranteeDay}}
       
        {{data.productUuid}}
        {{data.specification}} -->
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import APPICON from 'static/icon/AOS/app/192x192/192.png';
import CStepper from '@/components/CStepper.vue';
import storage from '@/utils/xStorage.js';
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
    mounted() {
        this.init();
        this.getData();
    },
    data() {
        return {
            productUuid: '',
            pageTitle: '',
            data: {
                remark: null,
                imageName: {
                    primary: {},
                    other: []
                },
                onlinePurchasePrice: 0,
                productENName: '',
                productNumber: '',
                productTCName: '',
                productUuid: '',
                quantity: [],
                specification: {}
            },
            formItem: {
                token: '',
                productUuid: '',
                purchaseQuantity: 0,
                salesMode: 'New',
                deliveryDate: ''
            },
            atp: 0,
            uploadDate: []
        }
    },
    on: {
        pageInit(e) {
            const self = this;
            const app = self.$f7;
            const $ = self.$$;
            let today = new Date();
            let yesterday = new Date().setDate(today.getDate() - 1);
            self.calendarDefault = app.calendar.create({
                inputEl: '#demo-calendar-default',
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
                toolbarCloseText: '确定',
                footer: true,
                disabled: function (date) {
                    let isExist = this.data.quantity.find(v => new Date(v.uploadDate).getTime() === date.getTime());
                    if (isExist) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }.bind(this),
                on: {
                    closed: function (calendar) {
                        // console.log(calendar.getValue());
                        this.uploadDate = dateFormat(new Date(calendar.getValue()), 'yyyy-MM-dd');
                        let isExist = this.data.quantity.find(v => new Date(v.uploadDate).getTime() === new Date(calendar.getValue()).getTime());
                        if (isExist) {
                            this.atp = isExist.atp;
                            this.formItem.purchaseQuantity = 0;
                        }
                    }.bind(this)
                }
            });
        },
        pageBeforeOut() {
            const self = this;
            // Close opened sheets on page out
            self.$f7.sheet.close();
        },
        pageBeforeRemove() {
            const self = this;
            // Destroy sheet modal when page removed
            if (self.sheet) self.sheet.destroy();
            self.calendarDefault.destroy();
        }
    },
    methods: {
        init() {
            let query = this.$f7route.query;
            this.productUuid = query.uuid;
            this.pageTitle = '新品';
            this.formItem.productUuid = query.uuid;
        },
        getData() {
            api.new_getproductinfo(
                {language: 'tc', productUuid: this.productUuid},
                function (res) {
                    if (!res.code) {
                        this.data = res.data.productInfo;
                        // 初始化日期与库存
                        if (this.calendarDefault && this.data.quantity.length > 0) {
                            let first = this.data.quantity[0];
                            this.formItem.purchaseQuantity = 0;
                            this.atp = first['atp'];
                            this.uploadDate = [dateFormat(new Date(first['uploadDate']), 'yyyy-MM-dd')];
                            this.calendarDefault.setValue([new Date(first['uploadDate'])]);
                            // this.calendarDefault.update();
                            // this.uploadDate = dateFormat(new Date(first['uploadDate']), 'yyyy-MM-dd');
                        }
                    }
                }.bind(this)
            );
        },
        popupDetail() {
            const self = this;
            const $ = self.$$;
            // Create sheet modal
            if (!self.sheet) {
                self.sheet = self.$f7.sheet.create({
                    content: `
            <div class="sheet-modal">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a href="#" class="link sheet-close">关闭</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p>${this.data.remark}</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
                });
            }
            // Close inline sheet
            if ($('.demo-sheet.modal-in').length > 0) self.$f7.sheet.close('.demo-sheet');
            // Open it
            self.sheet.open();
        },
        quantityChange(val) {
            this.formItem.purchaseQuantity = val;
        },
        showToastCenter(msg) {
            const self = this;
            self.$f7.toast.create({
                text: msg,
                position: 'center',
                closeTimeout: 2000,
            }).open();
        },
        submit() {
            let quantity = this.formItem.purchaseQuantity;
            if (quantity === 0) {
                this.showToastCenter('购买数量不能为0');
                return false;
            }
            else {
                if (storage.lStorage.getData('memberInfo') === null) {
                    this.$f7router.navigate(`/Login/`, {
                        history: true,
                        animate: false,
                        ignoreCache: false
                    });
                }
                else {
                    this.formItem = Object.assign({}, this.formItem, {
                        token: storage.lStorage.getData('memberInfo').token,
                        deliveryDate: this.uploadDate[0]
                    });
                    api.cart_addproducttocart(this.formItem,
                        function (res) {
                            if (!res.code) {
                                this.showToastCenter('订购成功');
                            }
                        }.bind(this)
                    );
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
.product-container {
  .item-container {
    padding: 8px;
  }
}

.demo-swiper-multiple .swiper-slide {
  background-size: cover;
  background-position: center;
  //   font-size: 25px;
  //   font-weight: 300;
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
  //   -webkit-box-pack: center;
  //   -ms-flex-pack: center;
  //   -webkit-justify-content: center;
  //   justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   -webkit-align-items: center;
  //   align-items: center;
  //   background: #fff;
  //   color: #000;

  //   box-sizing: border-box;
  //   border: 1px solid #ccc;
  //   background: #fff;
}
.demo-swiper-multiple {
  //   margin: 0px 0 35px;
  font-size: 18px;
  height: 80vw;
}
</style>
