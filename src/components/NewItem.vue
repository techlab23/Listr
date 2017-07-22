<template>
  <b-navbar variant="primary" fixed="bottom">
    <b-form-input 
          v-model="title" 
          @keyup.enter="create">
    </b-form-input>
  </b-navbar>
</template>
<script>
  export default {
    data(){ 
      return {
         title: '' 
      }
    },
    computed: {
      isValid(){
        return this.title != ''
      }
    },
    methods: {
      create() {
        if (this.isValid) {
          this.$emit('item-created',this.title)
          this.title = ''
        }
      }
    }
  }
</script>