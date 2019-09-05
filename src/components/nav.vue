<template>
<div class="container-fluid">

  <ul class="nav">
    <li class="padding2" @click="changeNav(value)"  v-for="value in navList" role="presentation" ><span  class="glyphicon glyphicon-list"></span>{{value.title}}</li>
  </ul>
  <div>
    <router-view/>
  </div>
</div>
</template>

<script>
    export default {
        name: "navL",
      data(){
          return{
            navList:[{route:'/weather',title:'天气查询'},{route:'/listenSong',title:'音悦台'},{route:'/myGirl',title:'myGirl'},{route:'/scroller',title:'scroll'},{route:'/game',title:'game'}]
        }
      },
      created:function () {

      },
      methods:{
        changeNav:function (route) {
          this.$router.push(route.route)
        }
      }
    }
</script>

<style scoped>

</style>
