const {
  createblog,
  getallblogs,
  getsingleblog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blog");
const router = require("express").Router();

router.post("/createblog", createblog);
router.get("/getallblogs", getallblogs);
router.get("/getsingleblog/:id", getsingleblog);
router.delete("/deleteblog/:id", deleteBlog);
router.put("/updateblog/:id", updateBlog);

module.exports = router;
