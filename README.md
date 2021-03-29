## Frontend challenge task

For this challenge task, you will be required to implement a basic sign-in page, roughly following the design language demonstrated in the screenshots under `./designs/`. This task should take an hour or two, and preferably is done in Modern React, but any frontend framework or language is accepted. You will be interfacing with our test sign in API call, and relaying the results of the sign in call. 

### Steps
* Fork this repo to your own github account, as a private repo
* Implement the sign-in and basic results page
* Share your forked respository with our team

### Frontend pages
* **Sign-in page**, this should allow for input of a username and password field, as well as a submit/ next button
* **Results view page**, which just has to relay the response received from the server - HTTP status code, and the JSON response

### The sign in API
**URL**: `POST` @ `https://idu-test.datazoo.com/api/v2/auth/sign_in`  
**Body**: `{ "username": "{value}", "password": "{value}"}`  
**Response**: error messages can be found out by running the above, but a successful sign in returns `{"message": "Logged in!", "sessionToken": "{value}"}`

### What we are looking for
* Correctly implement the sign in page, while conforming to the provided design document
* Familiarity with HTTP/ JSON APIs, as demonstrated by the above call
* Front end skills and a feel for design and UX