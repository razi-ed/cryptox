import React from 'react';
import Header from './Header';
/**
 * class that creates Home component
 */
export default class Home extends React.Component {
  /**
   * this functions renders home component
   * @return {component} Home component
   */
  render() {
    return (
      <div id='home'>
        <Header />
          <h1>Home</h1>
      </div>
      );
  }
}
