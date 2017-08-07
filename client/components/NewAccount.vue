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
                    <Form-item label="使用者">
                        <Input v-model="newAccountForm.userdesc" placeholder="请填写使用者（非必须）"></Input>
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
    import api from '../util/axios'
    import entry from '../util/md5'
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
                    rpassword: '',
                    userdesc: ''
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
            //载入现有客户列表，配置于下拉框
            api.getCompanyList().then(({
                data
            }) => {
                this.companyItems = data.data;
            })
        },
        methods: {
            submitForm (name) {
                let psword = this.newAccountForm.password;
                this.newAccountForm.password = entry.MD5_ENCRYPT(psword);
                this.newAccountForm.rpassword = entry.MD5_ENCRYPT(psword)
                this.$refs[name].validate((valid) => {
                    console.info(valid);
                    if(valid) {
                        api.addNewUsername(this.newAccountForm).then(({
                            data
                        }) => {
                            const status = data.status;
                            if(status) {
                                this.$Message.success('提交成功！');
                                //清空表单项
                                this.$refs[name].resetFields();
                            }else {
                                this.$Message.error('提交失败！');
                            }
                        })
                    }else {
                        this.$Message.error('提交失败！请检查相应参数是否有误');
                    }
                })
            }
        }
    }
</script>