

const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db');
const app = express();


// Connect with mongo db
connectDB();

app.use(express.json());

app.use("/users", userRoutes);

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})