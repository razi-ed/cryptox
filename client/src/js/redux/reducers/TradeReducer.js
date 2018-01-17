import Exchange from '../exchange';
import exchange from '../exchange';

/**
 *Reducer for trade-exchage
 * @param {*} state
 * @param {*} action
 * @return {reducers}
 */
export default function Trade(state=exchange, action) {
    console.log(state, action);
    return state;
};
