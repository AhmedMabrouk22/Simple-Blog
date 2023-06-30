const express = require("express")
const blogControllers = require("../controllers/blogControllers");
const router = express.Router();

router.get('/creare-blog',blogControllers.getCreateBlog)

router.get('/',blogControllers.getAllBlogs)

router.post('/',blogControllers.postCreateBlog)

router.get('/:id',blogControllers.getBlogById)

router.delete('/:id',blogControllers.deleteBlog)


module.exports = router;