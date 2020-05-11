<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
            <template slot="title">
                <span class="document_title">Sắc lệnh 22</span>
            </template>
            <DocumentDetail></DocumentDetail>
        </el-collapse-item>
        <el-collapse-item name="2">
            <template slot="title">
                <span class="document_title">Thông tư 16-BYT/TT</span>
            </template>
            <DocumentDetail></DocumentDetail>
        </el-collapse-item>
        <el-collapse-item name="3">
            <template slot="title">
                <span class="document_title">Thông tư 42-BYT/TT</span>
            </template>
            <DocumentDetail></DocumentDetail>
        </el-collapse-item>
        <el-collapse-item name="4">
            <template slot="title">
                <span class="document_title">Nghị định 2333-BYT/NĐ</span>
            </template>
            <DocumentDetail></DocumentDetail>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import DocumentDetail from './/DocumentDetail'
export default {
    name : 'ListDocument',
    components : {DocumentDetail},
    data() {
      return {
        activeNames: []
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>

<style scoped>
#app .mention .el-collapse{
    border-top: none;
    border-bottom: none;
    position: relative;
    top: 50px;
    padding: 5px 10px 10px 10px;
}

.mention .is-active .document_title{
    font-size: 16px;
    font-weight: 600;
}
</style>