require("./db/connection");
const express = require("express");
const app = express();
const userRouter = require("./routes");

app.use(express.json());


app.use(userRouter);

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});
