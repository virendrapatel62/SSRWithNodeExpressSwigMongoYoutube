const mongoose = require("mongoose");

const url = `mongodb+srv://patelvirendra62:Bddk2jXu5GQPnBW3@learningclustor01.5qlnc.mongodb.net/ecom?retryWrites=true&w=majority&appName=LearningClustor01`;

mongoose.connect(url).then(() => {
  console.log("Mongo DB Connected..");
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  tags: [String],
});

const Product = mongoose.model("products", productSchema);

// Product.deleteMany({}).then(console.log);

// const id = `6739f5ad7cf033dd31867b70`;

// Product.findOneAndDelete({ _id: id }).then((deletedItem) => {
//   console.log({ deletedItem });
// });

// const id = "6739f47639eead4d8586bfd8";
// Product.deleteOne({ _id: id }).then((deletedItem) => {
//   console.log({ deletedItem });
// });

// Product.updateOne(
//   { _id: id },
//   {
//     $set: {
//       name: "Dell Updated",
//       price: 999,
//     },
//   }
// ).then((ach) => {
//   console.log(ach);
// });

// Product.updateOne(
//   { _id: id },
//   {
//     $pull: {
//       tags: 1,
//     },
//   }
// ).then((ach) => {
//   console.log(ach);
// });

// Product.findById(id).then((product) => {
//   console.log(product);
//   product.name = "HP laptop";
//   product.price = 1999;
//   product.save().then((p) => {
//     console.log(p);
//   });
// });

// Product.findById(id).then((p) => {
//   console.log(p);
// });

// const product = new Product({
//   name: "Mac book pro from js",
//   price: 989,
// });

// product.save().then(() => {
//   console.log("Product saved....");
// });

// Product.create({
//   name: "Samsung",
//   price: 9999,
// }).then((product) => {
//   console.log(product);
// });

// Product.create([
//   { name: "Samsung 1", price: 39999 },
//   { name: "Samsung 2", price: 999 },
// ]).then((products) => {
//   console.log(products);
// });

// Product.find().then((products) => {
//   console.log(products);
// });

// Product.find({
//   name: "Samsung",
// }).then((products) => {
//   console.log("Product with name Samsung");
//   console.log(products);
// });

// Product.find({
//   price: {
//     $lt: 1000,
//   },
// }).then((products) => {
//   console.log("Product with  less then 1000");
//   console.log(products);
// });

// Product.findById("6739f5ad7cf033dd31867b70").then(console.log);
