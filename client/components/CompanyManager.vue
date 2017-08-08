<style scoped>
    .layout {
        padding: 15px;
    }
</style>
<template>
    <Form class="layout" ref="company" :label-width="100" :model="Companys">
        <Row>
            <Col span="8">
                <Form-item label="请选择客户">
                    <Select v-model="Companys.companyID" placeholder="请选择所属客户">
                        <Option style="float:left;" v-for="key in companyItems" :value="key.companyID" :key="key.companyID">{{key.companyName}}</Option>
                    </Select>
                </Form-item>
            </Col>
            <Col span="2">
                <Button type="primary">新增客户</Button>
            </Col>
        </Row>
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
    </Form>
</template>

<script>
    import api from '../util/axios'
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