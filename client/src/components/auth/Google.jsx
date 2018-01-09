import React from 'react';
import GoogleButton from 'react-google-button';
/**
 * returns google button.
 * @return {component} .
 */
export default class Google extends React.Component {
  /**
   * this function returns returns google button as  compnent
   * @return {component}
   */
  render() {
    return (
      <a href="http://localhost:3000/auth/google">
      <GoogleButton
        type="dark"/>
      </a>
    );
  }
};
