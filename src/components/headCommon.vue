<template>
  <!--col-xs-6 col-sm-5 col-md-4 col-lg-3-->
  <div>
    <div class="row container-fluid headCenter ">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <span @click="back" class="glyphicon glyphicon-chevron-left"></span>
      </div>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <p>{{thisTitel}}</p>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <span @click="share" class="glyphicon glyphicon-new-window"></span>
      </div>
    </div>
    <router-view/>
    <common-loading class="cont"></common-loading>
  </div>

</template>

<script>
  export default {
    name: "headCommon",
    data(){
      return{
        thisTitel:this.$store.state.title
      }
    },
    methods:{
        back:function(){
          this.$router.back(-1)
        },
      share:function(){
        alert("share")
      }
    },
    computed:{
      nowTitle:function () {
        return this.$store.state.title
      }
    },
    watch:{
      nowTitle:function (newtitle,oldtitle) {
        this.thisTitel=newtitle
      }
    }
  }
</script>

<style scoped>
  .row div, .row p {
    display: inline-block;
  }
  .headCenter{
    text-align: center;
  }
  .row{
    padding: 1.5rem;
   }
  .row p{
    font-size: 1.8rem;
  }
  .cont{
  }
</style>
