
// ERROR IDENTIFICATION

// Error 1 (grade.js, Line 5): Assignment operator = changed to comparison operator ===.
// Error 2 (grade.js, Line 9): isNan changed to isNaN.
// Error 3 (grade.js, Line 14): && changed to ||.
// Error 4 (grade.js, Line 28): getElementByID changed to getElementById.
// Error 5 (grade.js, Line 30): colour changed to color.
// Error 6 (grade.html, Line 17): showtable() changed to showTable().
// Error 7 (grade.js, Line 38): Loop starts at 1 instead of 0.
// Error 8 (grade.js, Line 42): innerHtml changed to innerHTML.
// Error 9 (grade.html, Line 19): grades.js changed to grade.js.
// Error 10 (grade.html, Line 9): Missing return statement in onsubmit.

// CHECK STUDENT MARK

function checkMark() {

    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = Number(mark);

    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("checkDate").innerHTML =
        "Checked on: " + new Date();

    return false;
}

// RANDOM MARK FUNCTION

function randomMark() {
    let random = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = random;
}

// SHOW GRADE TABLE

function showTable() {

    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML = "<table>";
    tableHTML += "<tr><th>Grade</th><th>Mark Range</th></tr>";

    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] + "</td></tr>";

    }

    tableHTML += "</table>";

    document.getElementById("tableContainer").innerHTML = tableHTML;
}
