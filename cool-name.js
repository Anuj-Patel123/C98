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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function home(){
      window.location = "cool-page.html";
}