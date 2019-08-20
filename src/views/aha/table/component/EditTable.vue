<template>
    <div>
        <div class="box">
            <div class="content-box">
                <el-table v-loading="isLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
                    <el-table-column width="180px" align="center" label="姓名">
                        <template slot-scope="{row}">
                            <template v-if="row.isEdit">
                                <el-input v-model="row.name" class="edit-input" size="small" />
                            </template>

                            <span v-else>{{ row.name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="180px" align="center" label="年龄">
                        <template slot-scope="{row}">

                            <template v-if="row.isEdit">
                                <el-input v-model="row.age" class="edit-input" size="small" />
                            </template>

                            <span v-else>{{ row.age}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="手机号">
                        <template slot-scope="{row}">

                            <template v-if="row.isEdit">
                                <el-input v-model="row.tell" class="edit-input" size="small" />
                            </template>

                            <span v-else>{{ row.tell}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dateTimer" align="center" label="注册时间"
                                     :formatter="timeFilter" >
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="180px">
                        <template slot-scope="scope">

                            <template v-if="scope.row.isEdit">

                                <el-button type="success" size="small"
                                           @click="saveRow()">
                                    确定修改
                                </el-button>
                                <el-button type="danger" size="small"
                                            @click="cancleRow()">
                                    取消
                                </el-button>


                            </template>


                            <el-button type="primary" size="small"
                                       v-else
                                       icon="el-icon-circle-check-outline"
                                       @click="editData(scope)">
                                编辑
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-row style="margin: 20px auto">
                    <el-button type="primary" size="small"  @click="getTableDataBtn">提交数据</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "editTable",
        data(){
            return{
                tableData:[
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                ],

                tableHead:[{key:'name',text:'姓名',type:'string'},{key:'age',text:'年龄',type:'int'},{key:'dateTimer',text:'时间',type:'dateTime'},{key:'tell',text:'电话号码',type:'string'}],

                isLoading:false,
                // editScopeData:{}
                editRowData:{},
                editIndex:'',
            }
        },
        methods:{
            getTableDataBtn(){
                console.log(this.tableData)
            },
            editData(scope){

                this.tableData.forEach(val=>{
                    val.isEdit = false
                })


                let row = scope.row
                this.editIndex = scope.$index
                this.tableData[this.editIndex].isEdit = true

               this.editRowData =JSON.parse(JSON.stringify(row))


                // row.isEdit  =  true
                // this.editRow = JSON.parse(JSON.stringify(row))
            },
            saveRow(){
                this.tableData[this.editIndex].isEdit = false

            },
            cancleRow(){
                this.tableData.splice(this.editIndex,1,this.editRowData)
                this.tableData[this.editIndex].isEdit = false
            },
            timeFilter(row,col,val){
                let date = new Date(val)
                let timer =  date.toLocaleDateString()+ ' '+date.toLocaleTimeString('chinese',{hour12:false})
                return timer
            },

            /** 新增一行数据*/
            addDataBtn(){

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
    .btn-row{
        width: auto;
        height: 50px;
        line-height: 50px;

    }


</style>
