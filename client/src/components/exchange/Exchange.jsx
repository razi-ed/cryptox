import React from 'react';
import Grid from 'material-ui/Grid';
import SList from './List';
import RightPane from './RightPane';
import {connect} from 'react-redux';
import {getExchangeRates} from '../../actions/exchange';
/**
 *to Hold all the required components required for exchange
 * @param {*} props
 * @return {component}
 */
class Exchange extends React.Component {
  /**
   *
   */
  componentDidMount() {
    this.props.dispatch(getExchangeRates());
  }
  /**
   *
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    const baseCurrency=nextProps.match.params.coin ||'INR';
    (baseCurrency!==nextProps.baseCurrency)
    ?this.props.dispatch(getExchangeRates(baseCurrency)):undefined;
  }
  /**
   *@return {component}
   */
  render() {
    const {baseCurrency} = this.props;
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

const mapStateToProps = (state) => state.exchange;
export default connect(mapStateToProps)(Exchange);
