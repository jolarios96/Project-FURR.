// firebase initialization
var config = {
    apiKey: "AIzaSyDzixpXHU87uZ_gbAfy6YP3btwUVek9rWw",
    authDomain: "project-furr.firebaseapp.com",
    databaseURL: "https://project-furr.firebaseio.com",
    projectId: "project-furr",
    storageBucket: "project-furr.appspot.com",
    messagingSenderId: "654872510123"
};
firebase.initializeApp(config);

// database reference
var storage = firebase.storage();

// On click approve
$("#").on("click", function (event) {
    // event.preventDefault();

    // add Animal to Array of 'Favorites' in firebase
    // add Animal to Array of 'Seen' in firebase
});

// On click disapprove
$("#").on("click", function (event) {
    // event.preventDefault();

    // add Animal to Array of 'Seen' in firebase
});

// alternative click function
$("#").on("click", "#id or .class of child element", function (event) {
    // event.preventDefault();
});