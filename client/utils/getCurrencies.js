const getCrypto = async (props) => {
  try {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${props.Exchange.baseCurrency}&limit=15`);
    const currencies = await response.json();
    // console.log(currencies);
      props
      .Exchange
      .crypto
      .forEach(Rcurrency => {
        currencies
          .filter(currency => currency.symbol == Rcurrency)
          .forEach(crypto => props.updatePrice([crypto.symbol], {
            price: Number(crypto[
              `price_${
                props
                .Exchange
                .baseCurrency
                .toLowerCase()}`
            ]),
            change: crypto.percent_change_1h,
          }));
          // props.updatePrice('BTC', this.state.BTC);
      });
  } catch (e) {
    console.log('error', e);
  }
};
const getReal = async (props) => {
  try {
    const response = await fetch(`https://api.fixer.io/latest?base=${props.Exchange.baseCurrency}`);
    const currencies = await response.json();
      props
      .Exchange
      .real
      .filter(currency => currency !== props.Exchange.baseCurrency)
      .forEach(Rcurrency => {
        props.updatePrice([Rcurrency], currencies.rates[Rcurrency]);
      });
  } catch (e) {
    console.log('error', e);
  } finally {
    //  console.log('done');
  }
};

module.exports={
  getCrypto,
  getReal,
}
;
