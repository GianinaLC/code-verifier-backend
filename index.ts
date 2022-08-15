import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// configuration the .env file
dotenv.config();

// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// define the first route of app
app.get("/", (req: Request, res: Response) => {
  //send
  res.send({ message: "Goodbye, world" });
});

// define the first route of app
app.get("/saludo", (req: Request, res: Response) => {
  //send hello world
  let name = req.query.name;

  if (name != "") {
    res.send({ message: `Hola ${name}` });
  } else {
    res.send({ message: "Anónimo" });
  }

  //http://localhost:8000/saludo?name=Ana
});

// execute app and listen request to port
app.listen(port, () => {
  console.log(`Express server: running at http://localhost:${port}`);
});
