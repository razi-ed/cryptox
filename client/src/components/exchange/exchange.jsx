import React from 'react';
import List from './List';
/**
 * this class creates Exchange component
 */
export default class Exchange extends React.Component {
   /**
   * this renders the component
   * @return {component}
   */
  render() {
    return (
      <div className="exchange">
        <List/>
      </div>
    );
  };
};
