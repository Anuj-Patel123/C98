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
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

          localStorage.setItem("room_name", room_name);

          window.location = "cool-page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room name - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "cool-page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}
