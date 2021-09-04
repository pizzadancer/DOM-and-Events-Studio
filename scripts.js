// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  console.log("window loaded")
  const takeOffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");

  

  // When the "Take off" button is clicked, the following should happen
  // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
  takeOffButton.addEventListener("click", function(event) {
    let readyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
    // If the shuttle is ready for liftoff, then add parts b-d.
    if (readyForTakeOff) {
      // The flight status should change to "Shuttle in flight."
      document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
      console.log("spaceShuttle in Flight");
      
      // add shuttleFlight movement

      // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
      document.getElementById("shuttleBackground").style.backgroundColor = "blue";
      console.log("shuttleBackground => blue (changed from green)");

      // The shuttle height should increase by 10,000 miles.
      document.getElementById("spaceShuttleHeight").innerHTML = 10000;
      console.log("spaceShuttle @ 10,000 miles");

    } else {
      console.log("Shuttle stalled @ landing pad");
    }
  });
  
  // When the "Land" button is clicked, the following should happen
  // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
  landButton.addEventListener("click", function(event) {
    let landingSequence = window.alert("The shuttle is landing. Landing gear engaged.");
    console.log("Landing gear engaged. landingSequence initiatlized.");

    // The flight status should change to "The shuttle has landed."
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed."; 
    console.log("spaceShuttle has landed.");

    // The background color of the shuttle flight screen should change from blue to green.
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    console.log("shuttleBackground => green (changed from blue)")

    // The shuttle height should go down to 0.
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    console.log("spaceShuttle @ 0 miles");

  })

  // When the "Abort Mission" button is clicked, the following should happen
  // A window confirm should let the user know "Confirm that you want to abort the mission." 
 
  abortButton.addEventListener("click", function(event) {
    let abortMissionConfirmation = window.confirm("Confirm that you want to abort the mission.");

    // If the user wants to abort the mission, then add parts b-d.
    if (abortMissionConfirmation) {
      console.log("abort confirmation accepted");

      // The flight status should change to "Mission aborted."
      document.getElementById("flightStatus").innerHTML = "Mission Aborted";
      console.log("flightStatus => 'mission aborted'");

      // The background color of the shuttle flight screen should change from blue to green.
      document.getElementById("shuttleBackground").style.backgroundColor = "green";
      console.log("shuttleBackground => green (changed from blue)");

      // The shuttle height should go to 0.
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
      console.log("spaceShuttle @ 0 miles");


    } else {
      console.log("abort confirmation denied.");
    }
  })

  // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
  // The rocket image should move 10 px in the direction of the button that was clicked.
  let rocketIMG = document.getElementById("rocket");
  const upButton = document.getElementById("up");
  rocketIMG.style.position = "absolute";
  rocketIMG.style.bottom = "0px"
  rocketIMG.style.left = "0px"
  // upButton.addEventListener("click", function(event) {
    

  //   console.log(rocketIMG)
  // })

}

window.addEventListener("load", init);
