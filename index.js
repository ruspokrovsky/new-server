// IMPORTS FROM PACKAGES

const express = require("express");
const mongoose = require("mongoose");
//const adminRouter = require("./routes/admin");

// IMPORTS FROM OTHER FILES

const authRouter = require("./routes/auth");
//const productRouter = require("./routes/product");
//const userRouter = require("./routes/user");
const projectRouter = require("./routes/project");
const expenseRouter = require("./routes/expanse");

// INIT

const PORT = 3000;
//const PORT = process.env.PORT || 3000;
const app = express();
const DB =  "mongodb+srv://Rustam:nefaz1975@cluster0.jesbf.mongodb.net/?retryWrites=true&w=majority";

// middleware

app.use(express.json());
app.use(authRouter);
app.use(projectRouter);
app.use(expenseRouter);
//app.use(adminRouter);
//app.use(productRouter);
//app.use(userRouter);







// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});