<template>
    <Table height="600" class="layout-content" :columns="frameWork" :data="tableData" style="margin-left:10px"></Table>
</template>

<script>
    import api from '../util/axios'
    export default {
        data () {
            return {
                frameWork: [{
                    title: '客户',
                    key: 'company',
                    align: 'center',
                    filters: [],
                    filterMethod (value, row) {
                        return row.customer_Id == value;
                    }
                },{
                    title: '账号',
                    key: 'username',
                    align: 'center'
                },{
                    title: '使用人',
                    key: 'user',
                    align: 'center'
                },{
                    title: '操作',
                    key: 'action',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params);
                                    }
                                }
                            },'修改'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params);
                                    }
                                }
                            },'删除')
                        ])
                    }
                }],
                tableData: [],
                value: '',
                spanLeft: 5,
                spanRight: 19
            }
        },
        created () {
            //组件加载时载入用户表
            api.login({}).then(({
                data
            }) => {
                console.info(data);
                this.tableData = data.tableData;
                this.frameWork[0].filters = data.filterModel;
            })
        }
    }
</script>