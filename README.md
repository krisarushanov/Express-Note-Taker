# Express-Note-Taker
### Description
Note Taker app allows the user to write and save toes. This application will use an express backend and save and retrieve note data from a JSON file.

### Link: https://whispering-journey-21303.herokuapp.com/

<img width="500" alt="note taker snip" src="https://user-images.githubusercontent.com/70172286/108811361-fd7c6e80-7561-11eb-9f4c-1a26a475ef37.PNG">


The application features the following:

#### GET /notes - Should return the notes.html file.


#### GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.


The following API routes should be created:


#### GET /api/notes - Should read the db.json file and return all saved notes as JSON.

<img width="500" alt="note taker snip 2" src="https://user-images.githubusercontent.com/70172286/108811417-1be26a00-7562-11eb-8ad6-9317d43f44c7.PNG">


#### POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


#### DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
