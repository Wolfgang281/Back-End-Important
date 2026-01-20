//! $ npm i express express-session passport passport-google-oauth20
//? express --> framework
//? express-session --> session management (redis)
//? passport --> authentication
//? passport-google-oauth20 --> google authentication (mail)

//! jwt --> token --> client browser
//? req --> token --> get the token -->
//? google account (select) valid "abc@gmail.com"

//? passport is a middleware, which will handle all the authentication work

//? redis db (key-value): 10 min : 3 req (in memory database)
//? req (req.ip)  127.0.0.1(v4)    ::1(v6)
//? session/caching -->
