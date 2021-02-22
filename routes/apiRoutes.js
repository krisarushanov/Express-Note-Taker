const express = require ("express");
const fs = require('fs');
const path = require('path');
var myNotes = JSON.parse(fs.readFileSync('./db/db.json','utf8'));

module.exports = function(app) {
    app.get('/api/notes', function(req, res) { 
      res.json(myNotes);
    });

//Retrieve note using GET method
app.get("/api/notes", function(req, res) {
    res.json(myNotes[req.params.id]);
  });

 
//Add note using POST method
  app.post("/api/notes", function(req, res) {

    let newNote = req.body;
    if (myNotes.length === 0) newNote.id = '0';
    else {
      // assign new note the id plus one the highest existing id
      newNote.id = (parseInt(notesObj[myNotes.length - 1].id) + 1).toString();
    }
    myNotes.push(newNote);
    //console.log(`Created note with id ${newNote.id}`);
    // update json file
    fs.writeFileSync("./db/db.json", JSON.stringify(myNotes), (err) => {
      if (err) throw (err);    
    }); 
    res.json(myNotes);    
  });
   
};
