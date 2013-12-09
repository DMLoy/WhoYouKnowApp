//Parse related keys
var PARSE_APP = "dNMAQfn5q69yd6a4FFcqrJTD2KzWMc6g5l7yuw1m";
var PARSE_JS = "CsTgWi2APW9B4lZ4tyiXOdCOF49e6YevWmAXCF9d";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);
	
        
        $("#addContactBtn").on("click", function(e) {
            e.preventDefault();
            var user = Parse.User.current();
            
            // Make a new Contact
            var Contact = Parse.Object.extend("Contact");
            var contact = new Contact();
            
            var fName = $("#fName").val();
	    var lName = $("#lName").val();
            var phone = $("#phone").val();
            var ConEmails = $("#ConEmails").val();
            
            contact.set("fName", fName);    
            contact.set("lName", lName);
            contact.set("phone", phone);
            contact.set("ConEmails", ConEmails);
            contact.set("user",user);
            contact.save(null, {
              success: function(post) {               
                $("#fName").val("");
		$("#lName").val("");
                $("#phone").val("");
                $("#ConEmails").val("");
               // Find all posts by the current user
                }
            })
          
	});
	
	
	function setLocalCred(email,pwd) {
		window.localStorage.setItem("WYKusername", email);
		window.localStorage.setItem("WYKpwd", pwd);
	}
	//getNotes();
	//getLocalCred();

});