import _ from 'underscore'
export default {
  currentUser: state => state.user,
  hasCurrentUser: state => !_.isEmpty(state.user),
  allTasks: state => state.tasks,
  isLoading: state => state.isLoading,
}