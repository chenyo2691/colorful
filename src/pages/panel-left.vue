<template>
    <f7-page>
        <f7-navbar title="菜单"></f7-navbar>
        <f7-block-title>导航</f7-block-title>
        <f7-list>
            <f7-list-item link="/" title="首页" view="#main-view" panel-close></f7-list-item>
            <f7-list-item link="/line/FirstLevel/" title="网购" view="#main-view" panel-close></f7-list-item>
            <f7-list-item link="/form/" title="新品" view="#main-view" panel-close></f7-list-item>
        </f7-list>
        <f7-block-title>会员中心</f7-block-title>
        <f7-list>
            <f7-list-item link="/about/" title="登录" view="#main-view" panel-close></f7-list-item>
            <f7-list-item link="/form/" title="我的订单" view="#main-view" panel-close></f7-list-item>
            <f7-list-item link="/form/" title="我的积分" view="#main-view" panel-close></f7-list-item>
        </f7-list>
        <f7-block-title>咨询</f7-block-title>
    </f7-page>
</template>
<script>
export default {}
</script>