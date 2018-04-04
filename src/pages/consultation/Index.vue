<template>
    <f7-page class="home-container">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>缤纷</f7-nav-title>
        </f7-navbar>
        <f7-block class="app-cart">
            <div class="app-avatar">
                <img :src="APPICON" width="70" height="70" />
            </div>
            <div>
                <div class="app-cname">缤纷</div>
                <div class="app-ename">Brighten-Mall</div>
            </div>
        </f7-block>
        <f7-list>
            <f7-list-item link="/consultation/Policy/" title="隱私政策"></f7-list-item>
            <f7-list-item link="/consultation/Terms/" title="通用條款"></f7-list-item>
            <f7-list-item link="/consultation/Rules/" title="購物條款及細則"></f7-list-item>
            <f7-list-item link="/consultation/Contact/" title="聯絡我們 / 分店資料"></f7-list-item>
            <f7-list-item link="/consultation/Sharing/" title="興好友分享"></f7-list-item>
            <f7-list-item link="/consultation/About/" title="關於我們"></f7-list-item>
            <f7-list-item link="/consultation/Tips/" title="繽紛貼士"></f7-list-item>
            <f7-list-item link="/consultation/News/" title="最新消息"></f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
import APPICON from 'static/icon/AOS/app/192x192/192.png';
export default {
    data() {
        return {
            APPICON
        }
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.home-container {
  .app-cart {
    //   height: 25vw;
    display: flex;
    align-items: flex-end;
    .app-avatar {
      width: 70px;
    }
    .app-cname {
      margin-left: 10px;
      font-size: 14px;
      // font-weight: 700;
    }
    .app-ename {
      margin-left: 10px;
      font-size: 13px;
      // font-weight: 700;
      color: #8e8e93;
    }
  }
}
</style>

