const calculateButton = document.getElementById("calculate-button");
const attendanceThreshold = document.getElementById("attendance-threshold");
const attendedClassesInput = document.getElementById("attended-classes");
const totalClassesInput = document.getElementById("total-classes");
const outputDiv = document.getElementById("output");
const thresholdValueDiv = document.getElementById("threshold-value");


attendanceThreshold.addEventListener("input", () => {
  thresholdValueDiv.textContent = `🎯 Goal: ${attendanceThreshold.value}%`;
});

// Calculate Attendance
calculateButton.addEventListener("click", () => {
  const attended = parseFloat(attendedClassesInput.value);
  const total = parseFloat(totalClassesInput.value);
  const required = parseInt(attendanceThreshold.value);

  // Validation
  if (isNaN(attended) || isNaN(total) || attended < 0 || total <= 0) {
    showMessage("❌ Please enter valid numbers.");
    return;
  }
  if (attended > total) {
    showMessage("🚨 Attended > Total not possible!");
    return;
  }

  // % calculation
  const current = ((attended / total) * 100).toFixed(2);

  // Attendance Status
  let statusMessage = "";
  if (current >= required) {
    const maxMissable = Math.floor(
      (100 * attended - required * total) / required
    );
    statusMessage = `🌟 You're safe, no worries!<br>
      You can still miss <strong>${maxMissable}</strong> class${
      maxMissable !== 1 ? "es" : ""
    }.`;
  } else {
    const need = Math.ceil(
      (required * total - 100 * attended) / (100 - required)
    );
    statusMessage = `🚀 Almost there!<br>
      Attend <strong>${need}</strong> more class${
      need !== 1 ? "es" : ""
    } to hit your goal.`;
  }

//   Display current Attendance
  showMessage(
    `📊 Current Attendance: <strong>${current}%</strong><br><br>${statusMessage}`
  );
});

// Show Message
function showMessage(message) {
  outputDiv.innerHTML = message;
  outputDiv.classList.remove("show");
  setTimeout(() => outputDiv.classList.add("show"), 50);
}
