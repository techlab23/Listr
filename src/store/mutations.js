import Vue from 'vue'
export default {
  SET_USER(state, result) {
    state.user = result
  },
  UNSET_USER(state) {
    state.user = {}
    state.tasks = {}
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks || {}
  },
  ADD_TASK(state, { newItem, key }) {
    Vue.set(state.tasks, key, {
      title: newItem
    }) 
  },
  TOAST(state, message) {
    // state.isLoading = false
    console.log(message) // TODO: log properly (in logger).
  },
  LOADING_ON(state) {
    state.isLoading = true
  },
  LOADING_OFF(state) {
    state.isLoading = false
  }
}