const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();
const notFound = require("./middleware/not-found");
//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
PORT =  3000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to Db.....");
    app.listen(PORT, console.log(`Listening on port ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
