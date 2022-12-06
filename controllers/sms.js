// const cloudinary = require("../middleware/cloudinary");
// const Messages = require("../models/Messages");
const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "75f53d3d023f3877f8bb04b594b3a3cd";
const client = require("twilio")(accountSid, authToken);
// const message = require("../models/Comment");
// const schedule = require("node-schedule");

// module.exports = {
//   createText: async (req, res) => {
//     schedule.scheduleJob("31 16 1 12 *", () => {
//       client.messages
//         .create({
//           body: "Thank you for your visit!",
//           from: "+13466332747",
//           to: "+16174078920",
//         })
//         .then((message) => console.log(message.sid))

//         .done();
//       res.redirect("/profile");
//     });
//   },
// };
const message = ('its working')

module.exports = {


  createText: async (req, res) => {
    client.messages 
      .create({         
            body: `'${message}'`, from: '+13466332747', to: '+16174078920' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("/post/"+req.params.id);},
      
      
};


