<template>
    <div>
        <div class="box">
            <div class="btn-row">
                <el-button size="small"  type="primary" style="margin-left: 20px" @click="addDataBtn">+ 新增</el-button>
            </div>

            <div class="content-box">
                <el-table v-loading="isLoading" :data="tableData" border fit highlight-current-row style="width: 100%">

                    <template v-for="(item,index) in tableHead ">
                        <!--日期框-->
                        <el-table-column
                                align="center"
                                v-if="item.type == 'dateTime'"
                                :label="item.text" :key="index">
                            <template slot-scope="{row}">
                                <template v-if="row.isEdit">
                                    <el-date-picker
                                            class="edit-input" size="small"
                                            v-model="row[item.key]"
                                            type="datetime"
                                            placeholder="选择日期时间"
                                            value-format="timestamp">
                                    </el-date-picker>
                                </template>
                                <span v-else>{{ timeFilter(row[item.key])}}</span>
                            </template>
                        </el-table-column>

                        <!--输入框-->
                        <el-table-column
                                align="center"
                                v-else
                                :label="item.text" :key="index">

                            <template slot-scope="{row}">
                                <template v-if="row.isEdit">
                                    <el-input v-model="row[item.key]" class="edit-input" size="small" />
                                </template>
                                <span v-else>{{ row[item.key]}}</span>
                            </template>
                        </el-table-column>

                    </template>
                    <!--操作框-->
                    <el-table-column align="center" label="操作" width="180px">
                        <template slot-scope="scope">
                            <template  v-if="scope.row.isEdit">
                                <el-button type="success" size="small"
                                           @click="saveRow()">
                                    确定修改
                                </el-button>
                                <el-button type="danger" size="small"
                                           @click="cancleRow()">
                                    取消
                                </el-button>
                            </template>
                            <template   v-else>
                                <el-button type="primary" size="small"
                                           icon="el-icon-circle-check-outline"
                                           @click="editData(scope)">
                                    编辑
                                </el-button>
                            </template>


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
        name: "AddTable",
        data(){
            return{
                tableData:[
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                    {name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},{name:'xxx',age:22,dateTimer:1565947147000,tell:'15899699987',isEdit:false},
                ],

                tableHead:[
                    {key:'name',text:'姓名',type:'string'},{key:'age',text:'年龄',type:'int'},{key:'dateTimer',text:'时间',type:'dateTime'},{key:'tell',text:'电话号码',type:'string'}
                    ],

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
            },
            saveRow(){
                console.log('2222')
                this.tableData[this.editIndex].isEdit = false

            },
            cancleRow(){
                this.tableData.splice(this.editIndex,1,this.editRowData)
                this.tableData[this.editIndex].isEdit = false
            },
            timeFilter(val){
                let date = new Date(val)
                let timer =  date.toLocaleDateString()+ ' '+date.toLocaleTimeString('chinese',{hour12:false})
                return timer
            },

            /** 新增一行数据*/
            addDataBtn(){

                this.tableData.forEach(val=>{
                    val.isEdit = false
                })

                let obj  = {}
                this.tableHead.forEach((item)=>{
                    console.log(item)
                    if(item.type == 'dateTime'){
                        let timer = new Date().getTime()
                        console.log(timer)
                        obj[item.key] = timer

                    }else{
                        obj[item.key] = ''
                    }



                })
                obj.isEdit =true
                this.tableData.push(obj)
                this.editIndex = this.tableData.length-1
                this.editRowData = obj
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
