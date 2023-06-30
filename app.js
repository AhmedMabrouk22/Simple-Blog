const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const blogRouter = require("./routes/blogRoute.js");

const app = express();

app.set("view engine", "ejs");

const dpUri = "mongodb+srv://said66913:A_M_S_123456798@cluster0.epvgixh.mongodb.net/SimplBlog?retryWrites=true&w=majority";
mongoose.connect(dpUri)
.then(() => {
    app.listen(3000, () => {
        console.log("server run");
    })
})
.catch(err => {
    console.log(err);
})

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=> {
    res.redirect("/blogs");
})

app.use('/blogs',blogRouter);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

