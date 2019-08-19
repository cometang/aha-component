<template>
    <div>
        <div class="box">
            <div class="title-search-box">

            </div>
            <div class="content-box">
                <el-table v-loading="isLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
                    <el-table-column width="180px" align="center" label="姓名">
                        <template slot-scope="scope">
                            <span>{{ scope.row.name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="180px" align="center" label="年龄">
                        <template slot-scope="scope">
                            <span>{{ scope.row.age}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="手机号">
                        <template slot-scope="scope">
                            <span>{{ scope.row.tell}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dateTimer" align="center" label="注册时间"
                                     :formatter="timeFilter" >
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="180px">
                        <template slot-scope="scope">
                            <el-button type="success" size="small"
                                       icon="el-icon-circle-check-outline"
                                       @click="editData(scope.row)">
                                编辑
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                tableData:[
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987'},
                ],

                isLoading:false,
            }
        },
        methods:{
            editData(){
                console.log('11111')
            },
            timeFilter(row,col,val){
                let date = new Date(val)
                let timer =  date.toLocaleDateString()+ ' '+date.toLocaleTimeString('chinese',{hour12:false})
                return timer
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
    .box{
        width: auto;
        padding: 10px;
    }
    .title-search-box{
        width: auto;
        height: 180px;
    }
    .content-box{
        width: auto;
    }
</style>
