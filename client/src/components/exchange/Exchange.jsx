import React from 'react';
import Grid from 'material-ui/Grid';
import SList from './List';
import RightPane from './RightPane';
import {connect} from 'react-redux';
import {getCrypto, getReal} from '../../../utils/getCurrencies';
import {getExchangeRates} from '../../js/redux/actions/exchange'
/**
 *to Hold all the required components required for exchange
 * @param {*} props
 * @return {component}
 */
class Exchange extends React.Component {
  componentDidMount() {
    this.props.dispatch(getExchangeRates())
  }
  componentWillReceiveProps(nextProps){
    const baseCurrency=nextProps.match.params.coin ||'INR';
    (baseCurrency!==nextProps.baseCurrency)?this.props.dispatch(getExchangeRates(baseCurrency)):undefined;
    console.log(nextProps.match.params,nextProps.baseCurrency,'will recieve props');
    // this.props.dispatch(getExchangeRates())
  }
  render() {
    const {baseCurrency} = this.props
    return (
      <Grid
        item
        container
        spacing={0}
        justify={'space-around'}
        alignItems={'stretch'}
        className="exchange">
        <SList base={baseCurrency}/>
        <RightPane base={baseCurrency}/>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => state.exchange
export default connect(mapStateToProps)(Exchange);
