import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

//Router from express
let helloRouter = express.Router();

// GET --> http://localhost:8000/api/hello?name=Martin/
helloRouter.route("/").get(async (req: Request, res: Response) => {
  //Obtain a query param
  let name: any = req?.query?.name;
  LogInfo(`Query Param: ${name}`);
  //Controller Instance to execute method
  const controller: HelloController = new HelloController();
  //Obtain Response
  const response = await controller.getMessage(name);
  //Send to client the response
  return res.send(response);
});

// Export helloRouter
export default helloRouter;
