<template>
    <div>
        <input type="text" v-model.lazy="value" >
        <p>{{pValue}}</p>
        <input type="text" v-model.lazy="userName.name">
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:'111',
            pValue:"12",
            userName:{
                name:"Mir.Wang"
            }
        }
    },
watch:{
    value(a){ //监听input值，发生变化就会触发
       this.pValue = a
    },
    pValue(a){//监听p标签的值，当input值发生变化时，设置了p标签的值，该函数就会触发
      console.log(a)
    },

    "userName.name"(a){//用字符串的方法来取代深度监听deep:true，很耗费性能
      console.log(a)
    }
}
}
</script>