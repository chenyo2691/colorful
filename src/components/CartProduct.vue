<template>
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
</template>
<script>
export default {
    props: [
        'productList'
    ],
    data() {
        return {
        };
    },
    methods: {
        deletePro(index) {

        }
    }
}
</script>
<style lang="css" scoped>

</style>