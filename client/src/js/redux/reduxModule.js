import { bindActionCreators, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../js/redux/actions/index';
import Store from './store';

function mapStateToProps(state) {
  return {
    /* wallet: state.wallet Configure required basic properties here*/
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const Redux = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Redux;