<template>
    
</template>

<script>
export default {
    methods : {
     //递归判断项目中存在对象(一层一层的找，之后再原路返回)
     ruleValidate(data){
         let flag = true;
         function judgeChildren(data) {
             data.forEach(e => {
                 if (!flag){
                     return;
                 }
                 if (e.value){
                     e.prop = e.value; //给对象增加自定义的key
                     e.lable = e.value;
                 }
                 if (!e.value){
                     flag = false;
                     return;
                 }else if (e.children && e.children.length){
                     e.children.prop = e.value;
                     e.children.lable = e.value;
                     judgeChildren(e.children);
                 }
             });
         }
         judgeChildren(data);
         return data;
     }

    },
    created() {
        this.dataObj = this.ruleValidate(this.list);
        console.log(this.dataObj);
    },
    data(){
      return { 
        list : [
       　　 {
                value: "1",
                children: [
                    {
                        value: "2"
                    },
                    {
                        value: "3",
                        children: [
                            {
                                value: "4"
                            }
                        ]
                    }
                ]
            },
            {
                value: "5",
                children: [
                    {
                        value: "6",
                        children: [
                            {
                                value: "7"
                            }
                        ]
                    }
                ]
            },
        ]
      }
    }

  }
</script>

<style>
</style>
