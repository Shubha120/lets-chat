var firebaseConfig = {
    apiKey: "AIzaSyAsURjY7Ahgrh5zte-lRclaGZBjmkPHnss",
    authDomain: "kwitter-2-553aa.firebaseapp.com",
    projectId: "kwitter-2-553aa",
    storageBucket: "kwitter-2-553aa.appspot.com",
    messagingSenderId: "388849809704",
    appId: "1:388849809704:web:adfe177ad42d9aad2d781d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();