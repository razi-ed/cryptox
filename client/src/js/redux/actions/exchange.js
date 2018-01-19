import {updatePrice} from './buySellActionsCreator'
import { buySellActions } from "./index";

export const getExchangeRates = (baseCurrency='INR') => (dispatch, getState) => {
  dispatch(updatePrice('baseCurrency',baseCurrency))
  let state = getState().exchange
  dispatch(updatePrice(`${state.baseCurrency}`,{price:1}))

  console.log('state', getState())
 fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${state.baseCurrency}&limit=15`)
      .then(response => response.json())
      .then(currencies => {
        state
        .crypto
        .forEach(Rcurrency => {
          currencies
            .filter(currency => currency.symbol == Rcurrency)
            .forEach(crypto => dispatch(updatePrice([crypto.symbol], {
              price: Number(crypto[
                `price_${
                  state
                  .baseCurrency
                  .toLowerCase()}`
              ]),
              change: crypto.percent_change_1h,
            })));
        });
      }).catch(e => {
        console.log('error', e);
      })     
      fetch(`https://api.fixer.io/latest?base=${state.baseCurrency}`)
       .then(response=> response.json())
       .then(currencies=>{
         console.log('reducer', state.baseCurrency)
           state
           .real
           .filter(currency => currency !== state.baseCurrency)
           .forEach(Rcurrency => {
             dispatch(updatePrice([Rcurrency], {price: currencies.rates[Rcurrency]}));
           });
       })
       .catch(e=>console.log(e))
 
}