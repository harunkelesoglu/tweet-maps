const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios');
const PORT = process.env.PORT || 3002;
BASE_URL = 'http://195.87.138.221:443/socialSensor.json';
app.use(cors());
app.use(express.static('public'))
app.get('/tweets',(req,res,next)=>{
    axios(BASE_URL, {
        method: 'GET',
        mode: 'no-cors',
      }).then(response => {
          res.send(response.data);
      })
})
app.get('/',(req,res,next) => {
    res.sendFile("index.html");
})
app.listen(PORT,()=>{
    console.log(`${PORT} listening`);
});