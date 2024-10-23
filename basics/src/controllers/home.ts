import { Request, Response } from "express";

let requestCount = 0;

function homePageController(request: Request, response: Response) {
  requestCount++;
  response.render("index.html", {
    name: "Virendra",
    requestCount: requestCount,
    getName: () => "THis is name retured from func",
  });
}

export { homePageController };
