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