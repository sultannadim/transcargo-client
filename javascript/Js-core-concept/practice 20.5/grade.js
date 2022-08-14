function grade(marks) {
  if (marks >= 80) {
    return "Grade is A+";
  } else if (marks >= 70 && marks < 80) {
    return "Grade is A";
  } else if (marks >= 60 && marks < 70) {
    return "Grade is A-";
  } else if (marks >= 50 && marks < 60) {
    return "Grade is B+";
  } else if (marks >= 40 && marks < 50) {
    return "Grade is B";
  } else if (marks >= 33 && marks < 40) {
    return "Grade is C";
  } else {
    return "Grade is F";
  }
}
const showGrade = grade(80);
console.log(showGrade);
