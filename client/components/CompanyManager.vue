<style scoped>
    .layout {
        padding: 15px;
    }
</style>
<template>
    <Form class="layout" ref="company" :label-width="80" :model="newAccountForm">
        <Form-item label="请选择客户">
            <Select v-model="newAccountForm.companyID" placeholder="请选择所属客户">
                <Option style="float:left;" v-for="key in companyItems" :value="key.companyID" :key="key.companyID">{{key.companyName}}</Option>
            </Select>
        </Form-item>
    </Form>
</template>

<script>
    import api from '../util/axios'
    export default {
        data () {
            return {
                newAccountForm: {

                },
                companyItems: []
            }
        },
        created () {
            //载入现有客户列表，配置于下拉框
            api.getCompanyList().then(({
                data
            }) => {
                this.companyItems = data.data;
            })
        }
    }
</script>