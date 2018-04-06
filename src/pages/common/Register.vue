<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>手机注册</f7-login-screen-title>
        <f7-list inline-labels no-hairlines-md form>
            <f7-list-item>
                <f7-label>姓名</f7-label>
                <f7-input type="text" :value="form.memberName" @input="form.memberName = $event.target.value" @input:clear="form.memberName = ''" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>手机号码</f7-label>
                <f7-input type="text" :value="form.phoneNumber" @input="form.phoneNumber = $event.target.value" @input:clear="form.phoneNumber = ''" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>设置密码</f7-label>
                <f7-input type="password" :value="form.password" @input="form.password = $event.target.value" @input:clear="form.password = ''" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>确认密码</f7-label>
                <f7-input type="password" :value="form.passwordConfirm" @input="form.passwordConfirm = $event.target.value" @input:clear="form.passwordConfirm = ''" clear-button></f7-input>
            </f7-list-item>
            <f7-list-item smart-select :smart-select-params="{ closeOnSelect: true }">
                <f7-label>服务站点</f7-label>
                <select name="mac-windows" @change="branchChange">
                    <option value="">无</option>
                    <option v-for="(item,index) in branchList" :key="index" :value="item.branchUuid">{{item.branchName}}</option>
                </select>
            </f7-list-item>
            <!--  title="服务人员" -->
            <f7-list-item no-fastclick smart-select :smart-select-params="{ closeOnSelect: true }">
                <f7-label>服务人员</f7-label>
                <select name="mac-windows" @change="form.staffUuid = $event.target.value" class="abc">
                    <option value="">无</option>
                    <option v-for="(item,index) in staffUuidList" :key="index" :value="item.staffUuid">{{item.staffName}}</option>
                </select>
            </f7-list-item>
        </f7-list>
        {{form}}
        <f7-list inset>
            <f7-list-button title="注册" color="black" @click="register"></f7-list-button>
        </f7-list>
    </f7-page>
</template>
<script>
import api from '@/api/index.js';
import storage from '@/utils/xStorage.js';
export default {
    mounted() {
        this.init();
    },
    data() {
        return {
            form: {
                memberName: '',
                password: '',
                passwordConfirm: '',
                phoneNumber: '',
                branchUuid: '',
                staffUuid: '',
                email: ''
            },
            branchList: [],
            staffUuidList: []
        };
    },
    methods: {
        init() {
            api.getbranchinfo({language: 'tc'},
                function (res) {
                    if (!res.code) {
                        console.log(res);
                        this.branchList = res.data.branchList;
                    }
                }.bind(this)
            );
        },
        register() {
            console.log('register!');
        },
        branchChange(event) {
            console.log('change');
            this.form.staffUuid = '';
            // 修改after
            const self = this;
            const app = self.$f7;
            let smartSelect = app.smartSelect.get('.no-fastclick');
            // console.log(smartSelect.$valueEl[0].innerHTML='无');
            // smartSelect.$valueEl = '无';
            smartSelect.$valueEl[0].innerHTML = '无';
            // console.log(smartSelect.$selectEl[0].selectedIndex=0);
            smartSelect.$selectEl[0].selectedIndex = 0;

            // document.getElementsByName('mac-windows').value = '';
            this.form.branchUuid = event.target.value;
            let curBranch = this.branchList.find(v => v.branchUuid === this.form.branchUuid);
            if (curBranch) {
                this.staffUuidList = curBranch.staffList;
            }
            else {
                this.staffUuidList = [];
            }
        }
    }
};
</script>
