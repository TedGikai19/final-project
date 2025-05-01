document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const button = document.getElementById("btn");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for contacting us! We'll get back to you shortly.");
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("mouseover", function () {
        link.style.color = "#ff7e5f"; 
        link.style.fontWeight = "bold"; 
      });
  
      link.addEventListener("mouseout", function () {
        link.style.color = ""; 
        link.style.fontWeight = ""; 
      });
    });
  });
  
  