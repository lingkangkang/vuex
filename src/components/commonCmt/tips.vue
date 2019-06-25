<template>
  <div v-show="tipsShow" class="modalNow" id="myTips" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog marginTop20 padding10">
      <div class="modal-content">
        <div class="modal-header">
          <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">-->
            <!--&times;-->
          <!--</button>-->
          <h4 class="modal-title" id="myModalLabel">
            {{title}}
          </h4>
        </div>
        <div class="modal-body">
          {{content}}
        </div>
        <div class="modal-footer">
          <button @click="closeTips" type="button" class="btn btn-default" data-dismiss="modal">关闭
          </button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
  export default {
    name: "tips",
    data() {
      return {

      }
    },
    methods:{
      closeTips:function () {
        this.$emit('changeTips',false)
      }
    },
    created:function(){

    },
    // watch:{
    //   tipsShow:function (newdata,olddata) {
    //     console.log(newdata)
    //     console.log(olddata)
    //     this.tipsShow1=newdata
    //   }
    // },
    props:['title','content','tipsShow']
  }
</script>

<style scoped>
.marginTop20{
  margin-top: 20%;
}
  .modalNow{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
  .padding10{
    padding: 10%;
  }
</style>
