import { Transfers } from '../interfaces/models';
import axios from './aleth.config';


export const getETHTransfers = async (address: string):
  Promise<Transfers[]> => {
  try {
    const response = await axios.get(`/ether-transfers?filter[account]=${address}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    return response.data.data.map(transfer => ({
      txid: transfer.relationships.transaction.data.id,
      symbol: 'ETH',
      blocktime: transfer.attributes.blockCreationTime,
      amount: transfer.attributes.value,
      from: transfer.relationships.from.data.id,
      to: transfer.relationships.to.data.id
    } as Transfers));
  }
  catch (error) {
    throw (error)
  }
}


export const getTokenTransfers = async (address: string):
  Promise<Transfers[]> => {
  try {
    const response = await axios.get(`/accounts/${address}/tokenTransfers`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    return response.data.data.map(transfer => ({
      txid: transfer.relationships.transaction.data.id,
      symbol:transfer.attributes.symbol,
      blocktime: transfer.attributes.blockCreationTime,
      amount: transfer.attributes.value,
      from: transfer.relationships.from.data.id,
      to: transfer.relationships.to.data.id
    } as Transfers));
  }
  catch (error) {
    throw (error)
  }
}

