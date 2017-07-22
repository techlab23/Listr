<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="content">
        <Loader></Loader>
        <Auth v-show="!hasCurrentUser && !isLoading" @signInWithGoogle="signInWithGoogle"></Auth>
        <transition name="fade">
          <router-view v-show="hasCurrentUser"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import fbApp from './firebase'
import Navigation from './components/Navigation.vue'
import Auth from './components/Auth.vue'
import Loader from './components/Loader.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  components: { Navigation, Auth, Loader },
  beforeCreate() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'TOAST') {
        //show the toast here 
        //toast(mutation.payload, { className: ['toast-error'] })
      }
    })
  },
  computed: {
    ...mapGetters({
      hasCurrentUser: 'hasCurrentUser',
      isLoading: 'isLoading'
    })
  },
  methods: {
    ...mapActions({
      setUser: 'setUser',
      unSetUser: 'unSetUser',
      fetchTasks: 'fetchTasks',
      loadingOn: 'loadingOn',
      loadingOff: 'loadingOff'
    }),
    signInWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider()
      this.loadingOn()
      // fbApp.auth().signInWithRedirect(provider)
      fbApp.auth().signInWithPopup(provider)
      .then((result) => {
        let user = result.user
        this.setUser(user)
        this.fetchTasks()
        this.loadingOff()
      }) 
    }
  }
}
</script>

<style>
.content {
  padding-top: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
