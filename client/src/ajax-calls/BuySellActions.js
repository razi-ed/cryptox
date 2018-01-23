export const Action = (action, state) => fetch(`/orders/${action}`, {
    method: 'POST',
    headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        units: ((state.units *
            state.quantity) * (this.mulFactor(state.trade))).toFixed(3),
        type: this.props.baseCurrency,
        tradeFor: state.trade,
        currentPrice: this.mulFactor(state.trade),
    }),
});
