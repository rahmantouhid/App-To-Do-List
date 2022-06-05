var firebaseConfig = {
    apiKey: "AIzaSyBTggzOrK-THsrNrqTFpVwHivJTo-dqo2M",
    authDomain: "to-do-list-live-5b261.firebaseapp.com",
    projectId: "to-do-list-live-5b261",
    storageBucket: "to-do-list-live-5b261.appspot.com",
    messagingSenderId: "1067204301798",
    appId: "1:1067204301798:web:b14b32990f5628e7063c27",
    measurementId: "G-CZK4CRKX9T"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();