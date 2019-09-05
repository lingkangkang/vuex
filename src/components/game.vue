<template>
  <div id="game">
    <!--<img src="../dist/image/xu.jpg">-->
  </div>
</template>

<script>
  export default {
    name: 'game',
    data() {
      return {
        clientWidth: this.$store.state.clientWidth,
        clientHeight: this.$store.state.clientHeight,
        imgArray:[{imgUrl: require("../dist/image/xu.jpg")}, {imgUrl: require("../dist/image/mei.png")}]

      }
    },
    created: function () {

    },
    mounted: function () {
      var _this=this
      for(var i = 1; i < 1000; i++) {
        clearInterval(i);
      }
      setInterval(function () {
        _this.newPland()
      },1500)
      _this.newPland()

    },
    methods: {
      /*生成下落飞机*/
      newPland: function () {
        var newPlane = document.createElement("div")
        var widthCont = this.clientWidth - 40
        var num = Math.floor(widthCont * Math.random());
        var imgNum = Math.floor(Math.random()*2);
        newPlane.style.marginLeft = num + "px"
        newPlane.style.marginTop="0px"
        newPlane.style.width = "40px"
        newPlane.style.height = "50px"
        newPlane.style.background = "url("+this.imgArray[imgNum].imgUrl+") center center/100% 100% no-repeat"
        newPlane.style.position = "absolute"
        var part = document.getElementById("game")
        part.appendChild(newPlane)
        var headHeight = newPlane.offsetTop
        var allNext = this.clientHeight-headHeight-50
      //  console.log(allNext)
        /*飞机下落*/
          var _this = this
          var nowTime = setInterval(function (e) {
          var nowTop = newPlane.style.marginTop
          var nextTop = parseInt(nowTop) + 1
          newPlane.style.marginTop = nextTop + "px"
            /*可下滑高度*/

          if (nextTop >= allNext) {//61+50 头部 加本身高度
            clearInterval(nowTime)
            part.removeChild( newPlane)
          }
        }, 10)
      }

    }
  }
</script>

<style>
</style>
