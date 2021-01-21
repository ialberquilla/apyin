import express from "express";
const router = express.Router();
import { getIdleAmounts } from "../controller/idle.controller";

const initRoutes = (app) => {
    router.get("/idle/:wallet", getIdleAmounts);
    app.use(router);
};

export default initRoutes;