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
import * as TradeActions from '../../js/redux/actions/buySellActionsCreator';

const units = [1, 0.1, 0.001];
/**
 *A component to facilitate buy and sell opertaions
 * @param {*} name
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
  action = async (action) => {
    try {
      let response =await fetch(`/orders/${action}`, {
        method: 'POST',
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          units: ((this.state.units *
            this.state.quantity) * (this.mulFactor(this.state.trade))).toFixed(3),
          type: this.props.baseCurrency,
          tradeFor: this.state.trade,
          currentPrice: this.mulFactor(this.state.trade),
          }),
        });
        let r= await response.json();
          console.log(r);
          this.setState({open: true}, ()=>{
            this.setState({
              message: `successfully ${action=='buy'?'bought':'sold'} ${
                 (this.state.units * this.state.quantity).toFixed(3)}
          ${this.state.trade}`,
            });
          });
    } catch (e) {
console.log(e);
}
      }

  handleChange = name => event =>this.setState({[name]: event.target.value});
  mulFactor = (Currency) => {
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
        raised
        className='BuySellCard'
        style={{
        marginTop: 5,
        width: '100vw',
      }}>
        <CardMedia
          style={{
          height: 150,
        }}
          image="https://blink.ucsd.edu/_images/homepage/landing-pages/buy-cart.png"
          title="Contemplative Reptile"/>
        <Typography
          type="display1"
          style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {`base currency ${this.props.baseCurrency}`}
        </Typography>
        <CardContent className='trade'>
          <TextField
            id="select-currency"
            select
            label="units"
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
            select
            label="trade for"
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
          {`${ (this.state.units * this.state.quantity).toFixed(3)}
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
            style={{
            width: 80,
          }}
            onClick={()=>this.action('buy')}>
            BUY
          </Button>
          <Button
            raised
            color="primary"
            style={{
            width: 80,
          }}
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
const SBuySellCard = connect(mapStateToProps, mapDispatchToProps)(BuySellCard);

export default SBuySellCard;
