import { Request, Response } from "express";

let requestCount = 0

function homePageController(request: Request, response: Response) {
    console.log("Requesting homepage", request.url);
    requestCount++;
    response.render("index.html", {
        name: "Virendra",
        requestCount: requestCount,
        getName: () => "THis is name retured from func",
    });
}

export { homePageController }
