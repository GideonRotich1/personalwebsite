let About = document.getElementById("about");
let Experience = document.getElementById("experience");
let interests = document.getElementById("Interests");
let awards= document.getElementById("awards");

function onClick(message) {
    alert(message);
  }
  
  About.addEventListener("click", function() {
    onClick("Age: 23, Occupation: Freelancer Software Developer.");
  });
  
  Experience.addEventListener("click", function() {
    onClick("Network Engineer, Analyst.");
  });
  
  interests.addEventListener("click", function() {
    onClick("Cooking, Football, Driving, Outdoor Events.");
  });
  
  awards.addEventListener("click", function() {
    onClick("BSc Maths and Computer Science.");
  });



















