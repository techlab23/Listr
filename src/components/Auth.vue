<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <b-card header="Login with Google" class="mb-2">
           <b-button size="sm" variant="primary" @click.prevent="signInWithGoogle">Google</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      signInWithGoogle(){
        this.$emit('signInWithGoogle')
      }
    }
  }
</script>
<style>
div.container {
  margin-top:70px;
}
  
</style>
