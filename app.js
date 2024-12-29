const express = require("express");
const mongoose = require("mongoose");
// user defined routes
let userRoutes=require("./routes/userRoute")
const app = express();
app.use(express.json());


app.use("/users",userRoutes);


let url = "mongodb://localhost:27017/expenseTrackerDB";
mongoose
  .connect(url)
  .then(() => console.log("connected succeesfully"))
  .catch((err) => {
    console.log("err", err.message);
  });

let port = 3000;
app.listen(port, (err) => {
  console.log(`process is running at port:${port}`);
});
