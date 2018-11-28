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
// --------------------------------------------------------------
var database = firebase.database();
var user = firebase.auth().currentUser;

if (user) {
    //user is signed in
    console.log('signed in')

}
else {
    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: 'persistence_check.html',
        signInOptions: [
            //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //   firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.

        // Terms of service url/callback.
        // tosUrl: '<your-tos-url>',
        // tosUrl: '#',
        // Privacy policy url/callback.
        // privacyPolicyUrl: function () {
        //     window.location.assign('<your-privacy-policy-url>');
        // }
        // privacyPolicyUrl: function () {
        //     window.location.assign('#');
        // }

    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

}