const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, commentsController.getComment);

router.post("/createComment/:id", ensureAuth, commentsController.createComment);

// router.put("/likeComment/:id", commentsController.likePost);

// router.delete("/deleteComment/:id", commentsController.deletePost);

module.exports = router;
