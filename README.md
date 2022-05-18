#GameNight CPS493 Project

GameNight is an in-progress Social Media app that is meant to get people together who just want to have a board game night. While this project is not complete i have plans to have it fully functioning with expnsions by the end of the summer. The idea of the app includes having registered users within a cerain distance of each other be able to find each other to host board game nights. Users set up their profile with the games they have and the games they want to play and the site is meant to give the option to pick those nearby to play with, create a lobby to chat with each other to prepare for the game night.

Future plans besides completing the originaly intended functions of the website include implementing a new section for-pickup games of sports, implementing the chat room lobby with socket.io, implement location services so that people within a range can be found.

#This app is built with the following:
HTML
Node.js
JavaScript
CSS
Express
MySQL server

Installing involves the following after having Node.js installed
- npm init
- npm install express
- npm install nodemon --save-dev
- npm install mysql2
- if using VSCode, open up the index.html file and run the live server extension
- npm run dev

Current issues include inability issues with running npm run dev and the module for db_connect not being found. Chat room is incomplete as well as the CSS for the events page

#ER Model

![alt text](https://imgur.com/a/cMyRgex)
