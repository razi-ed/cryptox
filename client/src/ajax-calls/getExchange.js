export const getCrypto=(state)=>fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${state.baseCurrency}&limit=15`)
.then(response => response.json());
export const getFiat=(state)=>fetch(`https://api.fixer.io/latest?base=${state.baseCurrency}`)
.then(response=> response.json());
module.exports={getCrypto, getFiat};
