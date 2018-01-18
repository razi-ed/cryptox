import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../js/redux/actions/index';
// import Store from './store';
import App from '../../components/App';

/**
 * This function takes state as parameter and maps state tot props
 * @param {state} Store
 * @return {state}
 */
function mapStateToProps(Store) {
  return {
    /* Configure required basic properties here*/
  };
}

/**
 * This function takes state as parameter and maps state tot props
 * @param {dispatch} dispatch
 * @return {action}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const Redux = connect(mapStateToProps, mapDispatchToProps)(App);

export default Redux;
