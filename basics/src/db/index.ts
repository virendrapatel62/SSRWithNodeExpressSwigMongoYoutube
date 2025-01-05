const mongoose = require("mongoose");
const url = process.env.MONGO_DB_CONNECTION_URL;
mongoose.connect(url).then(() => {
  console.log("Mongo DB Connected..");
});
