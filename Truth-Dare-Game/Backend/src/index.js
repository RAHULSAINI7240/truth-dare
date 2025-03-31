const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteReporter = require("./routes/noteRoutes");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require("cors");
app.use(express.json());    

dotenv.config();

// app.use((req , res , next) =>{
//     console.log("HTTP Method - " + req.method + "  , URL - " + req.url);
//     next();
// })



app.use(cors())
app.use("/users", userRouter);
app.use("/note", noteReporter);

// app.get("/", (req, res) => {
//   res.send("hello");
// });


const PORT = process.env.PORT || 5000;


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Porst is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

