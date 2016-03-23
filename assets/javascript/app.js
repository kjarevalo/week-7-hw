// 1. Link to Firebase
var trainData = new Firebase("https://traintimechoochoo.firebaseio.com/");
​
// 2. Button for adding Employees
$("#addTrainBtn").on("click", function(){
​
    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var trainDestination = $("#trainDestinationInput").val().trim();
    var trainFrequency = moment($("#trainFrequencyInput").val().trim(), "DD/MM/YY").format("X");
    var trainNextarrival = $("#trainNextarrivalInput").val().trim();
​
    // Creates local "temporary" object for holding train data
    var newtrain = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        next arrival: trainNextarrival
    }
​
    // Uploads employee data to the database
    trainData.push(newtrain);
​
    // Logs everything to console
    console.log(newtrain.name);
    console.log(newtrain.destination); 
    console.log(newtrain.frequency);
    console.log(newtrain.arrival);
​
    // Alert
    alert("Train successfully added");
​
    // Clears all of the text-boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#frequencyInput").val("");
    $("#NextarrivalInput").val("");
​
    // Prevents moving to new page
    return false;
});
​
​
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){
​
    console.log(childSnapshot.val());
​
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().Destination;
    var trainFrequency = childSnapshot.val().Frequency;
    var trainNextarrival = childSnapshot.val().Nextarrival;
​
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(trainNextarrival);
​
    // Prettify the employee start
    var trainStartPretty = moment.unix(empStart).format("MM/DD/YY");
    // Calculate the months worked using hardconre math
    // To calculate the months worked 
    var trainMonths = moment().diff(moment.unix(empStart, 'X'), "months");
    console.log(empMonths);
​
    // Calculate the total billed rate
    var empBilled = empMonths * empRate;
    console.log(empBilled);
​
    // Add each train's data into the table 
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
​
});
​