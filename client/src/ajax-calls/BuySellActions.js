export const bsAction = (action, state, mulFactor, props) => fetch(`/orders/${action}`, {
    method: 'POST',
    headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        units: ((state.units *
            state.quantity) * (mulFactor(state.trade))).toFixed(3),
        type: props.baseCurrency,
        tradeFor: state.trade,
        currentPrice: mulFactor(state.trade),
    }),
})
.then(r=>r.json());
