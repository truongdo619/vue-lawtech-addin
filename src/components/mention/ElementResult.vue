<template>
    <div class="result-element" @click="handleClick">
        <div class="result-content">
            <div class="element-title" style="font-size: 16px">
                {{this.id}}. Số hiệu: {{this.item['official_number'][0]}}
            </div>
            <div class="element-status">
                Ngày ban hành: {{this.issued_date}}
            </div>
            <div class="element-des">
                {{this.item['document_info'][0]}}
            </div>
        </div>

        <i class="el-icon-arrow-right icon"></i>
    </div>
</template>

<script>
    export default {
        name: 'ElementResult',
        props: {
            item: {
                type: Object
            },
            id : {

            }
        },
        methods: {
            handleClick(){
                this.$emit('click-element', this.id )
            }
        },
        computed: {
            issued_date(){

                let issued_date = this.item['issued_date'];
                if (issued_date != null && issued_date != undefined && issued_date.length != 0 ){
                    let tmp = issued_date.substring(0, 10).split("-");
                    return tmp[2] + "-" + tmp[1] + "-" + tmp[0];
                }
                return "";
            }
        }
    }
</script>

<style>
    .result-element{
        font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
        position: relative;
        min-height: 54px;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 0px;
        box-sizing: border-box;
        display: flex;
        cursor: pointer;
        outline: transparent;
        border-bottom: 1px solid rgb(237, 235, 233);
    }
    .result-element:hover{
        background: rgb(237, 235, 233);
    }

    .result-content{
        margin-left: 10px;
        flex-grow: 1;
        overflow: hidden;
    }

    .result-element .icon{
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        font-style: normal;
        font-weight: normal;
        font-family: FabricMDL2Icons;
        align-self: center;
        margin-left: 10px;
        color: rgb(161, 159, 157);
        font-size: 18px;
        flex-shrink: 0;
    }
    .element-title{
        -webkit-font-smoothing: antialiased;
        font-size: 20px;
        font-weight: 600;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .element-status{
        font-size: 12px;
        color: rgb(161, 159, 157);
        margin-bottom: 10px;
    }
</style>