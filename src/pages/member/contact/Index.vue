<template>
    <f7-page>
        <f7-list>
            <li>
                <a href="#" class="item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell">
                                JACK
                            </div>
                            <div class="item-cell">
                                123456789999
                            </div>
                            <div class="item-cell">
                                <div class="center-cell">
                                    <f7-badge color="red">家</f7-badge>
                                </div>
                            </div>
                        </div>
                        <div class="item-row">
                            <div class="item-cell">默认地址</div>
                            <div class="item-cell">
                                <div class="item-row">
                                    xx区xx区xx区xx区xx区
                                </div>
                            </div>
                            <div class="item-cell">
                                <div class="center-cell">
                                    <f7-link icon-only>
                                        <i class="fa fa-pencil"></i>
                                    </f7-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </f7-list>
    </f7-page>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style lang="less" scoped>
.center-cell {
  text-align: center;
}

.right-cell {
  text-align: right;
}
</style>
