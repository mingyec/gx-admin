<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        color: #fff;
        line-height: 30px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .auto-height {
        height: 100%;
    }
    .auto-left {
        float: left;
    }
    .auto-right {
        float: right;
    }
    .clear {
        clear: both;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class="auto-height">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto" @on-select="selectItem">
                    <div class="layout-logo-left">后台管理系统</div>
                    <Menu-item name="1" @select="selectItem">
                        <Icon type="person-stalker"></Icon>
                        <span class="layout-text">账号管理</span>
                    </Menu-item>
                    <Menu-item name="4">
                        <Icon type="plus-round"></Icon>
                        <span class="layout-text">新增账号</span>
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="person-add" :size="iconSize"></Icon>
                        <span class="layout-text">客户上线</span>
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">监测点树管理</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick" class="auto-left">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="clear"></div>
                <router-view></router-view>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import api from '../util/axios'
    export default {
        data () {
            return {
                value: '',
                spanLeft: 5,
                spanRight: 19
            }
        },
        created () {
            console.info(this);
            this.$router.push('/index/user_manager');
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            selectItem (name) {
                switch(name) {
                    case "1":
                        this.$router.push('/index/user_manager');
                        break;
                    case "2":
                        break;
                    case "3":
                        console.info(name);
                        break;
                    case "4":
                        this.$router.push('/index/new_account');
                        break;
                }
            },
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            show (params) {
                console.info(this);
                this.$Modal.info({
                    title: '修改密码',
                    content: params.row.username
                })
            },
            addUserAccount() {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input',{
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: '请输入……'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>