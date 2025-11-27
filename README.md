# Attendance Calculator

A simple web app to calculate attendance percentage and determine how many classes you can miss or need to attend to meet a chosen eligibility threshold. The app is built with plain HTML, CSS, and JavaScript and is designed to be lightweight, responsive, and easy to use.

## Features

- Calculate current attendance percentage (rounded to two decimal places)
- Show whether the student is within the eligibility threshold or at risk
- Display how many classes the student can miss without falling below the threshold
- Display how many additional classes the student must attend to reach the threshold
- Clean, minimal design and responsive layout

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)

## Project structure

```
.
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # Logic and calculations
└── README.md       # Documentation
```

## Quick start

1. Clone the repository
   ```bash
   git clone https://github.com/skshareef41319s/CALCULATOR-PROJECT.git
   cd CALCULATOR-PROJECT
   ```

2. Open the project
   - Open `index.html` in your browser (double-click the file or serve it with a static server).

3. Usage
   - Enter the total number of classes and the number of attended classes.
   - Optionally set the eligibility threshold (default 75%).
   - Click the Calculate button to see:
     - Current attendance percentage
     - Whether you are safe or at risk
     - How many classes you can still miss, or how many you need to attend

## Example

Input:
- Total classes: 50
- Attended classes: 40
- Threshold: 75%

Output:
- Current attendance: 80.00%
- Status: Safe
- You can miss 3 more classes before falling below 75%

## Implementation notes and suggestions

- The current example stores no data persistently; it is intended as a local, client-side tool.
- Consider adding input validation to prevent negative or non-numeric entries.
- For a classroom-level tool, add persistence (localStorage or a backend) and bulk input features.
- If this will be used for real academic records, validate edge cases and account for late/partial attendance policies.

## Author

Created by Shareef
