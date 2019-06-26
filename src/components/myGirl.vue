<template>
 <div class="container-fluid">
   <div class="gundong setLOcation">
     <div class="gundongBox">
       <div class="gundongList">
         <span>假如这一生我可以有999次好运，我愿意把997次都分给你，只留两次给自己，一次是遇见你，一次是永远陪你走</span>
         <span>假如这一生我可以有999次好运，我愿意把997次都分给你，只留两次给自己，一次是遇见你，一次是永远陪你走</span>
         <span>假如这一生我可以有999次好运，我愿意把997次都分给你，只留两次给自己，一次是遇见你，一次是永远陪你走</span>
         <span>假如这一生我可以有999次好运，我愿意把997次都分给你，只留两次给自己，一次是遇见你，一次是永远陪你走</span>
         <span>假如这一生我可以有999次好运，我愿意把997次都分给你，只留两次给自己，一次是遇见你，一次是永远陪你走</span>
       </div>
     </div>
   </div>
   <div class="heart  bgSet">
     <video style="display: none" src="http://win.web.ra01.sycdn.kuwo.cn/9ef816bfe8d95b9abe2b8b41168417d1/5d132cb8/resource/n3/320/11/70/2472159120.mp3" autoplay loop></video>
     <div class="cube">
       <div>
         <img src="../../static/imagesGirl/1.jpg" width="200" height="200" alt="">
       </div>
       <div>
         <img src="../../static/imagesGirl/2.jpg" width="200" height="200" alt="">
       </div>
       <div>
         <img src="../../static/imagesGirl/3.jpg" width="200" height="200" alt="">
       </div>
       <div>
         <img src="../../static/imagesGirl/4.jpg" width="200" height="200" alt="">
       </div>
       <div>
         <img src="../../static/imagesGirl/5.jpg" width="200" height="200" alt="">
       </div>
       <div>
         <img src="../../static/imagesGirl/6.jpg" width="200" height="200" alt="">
       </div>
     </div>
   </div>

 </div>
</template>

<script>
  export default {
    name: "myGirl",
    created: function () {
      // 随机色
      var getRandomColor = function () {
        return '#' +
          (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
            && (color.length == 6) ? color : arguments.callee(color);
          })('');
      }
      var heart = document.getElementsByClassName("heart")[0];
      for (var i = 0; i < 36; i++) {
        var oDiv = document.createElement("div");
        oDiv.className = "rib";
        // 画36条心形曲线
        oDiv.style.transform = "rotateY(" + 10 * i + "deg) rotateZ(45deg) translateX(30px)";
        var n = 0;
        setInterval(function () {
          if (n < 36) {
            //document.getElementsByClassName('rib')[n].style.borderColor = getRandomColor();
            $(".rib").css("border-color",getRandomColor())
            n = n + 1;
          } else {
            n = 0;
          }
        }, 1000)
        console.log(n)
        heart.appendChild(oDiv);
      }


    }
  }
</script>

<style scoped>
  .setLOcation{
    top: -10%;
    position: absolute;
    width: 100%;
  }
  .gundongBox {
    width: 300px;
    height: 30px;
    margin: 200px auto;
    position: relative;
    overflow: hidden;
    background: pink;
  }

  .gundongList {
    position: absolute;
    animation: geiwogun 40s linear infinite;
    white-space: nowrap;
  }

  .gundongList span {
    font-size: 20px;
    color: #000;
    padding: 5px 10px
  }

  @keyframes geiwogun {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-50%, 0);
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #000;
    overflow: hidden;
  }

  .heart {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    transform-style: preserve-3d;
    perspective: 800px;
    animation: rot 10s linear infinite;
  }

  @keyframes rot {
    from {
      transform: rotateY(0deg) rotateX(0deg)
    }
    to {
      transform: rotateY(360deg) rotateX(360deg)
    }
  }




  .cube {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    color: red;
    transform-style: preserve-3d;
    transform: translateZ(100px);
  }

  .cube div {
    position: absolute;
    width: 200px;
    height: 200px;
  }

  .cube div:nth-child(1) {
    left: 0;
    top: -200px;
    transform-origin: bottom;
    transform: rotateX(90deg);
  }

  .cube div:nth-child(2) {
    left: 0;
    top: 200px;
    transform-origin: top;
    transform: rotateX(-90deg);
  }

  .cube div:nth-child(3) {
    left: -200px;
    top: 0px;
    transform-origin: right;
    transform: rotateY(-90deg);
  }

  .cube div:nth-child(4) {
    left: 200px;
    top: 0px;
    transform-origin: left;
    transform: rotateY(90deg);
  }

  .cube div:nth-child(5) {
    left: 0;
    top: 0px;
  }

  .cube div:nth-child(6) {
    left: 0;
    top: 0px;
    transform: translateZ(-200px);
  }
</style>
