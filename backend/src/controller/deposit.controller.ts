import { calculateDepositsRates } from "../calculations/deposits";

export const getDepositsReturns = async (req, res) => {
    const calculations = await calculateDepositsRates(req.params.wallet)
    res.status(200).json({"ok":"ok"});
}