const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  published_date: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  timer: {
    type: String,
    required: true,
  },
  recipe_image: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/food-and-drink-icon-png/food-and-drink-icon-png-18.jpg",
  },
  ingredients_image: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/ingredients-icon/ingredients-icon-7.jpg",
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  facts: {
    type: [String],
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
