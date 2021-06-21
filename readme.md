
/client/src/App.js
Handles the user input. The input can include non-alphabetical characters but will only return a-zA-Z characters.
On submit a POST request is made to an express.js backend API with a route of /test including a request object of { "string_to_cut": "user input example" }.
The return json object is displayed.

server/routes/test.js
This file handles the logic and acts as the controller when the POST is recieved. The request body contains one argument , string_to_cut, which is a string. The string is then condensed with a regular expression to only letters of the alphabet. The new condensed string is then looped over to extract every third character before being sent back to the client as a json object { return_string: "new_condensed_and_cut_string" }


Here is a working demo:
https://cut-string-c9a20c.netlify.app/


Heroku was used to delpoy server.
Netlify was used to deploy client.
