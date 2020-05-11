<template>
    <div class="mention">
        <TopBar></TopBar>
        <ListDocument></ListDocument>
    </div> 
</template>


<script>

import TopBar from '../../components/mention/TopBar'
import ListDocument from '../../components/mention/ListDocument'
export default {
    name: 'MentionList',
    components : {TopBar, ListDocument},
    async mounted(){
        this.$store.dispatch("search/search_document", "luật nhà")
    }
}
</script>

<style scoped>

</style>