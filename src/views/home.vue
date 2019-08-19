<template>
    <div style="width: 60%;margin: 0 auto">
            <el-button type="primary" @click="toTable(1)"> 查询表格 </el-button>
            <el-button type="primary" @click="toTable(2)"> 动态编辑表格</el-button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{

            }
        },
        methods:{
            toTable(key){
                this.$router.push({
                    path:'/tableShow',
                    name:'tableShow',
                    params:{
                        key:key
                    }
                })


            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">

</style>
