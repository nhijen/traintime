  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXbVZnjOTHkSxkaB5ni4BM5T-xp8ghizQ",
    authDomain: "firstproject-1a761.firebaseapp.com",
    databaseURL: "https://firstproject-1a761.firebaseio.com",
    projectId: "firstproject-1a761",
    storageBucket: "firstproject-1a761.appspot.com",
    messagingSenderId: "1003282022340"
  };
  firebase.initializeApp(config);




// document.querySelector('#trainTimeList').addEventListener
// ('click', e => {
//     db.collection('submission').limit(2).orderby('comments').get()      .limit(2) & .orderby.where(name,==,Train Name)
//     .then(({ docs })) => {
//         docs.forEach(doc => console.log(doc.data()))
//     }
// .catch(e => console.error(e))
// })


db.collection('TrainTime').doc(document.querySelector
('trainName').value).set({   
Destination: document.querySelector ('#destination').value = "Alaska"
Frequency: document.querySelector ('#frequency').value = "30 Minutes"
NextArrival: document.querySelector ('#nextArrival').value = "1:30 Pm"
MinutesAway: document.querySelector ('#minutesAway').value = "15 Minutes"

})