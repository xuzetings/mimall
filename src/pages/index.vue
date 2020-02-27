<template>
  <div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "index",
  components: {
    ServiceBar
  }
};
</script>
<style lang="scss">
@import "./../assets/sass/mixin";
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  li {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>