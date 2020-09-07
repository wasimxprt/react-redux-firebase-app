import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAL644ST8cToT9xPU7QGseJPwmNSuSHznM",
    authDomain: "ninja-auth-react.firebaseapp.com",
    databaseURL: "https://ninja-auth-react.firebaseio.com",
    projectId: "ninja-auth-react",
    storageBucket: "ninja-auth-react.appspot.com",
    messagingSenderId: "959478274159",
    appId: "1:959478274159:web:51e4039cb888f65ebbd59a",
    measurementId: "G-4QB6WLQ3CV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.analytics()


export default firebase;