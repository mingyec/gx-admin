<style scoped>
    .layout {
        padding: 15px;
    }
</style>
<template>
    <div class="layout">
        <Form :label-width="80" :model="newAccountForm">
            <Row>
                <Col span="15">
                    <Row>
                        <Col span="15">
                            <Form-item label="客户">
                                <Select v-modal="newAccountForm.companyName" @on-change="selectChange" placeholder="请选择所属客户">
                                    <Option v-for="key in companyItems" :value="key.companyID" :key="key.companyID">{{key.companyName}}</Option>
                                </Select>
                            </Form-item>
                        </Col>
                    </Row>
                    <Form-item label="账号">
                        <Input v-modal="newAccountForm.username" placeholder="请输入账号"></Input>
                    </Form-item>
                    <Form-item label="密码">
                        <Input v-modal="newAccountForm.password" type="password" placeholder="请输入密码"></Input>
                    </Form-item>
                    <Form-item label="确认密码">
                        <Input v-modal="newAccountForm.rpassword" @on-blur="comparePassword" type="password" placeholder="请再输入一次密码进行确认"></Input>
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
            return {
                companyItems: [],
                newAccountForm: {
                    companyID: '',
                    username: '',
                    password: '',
                    rpassword: ''
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
            selectChange (value) {
                console.info(value);
            },
            comparePassword (value) {
                console.info(value);
                console.info(this);
            }
        }
    }
</script>