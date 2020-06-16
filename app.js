const express = require('express')
const app = express()
var CryptoJS = require("crypto-js");

require("dotenv").config();


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
});
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get('/api',(req,res)=>{
    const PUBLIC_KEY = process.env.PUBLIC_KEY
    const PRIV_KEY = process.env.PRIV_KEY
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    // console.log(ts,hash);
    res.json({ts,hash});
})