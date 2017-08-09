<style scoped>
    .layout {
        padding: 15px;
    }
</style>

<template>
    <div  class="layout-content">
        <Table :columns="companyList" :data="companyData"></Table>
    </div>
</template>

<script>
    import expandRow from './Company/CompanyExpandRow.vue'
    export default {
        components: {
            expandRow
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
                companyData: [{
                    companyID: 1,
                    companyName: 'test',
                    address: '地址',
                    capacity: 1250
                },{
                    companyID: 1,
                    companyName: 'test',
                    address: '地址',
                    capacity: 1250
                }]
            }
        }
    }
</script>