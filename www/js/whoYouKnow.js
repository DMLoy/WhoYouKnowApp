//Parse related keys
var PARSE_APP = "dNMAQfn5q69yd6a4FFcqrJTD2KzWMc6g5l7yuw1m";
var PARSE_JS = "CsTgWi2APW9B4lZ4tyiXOdCOF49e6YevWmAXCF9d";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);

	Contact = Parse.Object.extend("Contact");
	
	
//	$("#contactBtn").on("click", function(e) {
//		e.preventDefault();
//		getNotes()
//	});
	
	function logIn(email,pwd) {
		Parse.User.logIn(email, pwd, {
			success: function(user) {
			alert("Successful Login!")

			},
			error: function(user, error) {
			
			}
		});
	}	
	
	function setLocalCred(email,pwd) {
		window.localStorage.setItem("WYKusername", email);
		window.localStorage.setItem("WYKpwd", pwd);
	}
	
	function getLocalCred() {
		var email = window.localStorage.getItem("WYKusername");
		var pwd  = window.localStorage.getItem("WYKpwd");
		
		logIn(email,pwd)
	}
	//getNotes();
	
	function getContacts() {
		var user = Parse.User.current();
		// Make a new post
		var Contact = Parse.Object.extend("Contact");
				 
		// Find all posts by the current user
		var query = new Parse.Query(Contact);
		query.equalTo("user", user);
		query.find({
		  success: function(userContact) {
			console.dir(userContact);
			var s = "<div class='row'>";
			
			for(var i=0, len=userContact.length; i<len; i++) {
				var contact = userContact[i];
				s += "<div class='col-xs-12 col-md-4' id='contactG'><p>";
				s += "<b>"+contact.get("fName")+contact.get("lName")+":</b><br/>";
				s += "<b>Phone: "+contact.get("phone") + "<br/>";
				s += "<b>Email: "+contact.get("ConEmails") + "<br/>";
				s += "</p></div>";
			}
			s += "</div></div>";
		$("#notes").html(s);
		    // userPosts contains all of the posts by the current user.
		  }
		});
	}
	
	
	
	var currentUser = Parse.User.current();
	if (currentUser) {
		getContacts()
	} else {
	    getLocalCred()
	}
	

});
