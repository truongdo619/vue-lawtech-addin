<template>
    <div class="topbar">
        <span><b>Danh sách lỗi</b></span>
        <router-link :to="{ name: 'HomeSpell', query: { 'field': field, 'speed': speed }}">
            <span><i class="el-icon-close"></i></span>
        </router-link>
    </div>
</template>

<script>
export default {
    "name" : "TopBar",
    data(){
      return{
        field: "",
        speed: ""
      }
    },
    mounted() {
      this.field = this.$route.query.field
      this.speed = this.$route.query.speed
    }
}
</script>

<style scoped>
.topbar{
    width: 100%;
    position: fixed;
    z-index: 100;
    height: 40px;
    /* padding: 5px 15px 5px 15px; */
    background-color: #1e87f0;
}
.topbar span{
    line-height: 40px;
    padding-left: 15px;
    color: white;
}
.topbar span:last-child{
    float: right;
    padding-right: 20px;
}
</style>