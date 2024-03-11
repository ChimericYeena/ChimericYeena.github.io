document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("showButton");

  if (button === null) {
    console.error("Could not find required button");
    return;
  }

  button.addEventListener("click", function() {
    // Get the parent container of the clicked button
    const parentContainer = button.parentElement;

    // Find all elements within the parent container
    const childElements = parentContainer.querySelectorAll("*");

    // Toggle visibility based on current state
    childElements.forEach(element => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  });
});
