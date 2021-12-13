# scavenger-webapp
Simple Virtual Scavenger Hunt implemented as a React Single page Application protecting each step with a password.

**Planned functionality:**
 - Display an Introduction
 - Shows initial scavenger hunt step (image and clues and a password prompt)
 - Entering the correct password will transition into the next step
 
 **Other Planned functionality:**
  - Script execution will automatically populate password and contents into backend
 - Pulls step information from a Mongo Database
 - Validates against password before pulling next scavenger hunt step

# dependencies
 - express.js as web server
 - react for front end
	 - react-spring (for animations to look nicer)
	 - tailwind-css (UI)
 - (mongoose) MongoDB for content storage
 - redis for password look up (using remote redis instance for experiementation, but local always works too)
 - dotenv (for configuring credential parameters)

# .dotenv file

    # Content Connection String (MongoDB)
    MONGO_DB=YOUR_CONNECTION_STRING
    
    # Password Connection String (Redis)
    REDIS_DB=YOUR_CONNECTION_STRING
