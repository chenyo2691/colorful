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
        <f7-block>
            <f7-row class="module-contanier">
                <f7-col width="50">
                    <div class="module-item" @click="selectModule('line')" :style="`background-image:url(${LINEBG})`">
                        <!-- <p>网&nbsp;购</p>
                        <p>On Line</p> -->
                    </div>
                </f7-col>
                <f7-col width="50">
                    <div class="module-item" @click="selectModule('new')" :style="`background-image:url(${NEWBG})`">
                        <!-- <p>新&nbsp;品</p>
                        <p>New</p> -->
                    </div>
                </f7-col>
                <f7-col width="50">
                    <div class="module-item" :style="`background-image:url(${AUCTIONBG})`">
                        <!-- <p>竞&nbsp;购</p>
                        <p>Auction</p> -->
                    </div>
                </f7-col>
                <f7-col width="50">
                    <div class="module-item" :style="`background-image:url(${SITEBG})`">
                        <!-- <p>网&nbsp;购</p>
                        <p>On Site</p> -->
                    </div>
                </f7-col>
            </f7-row>
        </f7-block>
        <img :src="BOTTOMBG" alt="" class="bg">
    </f7-page>
</template>
<script>
import APPICON from 'static/icon/AOS/app/192x192/192.png';
import BOTTOMBG from 'static/icon/AOS/standard/1920x1080/9.png';
import LINEBG from 'static/icon/AOS/standard/1920x1080/4.png';
import NEWBG from 'static/icon/AOS/standard/1920x1080/5.png';
import AUCTIONBG from 'static/icon/AOS/standard/1920x1080/6.png';
import SITEBG from 'static/icon/AOS/standard/1920x1080/7.png';
export default {
    mounted() {
        window.$f7router = this.$f7router;
    },
    data() {
        return {
            APPICON,
            BOTTOMBG,
            LINEBG,
            NEWBG,
            AUCTIONBG,
            SITEBG
        }
    },
    methods: {
        selectModule(module) {
            switch (module) {
                case 'line':
                    this.$f7router.navigate('/line/FirstLevel/', {
                        history: true
                    });
                    break;
                case 'new':
                    this.$f7router.navigate('/new/FirstLevel/', {
                        history: true
                    });
                    break;

                default:
                    break;
            }
        }
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
  .module-contanier {
    .module-item {
      height: 40vw;
      width: 100%;
      color: #000;
      font-size: 1.5rem;
      //   box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

      text-align: center;
      background-size: cover;
      background-position: center;
      border-radius: 10%;
      margin-bottom: 16px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
        padding: 0;
      }
    }
  }
  .bg {
    width: 100%;
    max-height: 20vh;
    position: fixed;
    right: 0;
    bottom: 0;
  }
}
</style>

