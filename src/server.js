require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes");

app.use(express.json());
app.use(cors());


app.use(userRouter);

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
});
