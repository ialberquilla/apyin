import { BalanceHistory, BalanceChanges } from '../interfaces/models'

export const calculateIdleTime = (wallet: BalanceHistory[]) => {
    return wallet.map(token => {
        return calculateIdleTimeForToken(token)
    })
}


const calculateIdleTimeForToken = (token: BalanceHistory): BalanceHistory => {
    const resultToken: BalanceHistory = Object.assign({}, token);
    resultToken.balanceChanges = token.balanceChanges.map((balanceChange, index) => {
        return {
            block: balanceChange.block,
            timestamp: balanceChange.timestamp,
            untilTimestamp: index < token.balanceChanges.length - 1 ?
                token.balanceChanges[index + 1].timestamp
                :
                Math.round(Date.now() / 1000),
            transferAmount: balanceChange.transferAmount,
            value: balanceChange.value,
            timeIdle: index < token.balanceChanges.length - 1 ?
                token.balanceChanges[index + 1].timestamp - balanceChange.timestamp
                :
                Math.round(Date.now() / 1000) - balanceChange.timestamp,
            missingAPY: balanceChange.missingAPY,
            missingTokens: balanceChange.missingTokens,
            rateChanges: []
        } as BalanceChanges
    })

    return resultToken
}
