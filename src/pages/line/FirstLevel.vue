<template>
    <f7-page class="first-container">
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
                <f7-link class="nav-icon" href="/CartList/">
                    <i class="fa fa-shopping-cart"></i>
                </f7-link>
                <f7-link class="nav-icon">
                    <i class="fa fa-file"></i>
                </f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-row no-gap class="item-container">
            <f7-col width="50" v-for="(item,index) in data" :key="index">
                <Category :imgSrc="item.imageUrl" :title="item.mainCategoryName" @click="selectItem(item)">
                </Category>
            </f7-col>
        </f7-row>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import Category from '@/components/Category.vue';
export default {
    components: {
        Category
    },
    mounted() {
        this.init();
        this.getData();
    },
    data() {
        return {
            pageTitle: '',
            data: []
        }
    },
    methods: {
        init() {
            this.pageTitle = '網購';
        },
        getData() {
            api.online_getmaincategorylist(
                {language: 'tc', page: 1, pageSize: 5},
                function (res) {
                    if (!res.code) {
                        this.data = res.data.mainCategoryList;
                    }
                }.bind(this)
            );
        },
        selectItem(item) {
            this.$f7router.navigate(`/line/SecondLevel/?uuid=${item.mainCategoryUuid}&name=${item.mainCategoryName}`, {
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
  .nav-icon {
    padding: 0 1rem;
  }
  .item-container {
    padding: 8px;
  }
}
</style>
