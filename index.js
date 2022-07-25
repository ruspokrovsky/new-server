const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const projectRouter = require("./routes/project");
const expenseRouter = require("./routes/expanse");

const PORT = process.env.PORT || 3000;
const app = express();
const DB =  "mongodb+srv://Rustam:<password>@cluster0.jesbf.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);
app.use(projectRouter);
app.use(expenseRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
