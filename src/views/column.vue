<template>
    <EcharsColumnNormal :dataList = "valObj"></EcharsColumnNormal>
    
</template>

<script>
import EcharsColumnNormal from '@/component/EcharsColumnNormal.vue';
components:{EcharsColumnNormal}
export default {
    valObj:{
        title:"故障排名",
        tooltip:
             "显示：所有设备中发生的故障次数和排名<br/>结论：通过设备发生故障排名可以分析出所选设备中最容易发生的故障情况，此类故障是产品改进的只要方向",
              width:700,
              height:600,
              echarsData:[
                  {name:"shebei001",val:0.2},
                  {name:"配置",val:0.6},
                  {name:"设备舞动",val:0.5},
                  {name:"y15故障-确认",val:0.3},
                  {name:"组合1_故障_确认并恢复",val:0.3},
                  {name:"确认并回复",val:0.2},
                  {name:"y9组合故障-确认",val:0.2},
                  {name:""}
              ]

    }
 
}
</script>

<style>

</style>
