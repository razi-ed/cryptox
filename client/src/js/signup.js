import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Input,{InputLabel} from 'material-ui/Input'
import {FormHelperText,FormControl} from 'material-ui/Form'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import {InputAdornment} from "material-ui/Input";
import IconButton from "material-ui/IconButton";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      isUserCreated: false
    };
    this.handleClickShowPasssword=this.handleClickShowPasssword.bind(this)
  }
  createUser() {
    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    }).then(res => {
      console.log(res);
    });
  }

  handleClickShowPasssword(){
    this.setState({showPassword:!this.state.showPassword})
  }

  render() {
    return (
      <div>
          <div>
          <FormControl className="formElements" >
            <InputLabel>Name</InputLabel>
            <Input autoFocus="true" id="new-name" type="name"/>
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel >Email</InputLabel>
            <Input id="email" type="email"/>
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel>Password</InputLabel>
            <Input
              id="password" 
              type={this.state.showPassword?'text':'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.handleClickShowPasssword} >
                    {this.state.showPassword?<VisibilityOff/>:<Visibility/>}
                  </IconButton>
                </InputAdornment>

              }  
              />
              <FormHelperText>Password must have atleat 8 characters</FormHelperText>
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel>Re-Enter Password</InputLabel>
            <Input id="confirm" type="password"
             />
          </FormControl>
          </div>
              <div style={{ paddingTop: 25, textAlign: "center" }}>
                <Button
                  raised
                  color="primary"
                  type="submit"
                  onClick={this.createUser}
                >
                  Create New Account
                </Button>
              </div>
        </div>
    );
  }
}