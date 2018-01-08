import React from "react";
import Button from "material-ui/Button";
import Input,{InputLabel,InputAdornment} from 'material-ui/Input'
import {FormHelperText,FormControl} from 'material-ui/Form'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import IconButton from "material-ui/IconButton";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      showPassword: false,
      passwordColor:"red",
      passwordHelperText:"none",
      confirmPasswordColor:"red",
      confirmHelperText:"none",
      isPasswordMatch:false,
      isPasswordSet:false,
    };
    this.handleClickShowPasssword=this.handleClickShowPasssword.bind(this)
  }
  
  createUser(){
    console.log(document.getElementById('name').value)
    fetch("/auth/register",{
      method:"POST",
      headers:{
      'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      password:document.getElementById('password').value,
      })
    }).then(res=>res.json()).then((res)=>{
      console.log(res);
    });
  }

  handleMouseDownIcon(event){
    event.preventDefault();
  }


  validatePassword(event){
    const pattern=new RegExp(/\w{8,}/)
    this.setState({passwordHelperText:"block"})
    if(event.target.value.match(pattern)){
      this.setState({password:event.target.value,passwordColor:"green"})
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
          <h1 style={{textAlign:"center"}} >Create New Account</h1>
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
                  <IconButton 
                    onClick={this.handleClickIcon}
                    onMouseDown={this.handleMouseDownIcon}
                  >
                    {this.state.showPassword?<VisibilityOff/>:<Visibility/>}
                  </IconButton>
                </InputAdornment>

              }  
              />
              <FormHelperText style={{color:this.state.passwordColor,display:this.state.passwordHelperText}} >Password length must be atleast 8 characters</FormHelperText>
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
      </div>
    );
  }
}