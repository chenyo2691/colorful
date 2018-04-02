<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>缤纷</f7-login-screen-title>
        <f7-list form>
            <f7-list-item>
                <f7-label>用户</f7-label>
                <f7-input type="text" placeholder="Your memberNumber" @input="memberNumber = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="Your password" @input="password = $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-button @click="signIn">登录</f7-list-button>
            <f7-block-footer>登录遇到问题？</f7-block-footer>
        </f7-list>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            memberNumber: '',
            password: '',
        };
    },
    methods: {
        signIn() {
            const self = this;
            const app = self.$f7;
            const router = self.$f7router;
            // app.dialog.alert(`memberNumber: ${self.memberNumber}<br>Password: ${self.password}`, () => {
            //     router.back();
            // });
            api.login(
                {language: 'tc', memberNumber: this.memberNumber, password: this.password},
                function (res) {
                    if (!res.code) {
                        console.log(res);
                    }
                }.bind(this)
            );
        },
    },
};
</script>
