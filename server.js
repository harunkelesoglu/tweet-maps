const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static('public'))
app.get('/',(req,res,next) => {
    res.sendFile("index.html");
})
app.listen(PORT,()=>{
    console.log(`${PORT} listening`);
});