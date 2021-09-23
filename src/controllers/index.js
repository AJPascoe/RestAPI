const User = require("../models");

exports.addUser = async (req, res) =>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.findUser = async (req, res) =>{
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(502).send(error);
    }
};