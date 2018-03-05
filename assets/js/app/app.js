

var trainName = "";
var trainDest = "";
var trainFreq = "";
var trainFirst = "";

$("#add-train-btn").on("click", addTrain);

// $("#add-train-btn").on("click", function (add) {
//     // <a href="add-train.html"></a>;
//     addTrain()

// });

function updateTimes() {
    // Store everything into a variable.
    trainName = childSnapshot.val().name;
    trainDest = childSnapshot.val().dest;
    trainFreq = childSnapshot.val().freq;
    trainFirst = childSnapshot.val().first;
    // var trainMinsNext = childSnapshot.val().mins;

    // var trainStartTime = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");

    var firstTimeConverted = moment(trainFirst, "HH:mm").subtract(1, "years");
    console.log("first time: " + firstTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFreq - tRemainder;
    var trainMinsNext = tMinutesTillTrain;
    console.log("MINUTES TILL TRAIN: " + trainMinsNext);

    var tNext = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(tNext).format("HH:mm"));

    var trainNext = moment(tNext).format("HH:mm");
    console.log(trainNext);
    // var trainStartTime = moment($("#start-input"), "HH:mm").subtract(1, "years");

    console.log("train name: " + trainName);
    console.log("train dest: " + trainDest);
    console.log("train freq: " + trainFreq);
    console.log("train first: " + trainFirst);

};