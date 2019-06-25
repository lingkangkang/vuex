<template>
  <div class="container-fluid">
    <div class="row headCenter padding2">
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-9">
        <div class="input-group ">
          <input v-model="searchName" type="text" class="form-control" placeholder="请输入音乐名">
          <span class="input-group-btn">
        <button @click="searchSong" class="btn btn-default" type="button">Search</button>
      </span>
        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    <div>
      <div class="row" v-for="value in songData">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img :src="value.pic" :alt="value.title">
            <div class="caption">
              <h3>{{value.title}}</h3>
              <p class="padding2">演唱：{{value.author}}</p>
              <!--<p>{{value.url}}</p>-->
              <div>
                <button @click="toListen(value)" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-music"></span>马上试听</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="headCenter">
      <div v-if="showVideo"  class="blackBg ">
        <h2 @click="closeVideo" class="glyphicon glyphicon-remove top20 colorWhite"></h2>
      </div>
      <!--播放器-->
      <div v-if="showVideo" id="player" class="videoTips zIndex11">
        <audio id="video"  controls="controls" autoplay>
          <source :src="songUrl" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../request/request.js"

  export default {
        name: "listenSong",
        data(){
          return{
            searchName:null,
            songData:null,
            showVideo:false,
            songUrl:null,
          }
        },
        methods:{
          searchSong:function () {
            var requestData={
              method:"Get",
              url:"https://api.apiopen.top/searchMusic",
              params:{name:this.searchName},
              type:'yyt'
            }
            var _this=this
            request(requestData).then(function (data) {
              console.log(data)
              _this.songData=data.result

            })
          },
          toListen:function (url) {
            this.showVideo=true;
            this.songUrl=url.url

          },
          closeVideo:function () {
            this.showVideo=false;
          }
        },
    }
</script>

<style scoped>

</style>
