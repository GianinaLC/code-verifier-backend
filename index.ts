import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// configuration the .env file
dotenv.config();

// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// define the first route of app
app.get("/", (req: Request, res: Response) => {
  //send hello world
  res.send(
    "Welcome to API Restful Express + TS + Nodemon + Jest + Swagger + Mongoose"
  );
});

// define the first route of app
app.get("/hello", (req: Request, res: Response) => {
  //send hello world
  res.send("Welcome to GET Route: Hello world");
});

// execute app and listen request to port
app.listen(port, () => {
  console.log(`Express server: running at http://localhost:${port}`);
});
