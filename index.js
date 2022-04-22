const express = require('express')
const app = express();

const PORT = process.env.PORT || 80;

app.get("/",(req,res)=>{
     res.sendFile(__dirname + "/main_page.html");

});
app.use(express.static(__dirname));
app.listen(PORT,() =>{
    console.log('App started')
});