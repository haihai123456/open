<template>
    <div>
   
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      a:1
    };
  },
  created(){
    setTimeout(()=>{
        this.a = 2
     },1000)
  },
  watch : {
     a:function(newValue, oldValue){
        console.log(newValue,oldValue)
      },
  }

};
</script>

<style>

</style>
