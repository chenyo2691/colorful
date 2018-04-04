<template>
    <f7-page class="first-container">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>{{pageTitle}}</f7-nav-title>
        </f7-navbar>
        <f7-row no-gap class="item-container">
            <f7-col width="50" v-for="(item,index) in data" :key="index">
                <Category :imgSrc="item.imageUrl" :title="item.middleCategoryName" @click="selectItem(item)">
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
            pUuid: '',
            pageTitle: '',
            data: []
        }
    },
    methods: {
        init() {
            let query = this.$f7route.query;
            this.pUuid = query.uuid;
            this.pageTitle = query.name;
        },
        getData() {
            api.new_getmiddlecategorylist(
                {language: 'tc', page: 1, pageSize: 5, mainCategoryUuid: this.pUuid},
                function (res) {
                    if (!res.code) {
                        this.data = res.data.middleCategoryList;
                    }
                }.bind(this)
            );
        },
        selectItem(item) {
            this.$f7router.navigate(`/line/ThirdLevel/?pUuid=${this.pUuid}&uuid=${item.middleCategoryUuid}&name=${item.middleCategoryName}`, {
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
</style>
