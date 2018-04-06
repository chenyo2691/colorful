<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>手机注册</f7-login-screen-title>
        <f7-list inline-labels no-hairlines-md form>
            <f7-list-item>
                <f7-label>姓名</f7-label>
                <f7-input type="text" @input="memberName = $event.target.value" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>手机号码</f7-label>
                <f7-input type="text" @input="phoneNumber = $event.target.value" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>设置密码</f7-label>
                <f7-input type="password" @input="password = $event.target.value" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>确认密码</f7-label>
                <f7-input type="password" @input="passwordConfirm = $event.target.value" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item smart-select :smart-select-params="{ closeOnSelect: true }">
                <f7-label>服务站点</f7-label>
                <select name="fruits">
                    <option value="apple" selected>Apple</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="pear">Pear</option>
                    <option value="orange">Orange</option>
                    <option value="melon">Melon</option>
                    <option value="peach">Peach</option>
                    <option value="banana">Banana</option>
                </select>
            </f7-list-item>
            <!--  title="服务人员" -->
            <f7-list-item smart-select :smart-select-params="{ closeOnSelect: true }">
                <f7-label>服务人员</f7-label>
                <select name="mac-windows">
                    <option value="mac">Mac</option>
                    <option value="windows">Windows</option>
                </select>
            </f7-list-item>
        </f7-list>
        <f7-list inset>
            <f7-list-button title="注册" color="black" @click="register"></f7-list-button>
        </f7-list>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
export default {
    data() {
        return {
            memberName: '',
            password: '',
            passwordConfirm: '',
            phoneNumber: '',
            branchUuid: '',
            staffUuid: '',
            email: ''
        };
    },
    methods: {
        register() {
            console.log('register!');
        }
    }
};
</script>
