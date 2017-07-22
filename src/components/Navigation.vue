<template>
   <b-navbar toggleable type="inverse" fixed="top" variant="primary">
       <b-link class="navbar-brand" to="#">
          <span>Listr</span>
       </b-link>
        <b-nav is-nav-bar>
            <b-nav-form v-show="hasCurrentUser" right>
              <b-button size="sm" @click.prevent="signOut">Sign out</b-button>
            </b-nav-form>
        </b-nav>
    </b-navbar>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default { 
    computed: {
      ...mapGetters({
        hasCurrentUser: 'hasCurrentUser'
      })
    },
    methods: {
      ...mapActions({
        signOut : 'signOut'
      })
    }
  }
</script>
<style>
</style>