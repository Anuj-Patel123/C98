// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLuntheOF__W8tUnUgs4BnfZiWwdpub48",
    authDomain: "the-cool-company-b8908.firebaseapp.com",
    databaseURL: "https://the-cool-company-b8908-default-rtdb.firebaseio.com",
    projectId: "the-cool-company-b8908",
    storageBucket: "the-cool-company-b8908.appspot.com",
    messagingSenderId: "283417422065",
    appId: "1:283417422065:web:b1436aacb622e8f1d06150"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

        window.location = "kwitter_room.html";
}