import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAf72AjXZKs7RBIy4WFJ-31p5f01rxjO4c",
        authDomain: "mead-todo-app-738f7.firebaseapp.com",
        databaseURL: "https://mead-todo-app-738f7.firebaseio.com",
        storageBucket: "mead-todo-app-738f7.appspot.com",
        messagingSenderId: "328690882309"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
