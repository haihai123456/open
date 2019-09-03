<template>
  <div class="home">
    <button @click="dispach">按钮</button>
  </div>
</template>

<script>
export default {
  data(){
     return{
       Num:4
     }
  },
  methods:{
  dispach(){
   this.resetSetItem('watchStorage',this.Num);
  }
  },
  name: 'home',
  components: {
   
  }
}
</script>
<style>
.home{
  width: 200px;
  height: 200px;
  background: pink;
}
</style>
