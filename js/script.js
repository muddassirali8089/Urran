
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
 
  // Add event listeners to all navbar links to collapse the navbar on click
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(navLink) {
    navLink.addEventListener('click', function() {
        var navbarCollapse = document.getElementById('navbarNav');
        
        // Check if the navbar is currently visible (not collapsed)
        if (window.getComputedStyle(navbarCollapse).display === 'block') {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide(); // Collapse the navbar
        }
    });
});



function incrementCounter(element, targetValue, showPlusSign) {
  let currentCount = 0;
  const increment = targetValue / 100; // Adjust the increment speed as needed

  function updateCounter() {
      if (currentCount < targetValue) {
          currentCount += increment;
          element.textContent = currentCount.toFixed(); // Round to an integer
          if (showPlusSign && currentCount >= targetValue) {
              element.textContent = `${targetValue}+`; // Add the plus sign only if showPlusSign is true and after reaching the target value
          }
          requestAnimationFrame(updateCounter);
      } else {
          if (showPlusSign) {
              element.textContent = `${targetValue}+`; // Ensure it shows the plus sign only if showPlusSign is true
          } else {
              element.textContent = targetValue; // Otherwise, don't show the plus sign
          }
      }
  }

  updateCounter();
}

// Detect when the user scrolls to the section and start counting
window.addEventListener("scroll", function () {
  const section = document.querySelector(".trainig_cnt");
  const sectionTop = section.getBoundingClientRect().top;

  // You can adjust this value to trigger the counting at a different scroll position
  if (sectionTop <= window.innerHeight * 0.75) {
      const weeksCounter = document.querySelector(".weeks h1");
      const digitalSkillCounter = document.querySelector(".digitalSkill h1");
      const individualsTrainCounter = document.querySelector(".individualsTrain h1");

      incrementCounter(weeksCounter, 8, false); // "false" means no plus sign for weeks
      incrementCounter(digitalSkillCounter, 11, false); // "false" means no plus sign for digitalSkill
      incrementCounter(individualsTrainCounter, 1500, true); // "true" means a plus sign for individualsTrain
      
      // Remove the scroll event listener to prevent repeated counting
      window.removeEventListener("scroll", arguments.callee);
  }
});





