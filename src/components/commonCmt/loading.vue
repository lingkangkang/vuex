<template>
    <div class="container-fluid  lingLOading" v-if="showLoad">
     <p>LOADING.......</p>
    </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            showLoad:false
          }
      },
      created:function () {
        this.showLoad=this.$store.state.loadingCtrl
      },
      computed : {
        nowCtrl:function () {
          return this.$store.state.loadingCtrl
        }
      },
      watch:{
        nowCtrl(news,olds) {
           this.showLoad=news
        }
      }
    }
</script>

<style scoped>
.container-fluid{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0f0f0f;
  opacity: .3;
  color: #ffffff;
  text-align: center;
  z-index: 1111111;
}
  .container-fluid>p{
    margin-top: 40%;
  }
</style>
