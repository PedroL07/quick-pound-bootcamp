// const cloudinary = require("../middleware/cloudinary");
const Comment = require("../models/Comment");



module.exports = {

  createComment: async (req, res) => {
  
    try {     
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id
      });
      console.log("comment has been added!");
      console.log(req.body.comment);
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
      
    }
  }
};
