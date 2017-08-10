<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ num }}</h1>
  </div>
</template>
<script>
import store from '../common/store';
export default {
  data () {
    return {
      msg: 'page1'
    }
  },
  computed:{
      num() { return store.state.count;}
  }
}
</script>
