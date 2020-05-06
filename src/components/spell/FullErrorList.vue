<template>
    <div>
        <el-collapse accordion @change="handleChange">
            <ErrorElement v-for="item in items" :key="item.id" :item="item"></ErrorElement>
        </el-collapse>
        <div v-loading="!this.loading" class="spinner"></div>
    </div>
</template>

<script>
import ErrorElement from "./ErrorElement"
export default {
    name: 'FullErrorList',
    components : { ErrorElement },
    created : function() {
        this.$store.dispatch("spell/load_error_items_full")
    },
    computed: {
        items() {
            return this.$store.state.spell.errorItems
        },
        loading(){
            return this.$store.state.spell.loadErrorItems
        }
    },
    methods: {
      handleChange(val) {
        this.$store.dispatch("spell/select_current_para", { id : val, isCur : false});
      }
    }
}
</script>
