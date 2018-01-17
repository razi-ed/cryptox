import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import * as ReactRedux from 'react-redux';


/**
 * @class
 */
class EditDetails extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      changeNameClicked: false,
      changePasswordClicked: false,
    };
  }

  /**
   * @method
   */

  /**
   * @method
   * @return {EditeDetialsHTML}
   */
  render() {
    console.log(this.props.state);

    return (
      <Paper className='user-profile'>
        <Typography type='title' noWrap style={{display: 'flex'}}>
          Name : <Typography type='subheading' style={{paddingLeft: '2%'}}>
          {this.props.state.user.name}
          </Typography>
        </Typography>
        <Button color="primary">
        Change name
      </Button>

      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const ConnectedEditDetails = ReactRedux.connect(mapStateToProps)(EditDetails);

export default ConnectedEditDetails;
