//const express = require("express");
//const userRouter = express.Router();
//const auth = require("../middlewares/auth");
////const Order = require("../models/order");
////const { Product } = require("../models/product");
//const User = require("../models/user");
//const Project = require("../models/projects");
//
//userRouter.post("/api/add-to-cart", auth, async (req, res) => {
//
//console.log(req.body);
//
////const { userId, projectArray } = req.body;
////
////let user = await User.findById(userId);
////
////
////  try {
////
////    for(var i in projectArray){
////      user.projects.push(projectArray[i]);
////    }
////    user = await user.save();
////    res.json(user);
////
////  } catch (e) {
////    res.status(500).json({ error: e.message });
////  }
//});
//
//module.exports = userRouter;