const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feedController");

router.get("/posts", feedController.getPosts);
router.post("/posts", feedController.createPost);
router.delete("/posts/:postId", feedController.deletePost);
router.get("/posts/:postId", feedController.getPost);
router.put("/posts/:postId", feedController.updatePost);


module.exports = router;