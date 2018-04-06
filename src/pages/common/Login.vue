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
        <f7-list inset>
            <f7-list-button title="登录" color="black" @click="signIn"></f7-list-button>
        </f7-list>
        <f7-block>
            <f7-list>
                <f7-link @click="forget">忘记密码？</f7-link>
                <f7-link @click="register" style="float:right">注册</f7-link>
            </f7-list>
        </f7-block>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
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
                        storage.lStorage.setData('memberInfo', res.data);
                        app.dialog.alert(`${self.memberNumber}登录成功<br>感谢回来`, '系统提示', () => {
                            router.back();
                        });
                        // let memberInfo = {
                        //     branchInfo: {
                        //         branchName: '东区店铺',
                        //         staffName: '马德钟'
                        //     },
                        //     memberInfo: {
                        //         memberEmail: 'a@b.com',
                        //         memberName: '小梁',
                        //         memberNumber: '5ab5cf4e',
                        //         memberUuid: '7a273fa8-d32e-47af-9d72-c26f4a115838',
                        //         phoneNumber: '123700000'
                        //     },
                        //     token: 'NWFiNWNmNGUt5bCP5qKBLTE1MjI4MjMxNDE='
                        // };
                    }
                }.bind(this)
            );
            // console.log('设置前获取');
            // console.log('lStorage', storage.lStorage.getData('memberNumber'));
            // console.log('sStorage', storage.sStorage.getData('memberNumber'));
            // console.log('---------------------------------');

            // console.log('从这里开始测试storage');
            // console.log('设置lStorage');
            // storage.lStorage.setData('memberNumber', this.memberNumber);
            // console.log('获取lStorage');
            // console.log(storage.lStorage.getData('memberNumber'));
            // console.log('---------------------------------');
            // console.log('设置sStorage');
            // storage.sStorage.setData('memberNumber', this.memberNumber);
            // console.log('获取sStorage');
            // console.log(storage.sStorage.getData('memberNumber'));
        },
        forget() {
            this.$f7router.navigate(`/Forget/`, {
                history: true,
                animate: false,
                ignoreCache: false
            });
        },
        register() {
            this.$f7router.navigate(`/Register/`, {
                history: true,
                animate: false,
                ignoreCache: false
            });
        }
    },
};
</script>
