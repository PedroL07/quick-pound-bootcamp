const accountSid = 'AC62ded13896f2e96cecbf16077af109ea'; 
const authToken = '75f53d3d023f3877f8bb04b594b3a3cd'; 
const client = require('twilio')(accountSid, authToken); 
const schedule = require('node-schedule');



schedule.scheduleJob('0 12 * 11 *', () => {
      client.messages 
      .create({         
            body: 'Hi there', from: '+13466332747', to: '+16174078920' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
})
 
// function sendText(){
client.messages 
      .create({         
            body: 'Hi there', from: '+13466332747', to: '+16174078920' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
//       }




// client.messages
//       .create({
//          messagingServiceSid: 'MGdb64e527aaeb19ac513e4883df971a17',
//          body: 'This is a scheduled message',
//          sendAt: new Date(Date.UTC('2022-10-21T23:50:00-05:00')),
//          scheduleType: 'fixed',
//          to: '+16174078920'
//        })
//       .then(message => console.log(message.sid));

