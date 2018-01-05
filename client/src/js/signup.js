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

  validatePassword(event) {
    var lowerCaseLetters = /[a-z]/g;
    if (event.target.value.match(lowerCaseLetters)) {
      document.getElementById("letter").classList.remove("invalid");
      document.getElementById("letter").classList.add("valid");
    } else {
      document.getElementById('letter').classList.remove("valid");
      document.getElementById('letter').classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (event.target.value.match(upperCaseLetters)) {
      document.getElementById("capital").classList.remove("invalid");
      document.getElementById("capital").classList.add("valid");
    } else {
      document.getElementById("capital").classList.remove("valid");
      document.getElementById("capital").classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (event.target.value.match(numbers)) {
      document.getElementById("number").classList.remove("invalid");
      document.getElementById("number").classList.add("valid");
    } else {
      document.getElementById("number").classList.remove("valid");
      document.getElementById("number").classList.add("invalid");
    }

    // Validate length
    if (event.target.value.length >= 8) {
      document.getElementById("length").classList.remove("invalid");
      document.getElementById("length").classList.add("valid");
    } else {
      document.getElementById("length").classList.remove("valid");
      document.getElementById("length").classList.add("invalid");
    }
  }

  handleClickShowPasssword(){
    this.setState({showPassword:!this.state.showPassword})
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={4} xs={2} />
          <Grid item sm={4} xs={8} style={{ alignItems: "center" }}>
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
            
              <div id="message" style={{ display: "none" }}>
                <h3>Password must contain the following:</h3>
                <p id="letter" className="invalid">
                  A <b>lowercase</b> letter
                </p>
                <p id="capital" className="invalid">
                  A <b>capital (uppercase)</b> letter
                </p>
                <p id="number" className="invalid">
                  A <b>number</b>
                </p>
                <p id="length" className="invalid">
                  Minimum <b>8 characters</b>
                </p>
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
          </Grid>

          <Grid item sm={4} xs={6} />
        </Grid>
      </div>
    );
  }
}