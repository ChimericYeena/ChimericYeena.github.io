document.addEventListener("DOMContentLoaded", function() {
  const hiddenElement = document.getElementById("hiddenElement");
  const button = document.getElementById("showButton");

  if (hiddenElement === null || button === null) {
    console.error("Could not find required elements");
    return;
  }

  let isHidden = true; // Keep track of the current visibility state

  button.addEventListener("click", function() {
    // Toggle visibility based on current state
    isHidden = !isHidden;

    if (isHidden) {
      hiddenElement.classList.add("hidden");
    } else {
      hiddenElement.classList.remove("hidden");
    }
  });
});
