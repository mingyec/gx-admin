<style scoped>
    .layout {
        padding: 15px;
    }
    .add-btn {
        float: left;
        margin: 5px 0;
    }
</style>

<template>
    <div class="layout">
        <Button @click="addCompany" type="primary" class="add-btn">新增客户</Button>
        <div style="clear: both"></div>
        <Table :columns="companyList" :data="companyData"></Table>
    </div>
</template>

<script>
    import expandRow from './Company/CompanyExpandRow.vue'
    import newCompany from './Company/NewCompany.vue'
    import api from '../util/axios'
    export default {
        components: {
            expandRow,
            newCompany
        },
        methods: {
            addCompany() {
                this.$Modal.confirm({
                    render: (h, params) => {
                        return h(newCompany)
                    }
                })
            }
        },
        data() {
            return {
                companyList: [{
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h(expandRow,{
                            props: {
                                row: params.row
                            }
                        })
                    }
                },{
                    title: '客户ID',
                    key: 'companyID',
                    width: 80
                },{
                    title: '客户名',
                    key: 'companyName'
                },{
                    title: '全厂容量',
                    key: 'capacity',
                    width: 100
                },{
                    title: '缓冲单元mac',
                    key: 'terminalMac'
                },{
                    title: '地址',
                    key: 'address'
                }],
                companyData: []
            }
        },
        created () {
            //载入现有客户的详细信息列表
            api.getCompanyDetailList().then(({
                data
            }) => {
                this.companyData = data.data;
            })
        }
    }
</script>