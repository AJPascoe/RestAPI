const {Router} = require("express");
const { addUser, findUser } = require("../controllers");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.post("/user", findUser);


module.exports = userRouter;