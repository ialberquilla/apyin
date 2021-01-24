import express from "express";
import { initialLoad } from './cache/loadData'
import mongoose from 'mongoose'
const app = express();

import initRoutes from "./routes";

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

initRoutes(app);
app.use(express.urlencoded({ extended: true }));


const port = 8080;

mongoose.connect('mongodb://localhost:27018/apyin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, async () => {
    await initialLoad()
    console.log(`Running at localhost:${port}`);
})).catch(e => console.log(e));
