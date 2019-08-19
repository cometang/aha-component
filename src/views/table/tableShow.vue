<template>
    <div>
        <div>
            <query-table v-if="key==1"></query-table>
            <edit-table v-if="key == 2"></edit-table>
        </div>
    </div>
</template>

<script>
    import QueryTable from '@/components/QueryTable'
    import EditTable from '@/components/EditTable'
    export default {
        name: "tableShow",
        data(){
            return{
                key:0
            }
        },
        components:{
            QueryTable,
            EditTable
        },
        mounted(){
            this.key= this.$route.params.key
            if( !this.key){
              this.$router.push('/')
            }


        }
    }
</script>

<style scoped>

</style>
