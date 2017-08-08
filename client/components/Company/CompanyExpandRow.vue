<template>
    <div>
        <Row>
            <Col span="12">
                <span class="expand-key">容量</span>
                <span class="expand-value">{{ row.capacity }}</span>
            </Col>
            <Col span="12">
                <span class="expand-key">地址</span>
                <span class="expand-value">{{ row.address }}</span>
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