const express = require("express");
const router = express.Router();
const smsController = require("../controllers/sms");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, smsController.getComment);

router.post("/createText", ensureAuth, smsController.createText);

// router.put("/likeComment/:id", smsController.likePost);

// router.delete("/deleteComment/:id", smsController.deletePost);

module.exports = router;
