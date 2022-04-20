const Blog = require("../models/blog");
const slugify = require("slugify");

module.exports.createblog = async (req, res) => {
  try {
    const { title, image, body, postedBy } = req.body;
    console.log(req.body);
    const slug = title;
    const newblog = await new Blog({
      title,
      slug: slugify(slug, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
        lower: false, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: "hi", // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      }),
      image,
      body,
      postedBy,
    }).save();
    res.json(newblog);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getallblogs = async (req, res) => {
  try {
    const getblogs = await Blog.find();
    res.json(getblogs);
  } catch (err) {
    console.log(err);
  }
  // Blog.find()
  // .then(blogs => res.json(blogs))
  // .catch(err => console.log(err));
};

module.exports.getsingleblog = async (req, res) => {
  try {
    const { id } = req.params;

    const getonepost = await Blog.findOne({ _id: id }).exec();
    res.json(getonepost);
  } catch (err) {
    console.log(err);
  }
  // await Blog.findById(req.params.id)
  // .then(blog => res.json(blog))
  // .catch(err => res.status(400).json('Error: ' + err));
};

module.exports.deleteBlog = async (req, res) => {
  // Blog.findByIdAndDelete(req.params.id)
  // .then(() => res.json('blog deleted. '))
  // .catch(err => res.status(400).json('Error: ' + err));
  try {
    const { postId } = req.body;
    const deletepost = await Blog.findOneAndDelete({ _id: postId }).exec();
    res.json(deletepost);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { postId, title, slug, image, body } = req.body;
    const editedblog = await Blog.findOneAndUpdate(
      { _id: postId },
      {
        title,
        slug,
        image,
        body,
      },
      { new: true }
    ).exec();
    res.json(editedblog);
  } catch (err) {
    console.log(err);
  }
};
