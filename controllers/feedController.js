const Post = require("../models/post");


exports.getPosts = (req, res, next) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => console.log(err));
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const post = new Post({
        title: title,
        imageUrl: imageUrl,
        content: content
    });
    post.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => console.log(err));
};

exports.deletePost = (req, res, next) => {
    Post.deleteOne({_id: req.params.postId})
        .then(result => {
            console.log("Deleted Successfully");
            res.json(result);
        })
        .catch(err => console.log(err));
};

exports.getPost = (req, res, next) => {
    Post.findById(req.params.postId)
        .then(post => {
            res.json(post);
        })
        .catch(err => console.log(err));
};

exports.updatePost = (req, res, next) => {
    const postId = req.params.postId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    Post.findById(postId)
        .then(post => {
            post.title = title;
            post.imageUrl = imageUrl;
            post.content = content;
            return post.save();
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
};