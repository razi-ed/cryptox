import React from 'react';
import { render } from 'react-dom';
import SignUp from './signup'


export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <SignUp/>
        {/* <Footer/> */}
      </div>
    );
  }
}



render( <App /> , document.getElementById('app'));