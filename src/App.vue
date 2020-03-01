<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      res:{

      }
    }
  },
  mounted(){
    //本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // });
    //第二种方式直接看视频
    //3 集成本地mock环境
    this.axios.get('user/login').then((res)=>{
      this.res=res;
    });
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
// @import './assets/sass/button.scss';
// @import './assets/sass/config.scss';


</style>
