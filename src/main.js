import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false
   Vue.prototype.resetSetItem = function (key,newVal){
     if (key === 'watchStorage'){
       //创建一个StorageEvent事件
       var newStorageEvent = document.createEvent('StorageEvent');
       const storage = {
         setItem:function (k,val){
           sessionStorage.setItem(k,val);
           //初始化创建事件
           newStorageEvent.initStorageEvent('setItem,false,false,k,null,val,null,null');
           //派发对象
           window.dispatchEvent(newStorageEvent)

         }
       }
       return storage.setItem(key,newVal);
     }
   }
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
