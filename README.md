# Express-Note-Taker
### Description
Note Taker app allows the user to write and save notes. This application will use an express backend and save and retrieve note data from a JSON file.

### Link: https://whispering-journey-21303.herokuapp.com/

<img width="500" alt="note taker snip" src="https://user-images.githubusercontent.com/70172286/108811361-fd7c6e80-7561-11eb-9f4c-1a26a475ef37.PNG">


#### The application features the following HTML Routes:

GET Method - Should return the notes.html file.


#### Also features the following API routes:


GET Method - Should read the db.json file and return all saved notes as JSON.

<img width="500" alt="note taker snip 2" src="https://user-images.githubusercontent.com/70172286/108811417-1be26a00-7562-11eb-8ad6-9317d43f44c7.PNG">


POST Method - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


DELETE Method - Should receive a query parameter containing the id of a note to delete. 
