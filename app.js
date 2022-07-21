import express from "express";
const app = express();
const port = process.env.PORT || "3000";
import connectDB from './db/connectDB.js';
import web from './routes/web.js'

//Database url

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//connection

connectDB(DATABASE_URL);

//load route

//api json

app.use(express.json())

app.use('/',web);


app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
  