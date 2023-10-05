const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");


const routes = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

// Middleware
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connected to Mongoose...`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Port running in ${PORT}`))








// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const routes = require("./routes/ToDoRoutes");

// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));

// app.use("/api", routes);

// app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
