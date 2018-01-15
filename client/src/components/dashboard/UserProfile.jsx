import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


/**
 * UserDetails component
 * @class
 */
export default class UserProfile extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
    };
  }
  /**
   * @method
   */
  componentDidMount() {
    fetch('/profile', {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
      this.setState({
        email: res.email,
        name: res.name,
      });
    }).catch();
  }
  /**
   * @method
   * @return {userDetailsHTML}
   */
  render() {
    return (
      <div className='user-profile'>
        <Grid spacing={0} container justify='center'>
          <Paper>
            {this.state.name}
            {this.state.email}
          </Paper>
        </Grid>
      </div>
    );
  }
}
