<template>
  <div class="container-fluid indexCenter">
    <div class="input-group">
      <input v-model="name" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
      <input v-model="password" type="text" class="form-control" placeholder="passWord" aria-describedby="basic-addon1">
    </div>
    <div>
      <button @click="login" type="button" class="btn btn-primary">登陆</button>
    </div>
    <div class="input-group checkbox_input">
      <div><span class="glyphicon glyphicon-user"></span></div>
      <div><input type="checkbox"></div>
    </div>
    <common-Tip :title="title" :content="content"  :tipsShow="tipsShow" @changeTips="changeTip"></common-Tip>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:null,
      password:null,
      title:null,
      content:null,
      tipsShow:null
    }
  },
  created:function(){
    //var  _this=this
    // setInterval(function () {
    //
    //   _this.$store.dispatch("changeLogin",!_this.$store.state.loadingCtrl)
    //   console.log(_this.$store.state.loadingCtrl)
    //
    // },1000000)
   // this.$store.dispatch("changeLogin",true)
   //  console.log(this.$store.state.loadingCtrl)
  },
  methods:{
    login:function () {
      if(this.name==1&&this.password==1){
        this.$router.push('/navL')
      }else{
        this.tipsShow=true
        this.title="警告"
        this.content="请输入正确账号或密码！！"
      }

    },
    changeTip:function (type) {
      this.tipsShow=type
    }
  }
}
</script>
<style scoped>
  .indexCenter{
    text-align: center;
  }
  .input-group{
    padding: 1rem;
    margin: 0 auto;
  }
  button{
    padding: 0.8rem 5rem;
  }
  .checkbox_input{
    float: right;
    margin-right: 10%;
  }
  .checkbox_input div{
    display: inline;
  }
  .checkbox_input input{
    vertical-align: sub;
    margin-left: 0.5rem;
  }
</style>
