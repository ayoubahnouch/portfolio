// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
$(document).ready(function() {
  // When the form is submitted
  $("#form").submit(function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform simple client-side validation
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // If all fields are filled, send the data to the server
    $.ajax({
      url: "your-server-endpoint-url", // Replace with your actual server endpoint
      method: "POST",
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(response) {
        // Handle success, e.g., show a thank you message
        alert("Message sent successfully!");
      },
      error: function(error) {
        // Handle error, e.g., show an error message
        alert("An error occurred. Please try again later.");
      }
    });
  });
});