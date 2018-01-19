import React from 'react';
import Button from 'material-ui/Button';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import Google from './Google';
import {changeName, changeEmail} from
'../../js/redux/actions/userActionsCreator';
import * as ReactRedux from 'react-redux';
/**
* this class creates a component for signup
*/
class SignUp extends React.Component {
  /**
  * @param {props} props
  */
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      showPassword: false,
      passwordColor: 'red',
      passwordNotFound: 'Please Enter Password',
      isPasswordHelperTextVisible: 'none',
      confirmPasswordColor: 'red',
      isconfirmHelperText: 'none',
      doesPasswordContainLowerCase: 'red',
      doesPasswordContainUpperCase: 'red',
      doesPasswordContainNumber: 'red',
      doesPasswordLengthSatisfied: 'red',
      isPasswordSet: false,
      isPasswordMatch: false,
    };
    this.validatePassword=this.validatePassword.bind(this);
    this.confirmPassword=this.confirmPassword.bind(this);
    this.createUser=this.createUser.bind(this);
    this.handleClickIcon=this.handleClickIcon.bind(this);
  }
  /**
  * this function sends a post request to registerUser api to create a new user
  */
  createUser() {
    if (this.state.isPasswordSet) {
      if (this.props.name && this.props.email && this.state.isPasswordMatch) {
        fetch('/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.props.name,
            email: this.props.email,
            password: this.state.password,
          }),
        }).then((res)=>res.json()).then((res) => {
          console.log(res);
        });
      } else {
        this.setState({
          isPasswordHelperTextVisible: 'block',
          isconfirmHelperText: 'block',
        });
      }
    } else {
      this.setState({
        isPasswordHelperTextVisible: 'block',
        passwordHelperText: this.state.passwordNotFound,
        isconfirmHelperText: 'block',
      });
    }
  }
  /**
  * this function is an event handler which is called when eye icon is clicked
  */
  handleClickIcon() {
    this.setState({showPassword: !this.state.showPassword});
  }

  /**
  * this fuction is called to prevent default action when eye icon is clicked
  * @param {event} event
  */
  handleMouseDownIcon(event) {
    event.preventDefault();
  }
  /**
  * this function is called when there is change in value in password field
  * @param {event} event
  */
  validatePassword(event) {
    this.setState({isPasswordHelperTextVisible: 'block'});
    const lowerCase=/([a-z])/g;
    const upperCase=/([A-Z])/g;
    const numbers = /([0-9])/g;
    const len= event.target.value.length;
    const validator=(reg)=>event.target.value.match(reg);
    !validator(lowerCase)?
    this.setState(
      {
        passwordHelperText: 'must contain lowercase letters',
        passwordColor: 'red',
      }):
      !validator(upperCase)?
      this.setState(
        {
          passwordHelperText: 'must contain uppercase letters',
          passwordColor: 'red',
        }):
        !validator(numbers)?
        this.setState(
          {
            passwordHelperText: 'must conatin a number',
            passwordColor: 'red',
          }):
          len<8?
          this.setState(
            {
              passwordHelperText: 'must contain minimum of 8 characters',
              passwordColor: 'red',
              isPasswordSet: false,
            }):
            this.setState(
              {
                password: event.target.value,
                passwordHelperText: 'Valid password',
                passwordColor: 'green',
                isPasswordSet: true,
              });
            }
    /**
    * this function is called when there is change in Re-Enter password field
    * @param {event} event
    */
    confirmPassword(event) {
    this.setState({isconfirmHelperText: 'block'});
    if (this.state.password==event.target.value) {
      this.setState({
        isPasswordMatch: true,
        confirmPasswordColor: 'green',
      });
    } else {
      this.setState({
        isPasswordMatch: false,
        confirmPasswordColor: 'red',
      });
    }
  }
/**
* this function is called when react compnent is called to render
* @return {component}
*/
  render() {
    return (
      <div id='signup-frame'>
      <h1 style={{textAlign: 'center'}} >Create New Account</h1>
      <form onSubmit={(event)=> event.preventDefault()}>
      <div>
      <FormControl
      className='form-elements'
      required={true}
      >
      <InputLabel>Name</InputLabel>
      <Input
      autoFocus={true}
      onChange={(event)=>this.props.dispatch(changeName(event.target.value))}
      />
      </FormControl>
      </div>
      <div>
      <FormControl
      className='form-elements'
      required={true}
      >
      <InputLabel >Email</InputLabel>
      <Input
      type='email'
      onChange={(event)=>this.props.dispatch(changeEmail(event.target.value))}
      />
      </FormControl>
      </div>
      <div>
      <FormControl
      className='form-elements'
      >
      <InputLabel>Password</InputLabel>
      <Input
      type={this.state.showPassword?'text': 'password'}
      onChange={this.validatePassword}
      onFocus={this.validatePassword}
      endAdornment={
        <InputAdornment position='end' >
        <IconButton
        onClick={this.handleClickIcon}
        onMouseDown={this.handleMouseDownIcon}
        >
        {this.state.showPassword?<VisibilityOff/>: <Visibility/>}
        </IconButton>
        </InputAdornment>
      }
      />
      <FormHelperText
      style={
        {
          color: this.state.passwordColor,
          display: this.state.isPasswordHelperTextVisible,
        }
      }
      >
      {this.state.passwordHelperText}
      </FormHelperText>
      </FormControl>
      </div>
      <div>
      <FormControl
      className='form-elements'
      required={true}
      >
      <InputLabel>Re-Enter Password</InputLabel>
      <Input
      type='password'
      onChange={this.confirmPassword}
      />
      <FormHelperText
      style={
        {
          color: this.state.confirmPasswordColor,
          display: this.state.isconfirmHelperText,
        }
      }
      >
      {this.state.isPasswordSet?(this.state.isPasswordMatch?
        'Password Match': 'Password Mismatch'):'Enter Password' }
        </FormHelperText>
        </FormControl>

        </div>
        <div style={{paddingTop: 25, textAlign: ' center'}}>
        <Button
        raised
        color='primary'
        type='submit'
        onClick={this.createUser}
        >
        Create New Account
        </Button>
        <hr className="hr-text" data-content="Or"></hr>
        <div id="google-signin">
        <Google/>
        </div>
        </div>
        </form>
        </div>
      );
  }
}
/**
 *
 * @param {state} state
 * @return {state} user
 */
function mapStateToProps(state) {
  return {
    email: state.user.email,
    name: state.user.name,
  };
}

const connectSignUp = ReactRedux.connect(mapStateToProps)(SignUp);
export default connectSignUp;
