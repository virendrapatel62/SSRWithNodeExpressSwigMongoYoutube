"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./db");
const express_1 = __importDefault(require("express"));
const home_1 = require("./controllers/home");
const user_1 = require("./controllers/user");
const swig_1 = __importDefault(require("swig"));
const html_minifier_1 = __importDefault(require("html-minifier"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
swig_1.default.setDefaults({
    cache: false,
    loader: swig_1.default.loaders.fs(path_1.default.join(__dirname, "../views")),
});
app.set("view engine", "html");
// app.engine("html", require("swig").renderFile);
const minifyHTML = false;
app.engine("html", (path, object, cb) => {
    return require("swig").renderFile(path, object, (error, html) => {
        if (error) {
            return cb(error, html);
        }
        if (minifyHTML) {
            html = html_minifier_1.default.minify(html, {
                collapseWhitespace: true,
                removeTagWhitespace: true,
                removeComments: true,
                minifyCSS: true,
            });
        }
        cb(error, html);
    });
});
app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT);
    console.log(`Visit http://localhost:${process.env.PORT}`);
});
app.get("/", home_1.homePageController);
app.get("/users", user_1.getAllUsersController);
app.get("/users/add", user_1.addUserPageController);
app.post("/users/add", user_1.addUserController);
app.get("/users/:userId", user_1.getUserByIdController);
