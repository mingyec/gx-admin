<style scoped>
    .layout {
        padding: 15px;
    }
</style>
<template>
    <div class="layout">
        <Form :label-width="80"  ref="newAccountForm" :model="newAccountForm" :rules="ruleCustom">
            <Row>
                <Col span="15">
                    <Row>
                        <Col span="15">
                            <Form-item label="客户">
                                <Select v-model="newAccountForm.companyID" placeholder="请选择所属客户">
                                    <Option style="float:left;" v-for="key in companyItems" :value="key.companyID" :key="key.companyID">{{key.companyName}}</Option>
                                </Select>
                            </Form-item>
                        </Col>
                    </Row>
                    <Form-item label="账号">
                        <Input v-model="newAccountForm.username" placeholder="请输入账号"></Input>
                    </Form-item>
                    <Form-item label="密码" prop="passwd">
                        <Input v-model="newAccountForm.password" type="password" placeholder="请输入密码"></Input>
                    </Form-item>
                    <Form-item label="确认密码" prop="rpasswd">
                        <Input v-model="newAccountForm.rpassword" type="password" placeholder="请再输入一次密码进行确认"></Input>
                    </Form-item>
                    <Form-item style="float: left;">
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px;">取消</Button>
                    </Form-item>
                </Col>
            </Row>
            
        </Form>
    </div>
</template>

<script>
    import api from '../router/axios'
    export default {
        data () {
            let validateForm = (rule,value,callback) => {
                console.info(rule);
                if(!value || value === '') {
                    callback(new Error('输入不能为空'));
                } else {
                    callback();
                }
            };
            const validatePasswd = (rule,value,callback) => {
                console.info(value);
                if(value === '') {
                    callback(new Error('输入不能为空'));
                } else if(value !== this.newAccountForm.password) {
                    callback(new Error('两次输入密码不一致！'));
                } else {
                    callback();
                }
            };
            return {
                companyItems: [],
                newAccountForm: {
                    companyID: '',
                    username: '',
                    password: '',
                    rpassword: ''
                },
                ruleCustom: {
                    passwd: [{
                        validator: validateForm,
                        trigger: 'blur'
                    }],
                    rpasswd: [{
                        validator: validatePasswd,
                        trigger: 'blur'
                    }]
                }
            }
        },
        created () {
            api.getCompanyList().then(({
                data
            }) => {
                this.companyItems = data.data;
            })
        },
        methods: {
            comparePassword () {
                let pw = this.newAccountForm.password;
                let rpw = this.newAccountForm.rpassword;
            }
        }
    }
</script>