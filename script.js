// Get references to DOM elements
const calculateButton = document.getElementById("calculate-button");
const attendanceThreshold = document.getElementById("attendance-threshold");
const attendedClassesInput = document.getElementById("attended-classes");
const totalClassesInput = document.getElementById("total-classes");
const outputDiv = document.getElementById("output");
const thresholdValueDiv = document.getElementById("threshold-value");

// Update threshold display
attendanceThreshold.addEventListener("input", () => {
  thresholdValueDiv.textContent = `Required: ${attendanceThreshold.value}%`;
});

// Function to calculate attendance details
calculateButton.addEventListener("click", () => {
  const attendedClasses = parseInt(attendedClassesInput.value);
  const totalClasses = parseInt(totalClassesInput.value);
  const requiredPercentage = parseInt(attendanceThreshold.value);

  // Validate inputs
  if (isNaN(attendedClasses) || isNaN(totalClasses) || attendedClasses < 0 || totalClasses <= 0) {
    showMessage("Enter valid numbers to calculate! 😅");
    return;
  }

  if (attendedClasses > totalClasses) {
    showMessage("Oops! Attended can't exceed total classes! 🚨");
    return;
  }

  // Current attendance percentage
  const currentPercentage = (attendedClasses / totalClasses) * 100;

  // Required attendance logic
  if (currentPercentage >= requiredPercentage) {
    const bunkableClasses = Math.floor((attendedClasses / requiredPercentage) * 100 - totalClasses);
    showMessage(
      `🎉 You’re doing great! You can bunk ${bunkableClasses} more classes! 😉`
    );
  } else {
    const additionalClassesRequired = Math.ceil((requiredPercentage * totalClasses - 100 * attendedClasses) / (100 - requiredPercentage));
    showMessage(
      `🤔 Uh-oh! Attend ${additionalClassesRequired} more classes to stay safe. Don't risk it! 🏫`
    );
  }
});

// Function to show animated message
function showMessage(message) {
  outputDiv.textContent = message;
  outputDiv.classList.remove("show"); // Reset animation
  setTimeout(() => {
    outputDiv.classList.add("show"); // Trigger animation
  }, 50);
}
