
const Blog = require('../models/blogModel');

let getAllBlogs = (req,res) => {
    Blog.find().sort({createdAt: -1})
        .then(data => {
            res.render("index",{title: "All Blogs", blog: data});
        })
        .catch(err => console.log(err));
}

let getBlogById = (req,res) => {
    let id = req.params.id;
    
    Blog.findById(id)
        .then((data) => {
            res.render('blogBody', {title: data.title, blog : data})
        })
        .catch(err => {
            console.log(err);
            
        })
    
}

let getCreateBlog = (req,res) => {
    res.render("create-blog",{title: "Create new Blog"});
}

let postCreateBlog = (req,res) => {
    let blog = new Blog(req.body);
    blog.save()
    .then(() => res.redirect('/blogs'))
    .catch(err => consolo.log(err));
}

let deleteBlog = (req,res) => {
    let id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(() => res.json({redirect : '/blogs'}))
        .catch(err => console.log(err))
}

module.exports = {
    getAllBlogs,
    getBlogById,
    getCreateBlog,
    postCreateBlog,
    deleteBlog,
}