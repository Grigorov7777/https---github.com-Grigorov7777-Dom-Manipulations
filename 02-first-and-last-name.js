function getFormvalue() {
  var firstName = document.getElementById("form1").elements.namedItem("fname").value;
  var lastName = document.getElementById("form1").elements.namedItem("lname").value;
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
