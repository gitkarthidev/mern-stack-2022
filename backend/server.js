import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

//k0oF8X0OlcZOdLF0

//mongodb+srv://karthi:<password>@cluster0.r4qxzsc.mongodb.net/?retryWrites=true&w=majority

const app = express();
app.use(cors);

await mongoose.connect(
  "mongodb+srv://karthi:karthi123@cluster0.r4qxzsc.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Mongodb connection is successfull");

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
