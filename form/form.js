/*3-Make a registration form (you can re-use the registration form you did before) as the following
 (Use HTML 5 new input types and validation attributes): 
  a.	Form fields: 
    ●	Full Name (Required)
    ●	Email (Required, input type: email)
    ●	City (Drop-down list filled with some cities)
    ●	Password
    ●	Repeat password.
    ●	“I accept the terms and conditions” checkbox.
    ●	Register button, which redirects to another page saying: “Thank you, Full Name for registering in our website”.
    Make full name text has default text “Enter your Name:” [use placeholder attribute].*/

/*c.When the user focus in full name text, show blue border for the input (use element.style.border=”solid 1px blue”),*/
var borderText = document.getElementById("usrName")
function chnageColorOnFocus() {
  borderText.style.border = "solid 1px blue"
}

/*and remove the border when the input loses the focus.*/
function inputOnBlur() {
  borderText.style.border = "none"

/*d.	After user finish writing his full name and leaves the text box (lost focus), 
      if the full name wasn't in correct format (not empty string and more than 3 letters),
       show text next to textbox saying “invalid name”, 
       and focus the full name textbox, and select all text on it, 
       else if full name was in correct format hide the text next to textbox.*/

  /*f.	Change the background color of the text input when it’s not valid to: gray,
       and to white when it’s valid (use element.style.backgroundColor).*/
  var nameRegex = /^[a-z]{3,}/
  if (!nameRegex.test(borderText.value)) {
    document.getElementById("error").style.display="inline"
    document.getElementById("error").innerText = "invalid name"
    borderText.focus()
    borderText.select()
    borderText.style.backgroundColor = "gray"
  }

  else {
    document.getElementById("error").style.display = "none"
    borderText.style.backgroundColor = "white"
  }
}

/*e.For Password and repeat password fields, when the user leaves the repeat password field,
 we need to validate that they’re required, and they’re identical (The same), 
 and if they’re not the same show text besides it saying “password and repeat password should be the same”.*/

function checkRepeatedpass() {
  var pass = document.getElementById("Pass").value
  var rePass = document.getElementById("RePass").value
  if (pass == "" || rePass == "") {
    alert("pass and repass is required")
  }

  if (!(pass === rePass)) {
    document.getElementById("passError").style.display = "block"
    document.getElementById("passError").innerText = "password and repeat password should be the same"
  }
  else {
    document.getElementById("passError").style.display = "none"
  }
}



/*g.For the Email, use HTML5 “Required” attribute, and input type email.
      ●	You’ll remark that HTML5 validation will prevent you from submitting the form unless it’s valid, right?
      ●	But for the other custom validation of the name and password & repeat password, 
      will not prevent the form for submitting and you can submit the form even if they’re not valid, why?*/

