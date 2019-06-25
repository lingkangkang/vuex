<template>
  <div class="container-fluid">
    <div>
      <city-choose @searchWeath="searchWth" @showWeather="showWth"></city-choose>
    </div>
    <div v-if="showWeather">
      <div class="list-group">
        <div class="alert alert-warning" role="alert">{{weathDataWarm}}</div>
        <a v-for="listData in weathData" href="#" class="list-group-item list-group-item-success marginBom2">
          <p>日期:<span>{{listData.date}}</span></p>
          <p>风向:<span>{{listData.fengxiang}}</span></p>
          <p>高温:<span>{{listData.high}}</span></p>
          <p>低温:<span>{{listData.low}}</span></p>
          <p><span class="glyphicon glyphicon-cloud paddingRig2"></span>{{listData.type}}</p>
        </a>

      </div>
    </div>
  </div>


</template>

<script>
  import {request} from "../request/request.js"
  import cityChoose from "./commonCmt/cityChoose"
  export default {
        name: "weather",
        data(){
          return{
            showWeather:false,
            weathData:null,
            weathDataWarm:null,
          }
        },
    components:{
          "city-choose":cityChoose
        },
        created:function(){

      },
      methods:{
        searchWth:function (city) {
          if(city.indexOf("城区")){
            city=city.split("城区")[0]
          }
          /*获取天气信息*/
          this.showWeather=true
          var requestData={
            method:"Get",
            url:"https://www.apiopen.top/weatherApi",
            params:{city:city},
            type:'yyt'
          }
          var _this=this
         request(requestData).then(function (data) {
           /*渲染*/
           _this.weathData=data.data.forecast
           _this.weathDataWarm=data.data.ganmao
           console.log(_this.weathData)
         })

        },
        showWth:function (show) {
          this.showWeather=!show
        }

      }
    }
</script>

<style scoped>
.marginBom2{
  margin-bottom: 2%;
}
  .paddingRig2{
    padding-right: 2%;
  }
</style>
