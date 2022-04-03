const firebaseConfig = {
      apiKey: "AIzaSyDsMY2jXMoEL-TwREMg5w3I6sTSyrczV94",
      authDomain: "kwitter-61335.firebaseapp.com",
      databaseURL: "https://kwitter-61335-default-rtdb.firebaseio.com",
      projectId: "kwitter-61335",
      storageBucket: "kwitter-61335.appspot.com",
      messagingSenderId: "766371504519",
      appId: "1:766371504519:web:9413ec895ec8dcb228f322"
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
function logout() 
{ 
window .location('index.html') ;
}