import {updatePrice} from './buySellActionsCreator';
import {buySellActions} from './index';
import {getCrypto, getFiat} from '../../../ajax-calls/getExchange';

export const getExchangeRates =
(baseCurrency='INR') => (dispatch, getState) => {
  dispatch(updatePrice('baseCurrency', baseCurrency));
  let state = getState().exchange;
  dispatch(updatePrice(`${state.baseCurrency}`, {price: 1}));

      getCrypto(state)
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
      });
      getFiat(state)
       .then(currencies=>{
         console.log('reducer', state.baseCurrency);
           state
           .real
           .filter(currency => currency !== state.baseCurrency)
           .forEach(Rcurrency => {
             dispatch(
              updatePrice([Rcurrency], {price: currencies.rates[Rcurrency]}));
           });
       })
       .catch(e=>console.log(e));
};
