import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import * as ReactRedux from 'react-redux';

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
