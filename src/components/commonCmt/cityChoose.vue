<template>
  <div>
    <div class="city_choose_button">
      <button  @click="chooseCity" type="button" class="btn btn-primary">点我选择区域</button><h5 class="disInline margin20">{{choosedCity}}</h5>
    </div>
    <div v-if="showCity">
      <v-distpicker  @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" type="mobile"></v-distpicker>
    </div>

  </div>

</template>

<script>
  export default {
    name: "cityChoose",
    data(){
      return{
        showCity:false,
        choosedCity:null,
      }
    },
    created:function(){
    },
    methods:{
      chooseCity:function () {
        this.showCity=!this.showCity
        if(this.choosedCity){
         /*天气展示页面 展示隐藏*/
          this.$emit("showWeather",this.showCity)
        }
      },
      onChangeProvince(a){
        console.log(a)
      },
      onChangeCity(a){
        console.log(a)
        if(a.code){
          this.showCity=!this.showCity
          this.choosedCity=a.value
          /*查询天气*/
          this.$emit("searchWeath",this.choosedCity)
        }else{
          this.choosedCity=null;
        }

      },
      onChangeArea(a){
        console.log(a)

      }

    }
  }
</script>

<style scoped>
.disInline{
  display: inline;
}
  .margin20{
    margin-left: 20%;
  }
</style>
