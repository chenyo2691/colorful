<template>
    <div class="number-input-container">
        <f7-button raised class="number-input-btn" small @click="minus()">-</f7-button>
        <div class="number-input-btn number-input-text">
            <span>{{value}}</span>
        </div>
        <f7-button raised class="number-input-btn" small @click="add()">+</f7-button>
    </div>
</template>
<script>
export default {
    props: [
        'value',
        'min',
        'max'
    ],
    data() {
        return {
        };
    },
    methods: {
        minus() {
            if (this.value - 1 < this.min) {
                return;
            }
            else {
                let result = this.value - 1;
                this.$emit('change', result);
            }
        },
        add() {
            if (this.value + 1 > this.max) {
                return;
            }
            else {
                let result = this.value + 1;
                this.$emit('change', result);
            }
        },

    }
};
</script>
<style lang="less" scoped>
.number-input-container {
  .number-input-btn {
    float: left;
    width: auto;
    min-width: 20px;
  }
  .number-input-text {
    padding: 0 0.3rem;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>