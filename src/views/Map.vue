<template>
    <div class="baiduMap" id="allMap"></div>
</template>

<script>
export default {
    components:{

    },
    mounted() {
     
    },
    created() {
        addClass(this.htmlDom, 'noscroll');
        removeClass(this.htmlDom,'noscroll')
    },
    methods: {
        hasClass(el,className){
           let reg = new RegExp('(^|\\s)'+ className + '(\\s|$)')
           return reg.test(el.className)
       },
        addClass(el,className){
            if (hasClass(el,className)){
                return
            }
            if(el.className === ''){
                el.className += className
            }else{
                let newClass = el.className.split('')
                newClass.push(className)
                el.className = newClass.join('')
            }
        },
        removeClass(el,className){
            if (hasClass(el, className)){
                el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), '')
            };
        }
   
    },
}
</script>

<style>
 .noscroll{
   position : fixed;
   left:0;
   top:0;
   width:100%;
 }

</style>
