// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhoExJwz5h53YXCP8x5Fx9cn5bwyTncTM",
    authDomain: "firstgroupproject-acd1a.firebaseapp.com",
    databaseURL: "https://firstgroupproject-acd1a.firebaseio.com",
    projectId: "firstgroupproject-acd1a",
    storageBucket: "firstgroupproject-acd1a.appspot.com",
    messagingSenderId: "497945108400"
};
    firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('login_check').style.display = "block";
        document.getElementById('login_div').style.display = "none"; 
        var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            // window.location = "login.html"
            document.getElementById('hello_user').innerHTML = "Welcome " + email_id;
            setTimeout(function(){window.location.href='index.html'},5000);
        }
    } else {
        // No user is signed in.
        document.getElementById('login_check').style.display = "none";
        document.getElementById('login_div').style.display = "block"; 
    }
    });

function login () {
    var userEmail = document.getElementById('email').value;
    var userPW = document.getElementById('password').value;
    // alert(userEmail + userPW);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPW).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert('Error: ' + errorMessage);
        // ...
      });
}

function logout () {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}
