import fbApp from '../firebase'
const db = fbApp.database()
export default {
  setUser({commit, state},user) {
    commit('SET_USER',user) 
  },
  unSetUser({commit,state}) {
    commit('UNSET_USER')
  },
  fetchTasks({commit, state}){
    db.ref(`tasks/${state.user.uid}`).once('value')
      .then(snapshot => commit('SET_TASKS', snapshot.val()), () => commit('TOAST', 'Failed to retrieve tasks'))
  },
  addTask({ commit, state }, newItem) {
    const newRef = db.ref(`tasks/${state.user.uid}`).push({
      title: newItem
    })
    newRef.then(commit('ADD_TASK', { newItem, key: newRef.key }), () => commit('TOAST', 'Failed to add task'))
  },
  signOut({ commit }) {
    fbApp.auth().signOut()
      .then(commit('UNSET_USER'), () => commit('TOAST', 'Failed to sign out'))
  },
  loadingOn({commit}) {
    commit('LOADING_ON')
  },
  loadingOff({commit}) {
    commit('LOADING_OFF')
  }
}