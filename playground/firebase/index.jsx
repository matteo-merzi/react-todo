import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAf72AjXZKs7RBIy4WFJ-31p5f01rxjO4c",
    authDomain: "mead-todo-app-738f7.firebaseapp.com",
    databaseURL: "https://mead-todo-app-738f7.firebaseio.com",
    storageBucket: "mead-todo-app-738f7.appspot.com",
    messagingSenderId: "328690882309"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Matteo',
        age: 31
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Walk the dog'});
todosRef.push({text: 'Play videogames'});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//     text: 'walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

//
// var newNoteRef = notesRef.push();
//
// newNoteRef.set({
//     text: 'walk the dog'
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unabled to fatch value', e);
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('New User value', snapshot.val());
// });
//
// firebaseRef.update({isRunning: false});
// firebaseRef.child('user').update({name: 'Kristen'})
// firebaseRef.child('user').off();
//
// firebaseRef.child('user').update({age: 18})
