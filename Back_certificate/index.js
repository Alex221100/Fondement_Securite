const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import routes
const AuthRoutes = require("./routes/AuthRoutes");

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
},
    () => console.log("Connected to DB")
);

//middleware
app.use(express.json());


//route middlewares
app.use("/api/user", AuthRoutes);

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));