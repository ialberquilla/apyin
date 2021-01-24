import { getAccountHistory, getAtokens } from '../graphql/queryMethods'


export const calculateDepositsRates = async (wallet: string) => {
    const history = await getAccountHistory(wallet)
    const aTokens = await getAtokens()
    const filterHistory = history.filter(token => aTokens.includes(token.address))

    filterHistory.forEach(el => console.log(el.balanceChanges))

}