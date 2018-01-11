import React from 'react';
/**
 * this class creates a component of list of currencies
 */
export default class List extends React.Component {
   /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state={
      crypto: ['BTC', 'ETH', 'XRP', 'LTC', 'DASH'],
      real: ['INR', 'USD', 'EUR', 'JPY', 'GBP'],
    };
  }
  // getCrypto = () =>{
  //   console.log('get crpto');
  //   fetch('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=15')
  //     .then(response => response.json())
  //     .then(currencies => { console.log(currencies)})
  //     .catch(e=>console.log(e))
  // }
  //  componentDidMount () {
  //   this.getCrypto();
  // }
  render() {
    return (
      <h1>list</h1>
    );
  }
}
