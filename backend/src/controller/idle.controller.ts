import { calculateRates } from "../calculations/wallet";

export const getIdleAmounts = async (req, res) => {
    console.log(req.params.wallet)
    const calculations = await calculateRates(req.params.wallet)
    res.status(200).json(calculations);
}