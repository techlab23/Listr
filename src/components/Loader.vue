<template>
  <div class="container loader" v-show="isLoading">
    <div class="row">
      <div class="col text-center">
          <img src="/static/img/loader.svg"/>    
          <h4>Loading...</h4>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        isLoading: 'isLoading'
      })
    }
  }
</script>
<style>
  .loader { padding-top: 100px; }
</style>