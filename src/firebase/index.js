import firebase from 'firebase'

// Initialize Firebase
// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: 'AIzaSyAfIlJ1I4VDdKt6PbTFElQPYHQMQrWQXos',
  authDomain: 'listr-11811.firebaseapp.com',
  databaseURL: 'https://listr-11811.firebaseio.com',
  projectId: 'listr-11811',
  storageBucket: 'listr-11811.appspot.com',
  messagingSenderId: '11323037961'
}

const fbApp = firebase.initializeApp(config)

export default fbApp