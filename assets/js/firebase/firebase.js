// Initialize Firebase

var config = {
  apiKey: "AIzaSyB1GJt6R1I5CELlsBXWifJoHL7o4EcIq7Y",
  authDomain: "train-activity-91d44.firebaseapp.com",
  databaseURL: "https://train-activity-91d44.firebaseio.com",
  projectId: "train-activity-91d44",
  storageBucket: "train-activity-91d44.appspot.com",
  messagingSenderId: "297040456616"
};
firebase.initializeApp(config);

var database = firebase.database();

function addTrain() {

  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#dest-input").val().trim();
  var firstTime = $("#start-input").val().trim();
  var trainFreq = $("#freq-input").val().trim();

  var newTrain = {
    name: trainName,
    dest: trainDest,
    freq: trainFreq,
    first: firstTime
    // mins: trainMinsNext
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.dest);
  // console.log(newTrain.next);
  console.log(newTrain.freq);
  // console.log(newTrain.mins);
  console.log("==============");

  $("#train-name-input").val("");
  $("#dest-input").val("");
  $("#start-input").val("");
  $("#freq-input").val("");

};

// database.ref().on("child_added", function(childSnapshot, prevChildKey) {

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  updateTimes();

  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
    trainFreq + "</td><td>" + trainNext + "</td><td>" + trainMinsNext + "</td>");
});

