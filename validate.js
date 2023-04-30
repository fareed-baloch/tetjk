/*Script to validate feedback form*/

function validateForm(event) {
  /*Check name*/

  event.preventDefault();

  var radio1 = document.getElementById("title1");
  var radio2 = document.getElementById("title2");
  var radio3 = document.getElementById("title3");
  var radio4 = document.getElementById("title4");

  if (
    radio1.checked === false &&
    radio2.checked === false &&
    radio3.checked === false &&
    radio4.checked === false
  ) {
    alert("Please select a title.");
    return false;
  }
  //Check whether the first name field is empty
  var FirstName = document.getElementById("FIRSTNAME");
  var LASTNAME = document.getElementById("LASTNAME");

  if (FirstName.value === "") {
    alert("Please enter your first name.");
    document.feedback.FIRSTNAME.focus();
    return false;
  }

  //Check whether the first name is greater than 2 characters long
  if (FirstName.value.length <= 2) {
    alert("First Name should be greater than 2 characters long.");
    FirstName.focus();
    return false;
  }

  //Check whether the first name contains numeric values or special characters
  var matches = !/[^a-zA-Z]/.test(FirstName.value);
  if (matches === false) {
    alert("First name can only contain letters.");
    return false;
  }

  //Check whether the last name field is empty
  if (LASTNAME.value === "") {
    alert("Please enter your last name.");
    LASTNAME.focus();
    return false;
  }

  //Check whether the last name is greater than 2 characters long
  if (LASTNAME.value.length <= 2) {
    alert("Last name should be greater than 2 characters long.");
    LASTNAME.focus();
    return false;
  }

  //Check whether the last name contains numeric values or special characters
  var LastName = !/[^a-zA-Z]/.test(LASTNAME.value);
  if (LastName === false) {
    alert("Last name can only contain letters.");
    return false;
  }

  //Check whether the email value is valid
  var Email = document.getElementById("EMAIL");
  var re = /\S+@\S+\.\S+/;
  var EmailType = re.test(Email.value);
  if (EmailType === false) {
    alert("Please enter your email in correct format.");
    return false;
  }

  var Query = document.getElementById("QUERY");
  if (Query.value === "Select") {
    alert("Please select one of the options in query.");
    return false;
  }

  var Brent = document.getElementById("BRENT").checked;
  var Camden = document.getElementById("CAMDEN").checked;
  var Barnet = document.getElementById("BARNET").checked;

  //Check whether checkboxes are empty
  if (Brent === false && Camden === false && Barnet === false) {
    alert("Please select location of interest.");
    return false;
  }

  //Check whether message field is empty
  var messageQuery = document.getElementById("QUERYMESSAGE");
  if (messageQuery.value === "") {
    alert("Message field cannot be empty.");
    messageQuery.style.border = "2px solid red";
    return false;
  } else {
  }

  //Check whether message is less than 30 characters long
  if (messageQuery.value.length < 30) {
    alert("Message cannot be less than 30 characters long.");
    return false;
  } else {
  }

  alert("Your form has been submitted successfully.");

  window.location.href =
    "mailto:40141051@hcuc.ac.uk?subject=" +
    "Query " +
    Query.value +
    "&body=" +
    messageQuery.value;

  return true;
}

//Slideshow functions
//let slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
//showSlides((slideIndex += n));
//}

//function currentSlide(n) {
//showSlides((slideIndex = n));
//}

//function showSlides(n) {
//let i;
//let slides = document.getElementsByClassName("mySlides");
//let dots = document.getElementsByClassName("dot");
//if (n > slides.length) {
//slideIndex = 1;
//}
//if (n < 1) {
//slideIndex = slides.length;
//}
//for (i = 0; i < slides.length; i++) {
//slides[i].style.display = "none";
//}
//for (i = 0; i < dots.length; i++) {
//dots[i].className = dots[i].className.replace(" active", "");
//}
//slides[slideIndex - 1].style.display = "block";
//dots[slideIndex - 1].className += " active";
//}

var slideIndex = [1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
