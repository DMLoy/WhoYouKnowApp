//Parse related keys
var PARSE_APP = "dNMAQfn5q69yd6a4FFcqrJTD2KzWMc6g5l7yuw1m";
var PARSE_JS = "CsTgWi2APW9B4lZ4tyiXOdCOF49e6YevWmAXCF9d";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);

	NoteObject = Parse.Object.extend("NoteObject");

	function getNotes() {
		var query = new Parse.Query(NoteObject);

		query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				for(var i=0, len=results.length; i<len; i++) {
					var note = results[i];
					s += "<p>";
					s += "<b>"+note.get("title")+"</b><br/>";
					s += "<b>Written "+note.createdAt + "<br/>";
					s += note.get("body");
					s += "</p>";
				}
				$("#notes").html(s);
			},
			error:function(error) {
				alert("Error when getting notes!");
			}
		});
	}

	$("#addNoteBtn").on("click", function(e) {
		e.preventDefault();

		//Grab the note details, no real validation for now
		var title = $("#noteTitle").val();
		var body = $("#noteBody").val();

		var note = new NoteObject();
		note.save({title:title, body:body}, {
			success:function(object) {
				console.log("Saved the object!");
				$("#noteTitle").val("");
				$("#noteBody").val("");
				getNotes();
				alert(title + " " + body +" was sent")
			}, 
			error:function(object,error) {
				console.dir(error);
				alert("Sorry, I couldn't save it.");
			}
		});
	});

	//call getNotes immediately
	getNotes();

});
