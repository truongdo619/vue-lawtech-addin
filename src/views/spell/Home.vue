
<template>
    <div class="home">
        <div class="topbar">
            <span><b>Home</b></span>
        </div>
        <div class="logo_pane">
            <img :src="logo">
            <p>WELCOME TO LAWTECH SPELL</p>
        </div>

        <div class="content_pane">
            <p>Tìm hiểu tính năng của công cụ Lawtech Spell!!</p>
            <table>
                <tr>
                    <td width="50" style="text-align: center;"><i class="el-icon-document-checked"></i></td>
                    <td>Kiểm tra chính tả đoạn văn bản hiện tại</td>
                </tr>
                <tr>
                    <td width="50" style="text-align: center;"><i class="el-icon-document-copy"></i></td>
                    <td>Kiểm tra chính tả toàn bộ văn bản ( Premium )</td>
                </tr>
            </table>
        </div>

        <div class="button_pane">
            <div style="margin-bottom:10px">
                <router-link to="/spell/curlist">
                    <el-button type="primary">Kiểm tra đoạn văn</el-button>
                </router-link>
            </div>
            <div>
                <router-link to="/spell/fulllist">
                    <el-button type="danger">Kiểm tra văn bản</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "../../assets/logo-filled.png"
    export default {
        name: 'HomeSpell',
        data(){
            return {
                logo : logo
            }
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

.logo_pane{
    padding: 60px 20px 20px 20px;
    background-color: #f4f4f4;
}
.logo_pane p{
    font-size: 1.2rem;
    text-align: center;
    color: #848383;
    margin-bottom: 0px;
}

.logo_pane img{
    width: 150px; 
    display: block;
  margin-left: auto;
  margin-right: auto;
}

.content_pane{
    padding: 2px 30px 10px 30px;
}
.content_pane > p {
    text-align:center;
    
    font-size: 1rem;
}
.home table {
    table-layout: fixed;
    width: 250px;
    margin: 20px auto 10px auto;
}

.home table td {
    font-size: 0.91rem;
    word-wrap: break-word;         /* All browsers since IE 5.5+ */
    overflow-wrap: break-word;     /* Renamed property in CSS3 draft spec */
    padding-bottom: 20px;
    color: #606266;
}
.home table i{
    transform: scale(1.5);
}
.home .button_pane button{
    margin: 0 auto;
    display: block;
    width: 290px;
    border-radius: 0px;
}
.home .button_pane a{
    text-decoration: none;
}

.home .button_pane{
    margin-bottom: 30px;
}
</style>