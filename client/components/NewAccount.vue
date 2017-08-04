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
                            <Form-item label="客户" prop="companyID">
                                <Select v-model="newAccountForm.companyID" placeholder="请选择所属客户">
                                    <Option style="float:left;" v-for="key in companyItems" :value="key.companyID" :key="key.companyID">{{key.companyName}}</Option>
                                </Select>
                            </Form-item>
                        </Col>
                    </Row>
                    <Form-item label="账号" prop="username">
                        <Input v-model="newAccountForm.username" placeholder="请输入账号"></Input>
                    </Form-item>
                    <Form-item label="密码" prop="password">
                        <Input v-model="newAccountForm.password" type="password" placeholder="请输入密码"></Input>
                    </Form-item>
                    <Form-item label="确认密码" prop="rpassword">
                        <Input v-model="newAccountForm.rpassword" type="password" placeholder="请再输入一次密码进行确认"></Input>
                    </Form-item>
                    <Form-item style="float: left;">
                        <Button type="primary" @click="submitForm(`newAccountForm`)">提交</Button>
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
            const validatePasswd = (rule,value,callback) => {
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
                    username: [{
                        required: true,
                        message: '帐号不能为空',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }],
                    rpassword: [{
                        required: true,
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
            submitForm (name) {
                this.$refs[name].validate((valid) => {
                    console.info(valid);
                    if(valid) {
                        api.addNewUsername(this.newAccountForm).then(({
                            data
                        }) => {
                            console.info(data);
                            this.$Message.success('提交成功！');
                        })
                    }else {
                        this.$Message.error('提交失败！');
                    }
                })
            }
        }
    }
</script>