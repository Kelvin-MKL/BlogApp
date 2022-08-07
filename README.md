# BlogApp

This is a showcase of implementation of a full stack application following MERN where the data is stored in a localhost database
(Data could be saved on a cluster on the cloud server, which needs a simple replacement in the .env file).
This blog is implemented with user login system with jwt user authentication.
The token is stored on localstorage for demonstration purpose, it might require third party authentication for security reasons.

# Features

Unregistered users can only view public articles where all articles can be seen on this page.
In order to post/edit an article, users have to register/login.
Users are only able to edit/delete their own articles.

# Scripts available

In the back-end directory, you can run `npm install all -g` to install the dependencies requied.
Then run `nodemon server` to start the server script.

In the font-end directory, run `npm install all -g` to install the dependencies needed on the font-end side.
Then run `npm start` to start the development browser.

# Limitions

Since this is mainly a showcase of using jwt, folder structing maybe a bit messy that components on the font-end could have been organised better
in terms of the level of abstraction. Back-end side has the same issue that the server file could have been split into a separate authServer file as well as
having multiple middleware files handling different outcomes, such as errors and validations.
