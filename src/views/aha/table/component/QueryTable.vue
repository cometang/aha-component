<template>
    <div>
        <div class="box">
            <el-row>
                <el-button type="success" size="small" @click="addQueryBtn(0)" v-if="isFirst"> 新增查询语句</el-button>

            </el-row>
            <div class="title-search-box">
                <div class="query-box"
                     v-for="(item,index) in queryFormula"
                     :key="index">
                            <el-select v-model="item.field" placeholder="需查询的字段" class="query-item" style="width: 30%">
                                <el-option :label="item1.text" :value="item1.key"
                                           v-for="(item1,index1) in tableHead" :key="index1">
                                </el-option>
                            </el-select>
                            <el-select v-model="item.sign" placeholder="操作符" class="query-item" style="width: 25%">
                                <el-option :label="item2.val" :value="item2.key"
                                           v-for="(item2,index2) in signList" :key="index2" >
                                </el-option>
                            </el-select>
                            <el-input v-model="item.val" placeholder="查询值" class="query-item" style="width: 20%"></el-input>
                            <span>
                                <el-tag type="success" v-if="item.connect == '&&'"  style="width: 10%;margin-left: 5%">且</el-tag>
                                <el-tag type="warning" v-if="item.connect == '||'"  style="width: 10%;margin-left: 5%">或</el-tag>
                            </span>


                </div>
                <div class="add-connect-btn" v-if=" !isFirst">
                    <el-button @click="addQueryBtn(1)" size="small" type="success">并且</el-button>
                    <el-button @click="addQueryBtn(2)" size="small" type="success">或者</el-button>
                    <el-button @click="queryBtn" size="small" type="primary">完成条件搜索</el-button>
                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="content-box">
                <el-table v-loading="isLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
                    <template v-for="(item,index) in tableHead ">
                        <el-table-column
                                         align="center"
                                         v-if="item.type == 'dateTime'"
                                         :prop="item.key"
                                         :label="item.text" :key="index"
                                         :formatter="timeFilter">
                        </el-table-column>

                        <el-table-column
                                         align="center"
                                         v-else
                                         :label="item.text" :key="index">
                            <template slot-scope="scope">
                                <span>{{ scope.row[item.key]}}</span>
                            </template>
                        </el-table-column>

                    </template>
                    <el-table-column align="center" label="操作" width="180px" >
                        <template slot-scope="scope">
                            <el-button type="primary" size="small"
                                       icon="el-icon-circle-check-outline"
                                       @click="editData(scope.row)">
                                详情
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
        data() {
            return {
                tableData: [
                    {name: 'xxx', age: 22, dateTimer: 1565947147000, tell: '15899699987'}, {
                        name: 'xxx',
                        age: 22,
                        dateTimer: 1565947147000,
                        tell: '15899699987'
                    },
                    {name: 'xxx', age: 22, dateTimer: 1565947147000, tell: '15899699987'}, {
                        name: 'xxx',
                        age: 22,
                        dateTimer: 1565947147000,
                        tell: '15899699987'
                    },
                    {name: 'xxx', age: 22, dateTimer: 1565947147000, tell: '15899699987'}, {
                        name: 'xxx',
                        age: 22,
                        dateTimer: 1565947147000,
                        tell: '15899699987'
                    },
                    {name: 'xxx', age: 22, dateTimer: 1565947147000, tell: '15899699987'}, {
                        name: 'xxx',
                        age: 22,
                        dateTimer: 1565947147000,
                        tell: '15899699987'
                    },
                    {name: 'xxx', age: 22, dateTimer: 1565947147000, tell: '15899699987'}, {
                        name: 'xxx',
                        age: 22,
                        dateTimer: 1565947147000,
                        tell: '15899699987'
                    },
                ],

                isLoading: false,

                tableHead:[{key:'name',text:'姓名',type:'string'},{key:'age',text:'年龄',type:'int'},{key:'dateTimer',text:'时间',type:'dateTime'},{key:'tell',text:'电话号码',type:'string'}],
                signList:[{key:'<',val:'小于'},{key:'>',val:'大于'},{key:'=',val:'等于'},{key:'like',val:'相似'}],
                connectSignList:[{key:'&&',val:'并且'},{key:'||',val:'或者'}],
                queryFormula: [],
                queryFormulaObj: {field: '', sign: '', val: '',connect:''},


                isFirst:true,
            }
        },
        methods: {
            editData() {
                console.log('11111')
            },
            timeFilter(row, col, val) {
                let date = new Date(val)
                let timer = date.toLocaleDateString() + ' ' + date.toLocaleTimeString('chinese', {hour12: false})
                return timer
            },
            addQueryBtn(_index) {
                let obj = {}
                let connectKey = this.queryFormula.length-1
                if(_index == 1){
                    this.queryFormula[connectKey].connect = '&&'
                }else if( _index == 2){
                    this.queryFormula[connectKey].connect = '||'
                }
                this.isFirst = false
                obj = JSON.parse(JSON.stringify(this.queryFormulaObj))
                this.queryFormula.push(obj)
                console.log(this.queryFormula)
            },

            queryBtn(){
                console.log(this.queryFormula)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .box {
        width: auto;
        padding: 10px;
    }

    .title-search-box {
        width: auto;
        padding: 20px;
    }

    .content-box {
        width: auto;
    }

    .query-box {
        float: left;
        width: 400px;
        height: 50px;
        padding: 0 10px;
        line-height: 50px;
    }
    .query-item{
        margin-left: 3%;
    }

    .add-connect-btn{
        float: left;
        width: 300px;
        height: 50px;
        line-height: 50px;
        padding:  0 20px;
    }

</style>
