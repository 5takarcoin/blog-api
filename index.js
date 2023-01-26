const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const path = require("path");

app.use(cors());
dotenv.config();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Running...");
});
