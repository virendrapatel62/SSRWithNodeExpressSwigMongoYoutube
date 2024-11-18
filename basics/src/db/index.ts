const mongoose = require("mongoose");
const dbName = "basics_learning_project";
const url = `mongodb+srv://patelvirendra62:Bddk2jXu5GQPnBW3@learningclustor01.5qlnc.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=LearningClustor01`;
mongoose.connect(url).then(() => {
  console.log("Mongo DB Connected..");
});
