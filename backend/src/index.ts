import express from "express";
import mongoose from 'mongoose'
import initRoutes from "./routes";
import config from "./config";

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

initRoutes(app);
app.use(express.urlencoded({ extended: true }));

const port = 8080;

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.dbHost}:27018/apyin`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, async () => {
    console.log(`Running at localhost:${port}`);

  })).catch(e => console.log(e));
