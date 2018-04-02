<template>
    <div class="item" @click="itemClick">
        <div class="item-img">
            <img class="img" :src="imgSrc" alt="">
        </div>
        <div class="item-title">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'imgSrc',
        'title'
    ],
    methods: {
        itemClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="less" scoped>
.item {
  padding: 0 16px;
  margin: 8px 0;
  .item-img {
    width: 100%;
    height: 0;
    padding-bottom: 90%;
    margin-bottom: calc(1%);
    position: relative;
    .img {
      // 元素居中
      border: 1px solid #c6b581;
      border-radius: 10%;
      max-height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
  .item-title {
    // 超出两行省略号
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
