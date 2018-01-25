import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

/**
 * UserDetails component
 * @class
 */
class UserProfile extends React.Component {
  /**
   * @method
   */
  /**
   * @method
   * @return {userDetailsHTML}
   */
  render() {
    return (
      <div className='user-profile'>
        <Grid spacing={0} container justify='center'>

            <Typography type="display1" gutterBottom>
              Hello, {this.props.state.user.name}

            </Typography>
            {/* this.props.email */}

        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const ConnectedUserProfile = ReactRedux.connect(mapStateToProps)(UserProfile);

export default ConnectedUserProfile;
