const Blog = require("../models/blog_model");

const get_blog = async (req, res) => {
  try {
    const blog = await Blog.find();
    return res.json(blog);
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const single_blog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      return res.json(blog);
    } else {
      return res.status(404).json("BLOG NOT FOUND");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const breakfast_blog = async (req, res) => {
  try {
    const query = Blog.where({ tags: "BREAKFAST" });
    const breakfast = await query.find();
    if (breakfast) {
      return res.json(breakfast);
    } else {
      return res.status(404).json("BLOGS NOT FOUND");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const lunch_blog = async (req, res) => {
  try {
    const query = Blog.where({ tags: "LUNCH" });
    const lunch = await query.find();
    if (lunch) {
      return res.json(lunch);
    } else {
      return res.status(404).json("BLOGS NOT FOUND");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const dinner_blog = async (req, res) => {
  try {
    const query = Blog.where({ tags: "DINNER" });
    const dinner = await query.find();
    if (dinner) {
      return res.json(dinner);
    } else {
      return res.status(404).json("BLOGS NOT FOUND");
    }
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const create_blog = async (req, res) => {
  const {
    title,
    description,
    author_name,
    published_date,
    tags,
    timer,
    recipe_image,
    ingredients_image,
    ingredients,
    instructions,
    facts,
  } = req.body;

  if (
    !title ||
    !description ||
    !author_name ||
    !published_date ||
    !tags ||
    !timer ||
    !ingredients ||
    !instructions ||
    !facts
  ) {
    return res.status(404).json("PLEASE FILL ALL THE FIELDS");
  }

  try {
    const blog = new Blog({
      title,
      description,
      author_name,
      published_date,
      tags,
      timer,
      recipe_image,
      ingredients_image,
      ingredients,
      instructions,
      facts,
    });
    const create = await blog.save();
    return res.status(201).json(create);
  } catch (error) {
    return res.status(404).json("ERROR OCCURED");
  }
};

const update_blog = async (req, res) => {
  const {
    title,
    description,
    author_name,
    published_date,
    tags,
    timer,
    recipe_image,
    ingredients_image,
    ingredients,
    instructions,
    facts,
  } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.description = description;
    blog.author_name = author_name;
    blog.published_date = published_date;
    blog.tags = tags;
    blog.timer = timer;
    blog.recipe_image = recipe_image;
    blog.ingredients_image = ingredients_image;
    blog.ingredients = ingredients;
    blog.instructions = instructions;
    blog.facts = facts;

    const update = await blog.save();
    res.json(update);
  }
};

const delete_blog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    await blog.deleteOne();
    res.json("BLOG DELETED");
  } else {
    res.status(404);
    res.json("BLOG NOT FOUND");
  }
};

module.exports = {
  get_blog,
  single_blog,
  breakfast_blog,
  lunch_blog,
  dinner_blog,
  create_blog,
  update_blog,
  delete_blog,
};
