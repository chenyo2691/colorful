<template>
    <f7-list>
        <li v-bind:class="[isEdit ? 'swipeout swipeout-transitioning' : '']" v-for="(item,index) in productList" :key="index">
            <div v-bind:class="[isEdit ? 'swipeout-content' : '']">
                <div class="item-content">
                    <f7-checkbox v-if="isEdit" class="c-check" :checked="item.isCheck" @change="itemCheck($event, index)"></f7-checkbox>
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
                                    <CStepper v-show="isEdit" class="c-quantity" v-model="item.purchaseQuantity" :min="0" :max="100" @change="quantityChange($event,index)"></CStepper>
                                    <span v-show="!isEdit" class="c-quantity">x {{item.purchaseQuantity}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <f7-swipeout-actions right v-if="isEdit">
                <f7-swipeout-button color="red" @click="deletePro(index)">删除</f7-swipeout-button>
            </f7-swipeout-actions>
        </li>
    </f7-list>
</template>
<script>
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
    props: [
        'productList',
        'isEdit'
    ],
    components: {
        CStepper
    },
    filters: {
        dfm: function (value) {
            return dateFormat(new Date(value), 'yyyy-MM-dd');
        }
    },
    data() {
        return {
        };
    },
    methods: {
        deletePro(index) {
            this.$emit('deletePro', index);
        },
        itemCheck($event, index) {
            this.$emit('itemCheck', $event, index);
        },
        quantityChange($val, index) {
            this.$emit('quantityChange', $val, index);
        },
    }
}
</script>
<style lang="less" scoped>
.c-check {
  padding-right: 16px;
}

.c-quantity {
  float: right;
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
</style>