//Parse related keys
var PARSE_APP = "dNMAQfn5q69yd6a4FFcqrJTD2KzWMc6g5l7yuw1m";
var PARSE_JS = "CsTgWi2APW9B4lZ4tyiXOdCOF49e6YevWmAXCF9d";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);
	
	$("#signUpBtn").on("click", function(e) {
		e.preventDefault(); 

		//Grab the note details, no real validation for now
		var email = $("#email").val();
		var pwd = $("#pwd").val();
		alert(email + pwd)
		var user = new Parse.User();
		user.set("username", email);
		user.set("password", pwd);
		user.set("email", email);
		// other fields can be set just like with Parse.Object
		user.signUp(null, {
		  success: function(user) {
			alert("Signup Successful!");
			console.log("Saved the object!");
			$("#email").val("");
			$("#pwd").val("");
			setLocalCred(email,pwd);
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});	//code
	});
	
	$("#signInBtn").on("click", function(e) {
		e.preventDefault(); 
		//Grab the note details, no real validation for now
		var email = $("#email").val();
		var pwd = $("#pwd").val();
		logIn(email,pwd)
	});
	
	function logIn(email,pwd) {
		Parse.User.logIn(email, pwd, {
			success: function(user) {
                            alert("Login worked!")
                            $("#email").val("");
                            $("#pwd").val("");
			},
			error: function(user, error) {
                            alert("Somethin's up.")
			}
		});
	}	
	
	function setLocalCred(email,pwd) {
		window.localStorage.setItem("WYKusername", email);
		window.localStorage.setItem("WYKpwd", pwd);
	}
	//getNotes();
	//getLocalCred();

});