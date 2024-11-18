const mongoose = require("mongoose");

const dbName = process.env.MONGO_DB_DATABASE_NAME;
const username = process.env.MONGO_DB_USER_NAME;
const password = process.env.MONGO_DB_PASSWORD;

console.log({ dbName });

const url = `mongodb+srv://${username}:${password}@learningclustor01.5qlnc.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=LearningClustor01`;
mongoose.connect(url).then(() => {
  console.log("Mongo DB Connected..");
});
