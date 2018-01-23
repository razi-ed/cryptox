import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  MenuItem,
  TextField,
  Input,
  Snackbar,
} from 'material-ui';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {bsAction} from '../../ajax-calls/BuySellActions';
import * as TradeActions from '../../actions/buySellActionsCreator';

const units = [1, 0.1, 0.001];
/**
 *A component to facilitate buy and sell opertaions
 * @param {action} action
 * @param {*} Currency
 */
class BuySellCard extends React.Component {
  /**
   *constructor for BuySellcard component
   */
  constructor() {
    super();
    this.state = {
      trade: 'USD',
      base: 'INR',
      units: 1,
      quantity: 1,
      open: false,
      message: '',
    };
  }
  baseUnits = () => (this.state.units * this.state.quantity).toFixed(3)
  action = async (action) => {
    try {
      let response =await bsAction(action, this.state, this.mulFactor, this.props);
        console.log(response);
          this.setState({open: true}, ()=>{
            this.setState({
              message: `successfully ${action=='buy'?'bought':'sold'} ${
                 this.baseUnits()} ${this.state.trade}`,
            });
          });
    } catch (e) {
        console.log(e);
        }
      }

handleChange = name => event =>this.setState({[name]: event.target.value});

mulFactor = Currency => {
    if (this.props.real.indexOf(Currency) === -1) {
      return this.props[Currency].price;
    } else {
      return (1 / this.props[Currency].price);
    }
  };
  /**
   *@return {component} the JSX component of the class
   */
  render() {
    return (
      <Card
        raised className='BuySellCard'
        style={{marginTop: 5, width: '100vw'}}>
        <CardMedia
          style={{height: 150}}
          image="https://blink.ucsd.edu/_images/homepage/landing-pages/buy-cart.png"/>
        <Typography
          type="display1" style={{
          display: 'flex', justifyContent: 'center'}}>
          {`base currency ${this.props.baseCurrency}`}
        </Typography>
        <CardContent className='trade'>
          <TextField
            id="select-currency"
            select label="units"
            value={this.state.units}
            onChange={this.handleChange('units')}
            helperText="Please select units"
            margin="normal">
            {units.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Input
            id="quantity"
            type='number'
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}/>
          <TextField
            id="select-currency"
            select label="trade for"
            value={this.state.trade}
            onChange={this.handleChange('trade')}
            helperText="to"
            margin="normal">
            {this.props.real.concat(this.props.crypto)
              .map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </TextField>
        </CardContent>
        <Typography
          type="display1"
          style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {`${ this.baseUnits()}
           ${this.state.trade}=
           ${ ((this.state.units *
            this.state.quantity) *
             (this.mulFactor(this.state.trade))).toFixed(3)}
            ${this.props.baseCurrency}`}
        </Typography>
        <CardActions
          style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <Button
            raised
            color="primary"
            style={{width: 80}}
            onClick={()=>this.action('buy')}>
            BUY
          </Button>
          <Button
            raised
            color="primary"
            style={{width: 80}}
            onClick={()=>this.action('sell')}>
            SELL
          </Button>
        </CardActions>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          message={this.state.message}
          onClose={() => this.setState({open: false})}/>
      </Card>
    );
  }
};

const mapStateToProps = state => state.exchange;

const mapDispatchToProps = dispatch =>
 bindActionCreators(TradeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuySellCard);
