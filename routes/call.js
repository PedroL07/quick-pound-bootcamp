const express = require("express");
const router = express.Router();
const callController = require("../controllers/call");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, smsController.getComment);

router.post("/createCall", ensureAuth, callController.createCall);

// router.put("/likeComment/:id", smsController.likePost);

// router.delete("/deleteComment/:id", smsController.deletePost);

module.exports = router;
