import React, { Component } from 'react';
import {  BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import '../css/style.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'block',
  },


})




export  class Login extends Component {
  state = {
    email: "",
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {

    this.setState({
      [prop]: event.target.value,
    });
    console.log(this.state.email);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid item sm={4}></Grid>
        <Grid id='frame' item sm={4}>
        
          <form noValidate autoComplete="off">
            <h2>Log Into Your Account</h2>
              <TextField fullWidth
                required
                id="email"
                label="Email" 
                type="Email"
               // value={this.state.email}
               // onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField fullWidth
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />

          </form>
          <div id='button_line'>
            <Button type="submit" raised color="primary" label="Log In" className={classes.button}>
              Log In
        </Button>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
          <hr className="hr-text" data-content="Or"></hr>
        </Grid>

        <Grid item sm={4}></Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

// export default withStyles(styles)(Login);
// class Form extends Component{
//   // render(){
//   //   return (
      


//   //     );
//   // }
// }

// module.exports=Login;
