<template>
<div>
<el-table style="width: 100%;" :data="ary">
<el-table-column type="index" width="50"></el-table-column>
<el-table-column label="编号" prop="age" width="180"></el-table-column>
<el-table-column label="用户姓名" prop="name" width="180"></el-table-column>
<el-table-column label="爱好" prop="like" width="180"></el-table-column>
</el-table>

<div class="block">
<el-pagination
background
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page.sync="currentPage1"
:page-size="pageList"
layout="total, prev, pager, next"
:total="total"
@click.native="pageFunction()"
></el-pagination>
</div>
</div>
</template>

<script>
export default {
name: "home",
components: {},
data() {
return {
list: [
{
name: "a213",
age: 12342,
like: "play code"
},
{
name: "aewr",
age: 18,
like: "play code"
},
{
name: "ewra",
age: 18,
like: "play code"
},
{
name: "reta",
age: 18,
like: "play code"
},
{
name: "fdgdfga",
age: 18,
like: "play code"
},
{
name: "dfgdfga",
age: 18,
like: "play code"
},
{
name: "cvbvca",
age: 18,
like: "pvcblay code"
},
{
name: "a",
age: 18,
like: "play code"
},
{
name: "vcbda",
age: 18,
like: "play code"
},
{
name: "sdbvcba",
age: 18,
like: "play code"
},

{
name: "bvna",
age: 18,
like: "play code"
},
{
name: "bvna",
age: 18,
like: "play code"
},
{
name: "bvna",
age: 18,
like: "play code"
}
],
pageList: 5,
currentPage1: 1,
total:13,
ary:[]
};
},
methods: {
handleCurrentChange(val) {
this.currentPage1 = val;
//alert(this.currentPage1)
},
handleSizeChange: function(size) {
this.pageList = size;
console.log(this.pageList); //每页下拉显示数据
},
tablePagination() {
/**
* 表格数据分页的方法
*/
let array = [],
startNum = 0,
endNum = 0;
this.total = this.list.length;
startNum = (this.currentPage1 - 1) * this.pageList;
if (this.currentPage1 * this.pageList < this.total) {
endNum = this.currentPage1 * this.pageList;
} else {
endNum = this.total;
}
array = this.list.slice(startNum, endNum);
this.ary = array
console.log(startNum,endNum)
console.log(this.currentPage1)
},
pageFunction(){
this.tablePagination()
}
},

//创建后先调用一下方法，做数据的请求
created(){
this.tablePagination()
}
 
};
</script>
<style scoped>
.itemList {
display: flex;
justify-content: space-around;
}
</style>