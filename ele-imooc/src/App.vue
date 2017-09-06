<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {urlParse} from 'common/js/util';
  import header from 'components/header/header.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created() {
       var options = {
        url:'../../../static/json/data.json',
        method: 'GET',
        headers: 
           {
               'dataType': 'json'
            }
      };
      // this.$http.get('http://localhost:8088/api/seller?id=' + this.seller.id).then((response) => {
      // response = response.body;
      // this.$http.get('../../../static/json/data.json').then((response) => {
      this.$http(options).then((response) => {
      	console.log(response.body.seller);
        return response.json();
      }).then((jsonres) => {
        var currentData = {};
        currentData.errno = 0;
        currentData.data = jsonres.seller;
        if (currentData.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, currentData.data);
        }
      });
    },
    components: {
      'v-header': header
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
