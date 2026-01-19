import http from "node:http";
import { parse } from "node:querystring";
import connectDb from "./database.js";
import User from "./model.js";

connectDb();

http
  .createServer(async (req, res) => {
    // console.log(req.method);
    //! if else block
    //? if --> get methods (get all, get one)
    if (req.method === "GET") {
      if (req.url === "/all") {
        // all users preset in db
        let allUsers = await User.find();
        let jsonData = JSON.stringify(allUsers);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData); // JSON
      } else if (req.url === "/one") {
        // one user preset in db
      }
    }
    //? else if --> post methods
    else if (req.method === "POST") {
      //! html form --> express.urlencoded() --> "application/x-www-form-urlencoded"
      //! html form --> express.json() --> "application/json"
      let contentTypeJSON = "application/json";
      let contentTypeHTML = "application/x-www-form-urlencoded";
      if (
        req.url === "/register" &&
        (req.headers["content-type"] === contentTypeJSON ||
          req.headers["content-type"] === contentTypeHTML)
      ) {
        // console.log(req.body) X
        let body = "";
        //~ event listener
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", async () => {
          console.log(body);
          let parsedBody = parse(body);
          console.log(parsedBody);
          //? save user in db
          let op = await User.create(parsedBody);
          res.writeHead(201, { "Content-Type": "text/html" });
          res.end("data saved");
        });

        req.on("error", (err) => {
          console.log(err);

          //!
        });
      } else {
        res.end("Invalid content type");
      }
    }
    //? else if --> patch methods
    else if (req.method === "PATCH") {
      console.log("PATCH req");
    }
    //? else if --> delete methods
    else if (req.method === "DELETE") {
      console.log("DELETE req");
    }
    //? else --> others
    else {
      console.log("not valid method");
    }
  })
  .listen(9000, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log("server running");
  });

//! local
