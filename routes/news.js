const express = require("express");
const router = express.Router();
// const fetch = require('node-fetch');
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post('/news', async (req, res) => {
    const city = "01905";
    const key = "d68aedde11f9080e0f0ed36d788404d8";
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  
   fetch(url_api)
        .then(res => res.json())
        .then(data => console.log(data));

  })
  
  
  module.exports = router;


//   if (data.message === 'city not found') {
//     res.render('profile', {
//       city: data.message,
//       des: null,
//       icon: null,
//       temp: null
//     })
//   } else {
//     const city = data.name;
//     const des = data.weather[0].description;
//     const icon = data.weather[0].icon;
//     const temp = data.main.temp;

//     res.render('profile', {
//       city, des, icon, temp
//     });
//   }
// });

// } catch (err) {
// res.render('profile', {
// city: 'something wrong',
// des: null,
// icon: null,
// temp: null
// })
// }
