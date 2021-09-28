var mongoose = require("mongoose");
var db = require("./models");
mongoose.connect("mongodb://localhost:27017/grocerydb", { useNewUrlParser: true });



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

var product = { name: "Soda", brand: "demoBrand" };
db.Product.create(product)
.then(function(dbProduct) {
    console.log(dbProduct);
})
.catch(function(err) {
    console.log(err);
});
