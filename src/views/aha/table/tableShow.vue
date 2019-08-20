<template>
    <div>
        <el-row class="row-box">
            <el-col :span="24">

            </el-col>
            <el-button size="small" class="tag-box"
                       @click="key=1">查询表格
            </el-button>
            <el-button size="small"
                       type="success" class="tag-box"
                       @click="key=2">动态编辑
            </el-button>
            <el-button size="small"
                       type="warning" class="tag-box"
                       @click="key=3">
                        新增数据
            </el-button>
        </el-row>
        <div class="table-box">
            <query-table v-if="key==1"></query-table>
            <edit-table v-if="key == 2"></edit-table>
            <add-table v-if="key == 3"></add-table>
        </div>
    </div>
</template>

<script>
    import QueryTable from './component/QueryTable'
    import EditTable from './component/EditTable'
    import AddTable from './component/AddTable'
    export default {
        name: "tableShow",
        data(){
            return{
                key:1
            }
        },
        components:{
            QueryTable,
            EditTable,
            AddTable
        },
        mounted(){
        }
    }
</script>

<style scoped>
    .row-box{
        width: auto;
        padding: 20px;
        border-bottom: 1px solid #e8e8e8;
    }
    .tag-box{
        margin-left: 20px;
        cursor: pointer;
    }
    .table-box{
        margin-top: 20px;
    }
</style>
