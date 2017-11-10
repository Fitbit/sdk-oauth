import document from "document";
import * as messaging from "messaging";

let myImage = document.getElementById("myImage");

// Message is received from companion
messaging.peerSocket.onmessage = evt => {
  // Am I Tired?
  if (evt.data.totalMinutesAsleep >= 300) {
    // Had at least 5 hours sleep
    myImage.href = "images/awake.jpg";
  } else {
    // Had less than 5 hours sleep
    myImage.href = "images/sleepy.jpg";
  }
};
