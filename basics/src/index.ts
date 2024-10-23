import express from 'express';
import { homePageController } from './controllers/home';
import { getAllUsersController } from './controllers/user';
import swig from 'swig'
import minifier from 'html-minifier'

const app = express();

swig.setDefaults({
  cache: false
});

app.set("view engine", "html");
// app.engine("html", require("swig").renderFile);
app.engine("html", (path, object, cb) => {
  return require("swig").renderFile(path, object, (error: Error, html: string) => {
    if (error) {
      return cb(error, html)
    }
    cb(error, minifier.minify(html, {
      collapseWhitespace: true, removeTagWhitespace: true,
      removeComments: true, minifyCSS: true
    }))
  })
});

app.listen(3000, () => {
  console.log("Listening on port 300");
  console.log("Visit http://localhost:3000");
});


app.get("/", homePageController);
app.get("/users", getAllUsersController);
