    <template>
    <div>
        <Row>
            <Col span="8">
                <span class="expand-key">所属峰平谷组：</span>
                <span class="expand-value">{{ row.elecType }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">服务方式：</span>
                <span class="expand-value">{{ row.serviceID }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">关联用户组：</span>
                <span class="expand-value">{{ row.cGroupID }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">经度：</span>
                <span class="expand-value">{{ row.longitude }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">纬度：</span>
                <span class="expand-value">{{ row.latitude }}</span>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        props: {
            row: Object
        }
    }
</script>