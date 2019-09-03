<template>
  <div class="about">
    <h1>{{value}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value:""
    };
  },
  created(){
   this.value = sessionStorage.getItem('watchStorage');
 }
}
</script>
