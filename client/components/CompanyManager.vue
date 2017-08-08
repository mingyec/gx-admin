<style scoped>
    .layout {
        padding: 15px;
    }
</style>

<template>
    <Table :columns="companyList" :data="companyData"></Table>
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
                    key: 'companyID'
                },{
                    title: '客户名',
                    key: 'companyName'
                }],
                companyData: [{
                    companyID: 1,
                    companyName: 'test',
                    address: '地址',
                    capacity: 1250
                }]
            }
        }
    }
</script>