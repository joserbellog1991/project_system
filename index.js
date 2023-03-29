const express = require("express");
const app = express();
const apiRouters = require("./routes/apiRouters");
const port = process.env.PORT || 9000;
app.use(express.json());
 
app.get("/",(req,res)=>{

 res.send("home");   

});

apiRouters(app);

app.listen(port,()=>{

    console.log("conectado al puerto "+port);

})