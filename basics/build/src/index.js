"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(3000, () => {
    console.log("Listening on port 300");
    console.log("Visit http://localhost:3000");
});
let requestCount = 0;
function homePageRequestHandler(request, response) {
    console.log("Requesting homepage", request.url);
    requestCount++;
    response.render("index.html", {
        name: "Virendra",
        requestCount: requestCount,
        getName: () => "THis is name retured from func",
    });
}
function getAllUsersRequestHandler(request, response) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        return response.json();
    })
        .then(users => {
        response.render('users.html', {
            users
        });
    });
}
app.get("/", homePageRequestHandler);
app.get("/users", getAllUsersRequestHandler);
