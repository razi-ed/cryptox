export const bsAction =
(action, state, mulFactor, props) =>{
    const type=(action=='buy')?props.baseCurrency:state.trade;
    const tradeFor=(action=='buy')?state.trade:props.baseCurrency;
    const currentPrice=(action=='buy')?mulFactor(state.trade):(1/mulFactor(state.trade));
    const units=(action=='buy')?((state.units *
        state.quantity) * (mulFactor(state.trade))).toFixed(3):((state.units *
            state.quantity) ).toFixed(3);
    console.log({type, tradeFor, currentPrice, units});

    return fetch(`/orders/${action}`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            units,
            type,
            tradeFor,
            currentPrice,
        }),
    })
    .then(r=>r.json());
};
