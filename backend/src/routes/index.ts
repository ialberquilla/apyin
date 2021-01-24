import express from "express";
const router = express.Router();
import { getIdleAmounts } from "../controller/idle.controller";
import { getDepositsReturns } from "../controller/deposit.controller";


const initRoutes = (app) => {
    router.get("/idle/:wallet", getIdleAmounts);
    router.get("/deposits/:wallet", getDepositsReturns);
    app.use(router);
};

export default initRoutes;