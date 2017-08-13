<style scoped>
    .layout {
        padding: 15px;
    }
</style>
<template>
    <Form ref="company" :label-width="100" :model="Companys">
        <Row>
            <Col span="24">
                <Form-item label="客户名">
                    <Input placeholder="请输入客户名"></Input>
                </Form-item>
                <Form-item label="全厂容量">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="地址">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="经度">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="纬度">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="缓冲单元mac">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="用电分类">
                    <Input placeholder="请填写"></Input>
                </Form-item>
                <Form-item label="服务方式">
                    <Input placeholder="请填写"></Input>
                </Form-item>
            </Col>
        </Row>
    </Form>
</template>

<script>
    import api from '../../util/axios'
    export default {
        data () {
            return {
                Companys: {

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