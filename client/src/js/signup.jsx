import React from "react";
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
import Dialog,{DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      showPassword: false,
      isUserCreated: false,
      isDialogOpen:false,
      passwordColor:"red",
      passwordHelperText:"none",
      confirmPasswordColor:"red",
      confirmHelperText:"none",
      isPasswordMatch:false,
      isPasswordSet:false,
    };
    this.validatePassword=this.validatePassword.bind(this);
    this.confirmPassword=this.confirmPassword.bind(this);
    this.createUser=this.createUser.bind(this);
    this.handleClickIcon=this.handleClickIcon.bind(this);
  }
  createUser() {
    console.log(this.state.name,this.state.email,this.state.password)
    if(this.state.name && this.state.email && this.state.password){
      fetch("/auth/register", {
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name:this.state.name,
          email: this.state.email,
          password:this.state.password
        })
      }).then(res=>res.json()).then(res => {
        console.log(res);
      });
    }
    else{
      this.setState({isDialogOpen:true})
     
    }
  }

  handleClickIcon(){
    this.setState({showPassword:!this.state.showPassword})
  }

  validatePassword(event){
    const pattern=new RegExp(/\w{8,}/)
    this.setState({helperTextVisible:"block"})
    if(event.target.value.match(pattern)){
      this.setState({password:event.target.value,passwordColor:"green",passwordHelperText:"block"})
    }
    else{
      this.setState({password:event.target.value,passwordColor:"red",passwordHelperText:"block"})
    }
  }

  confirmPassword(event){
    this.setState({confirmHelperText:"block"})
    if(this.state.password==event.target.value){
      this.setState({isPasswordMatch:true,confirmPasswordColor:"green",isPasswordSet:true,confirmHelperText:"block"})
    }
    else{
      this.setState({isPasswordMatch:false,confirmPasswordColor:"red",isPasswordSet:false,confirmHelperText:"block"})
    }
  }

  render() {
    return (
      <div>
       
          <div>
          <FormControl className="formElements" >
            <InputLabel>Name</InputLabel>
            <Input 
              autoFocus={true} 
              onChange={(event)=>this.setState({name:event.target.value})}
              />
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel >Email</InputLabel>
            <Input 
              type="email"
              onChange={(event)=>this.setState({email:event.target.value})}
            />
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel>Password</InputLabel>
            <Input
              id="password" 
              type={this.state.showPassword?'text':'password'}
              onChange={this.validatePassword}
              onFocus={this.validatePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.handleClickIcon} >
                    {this.state.showPassword?<VisibilityOff/>:<Visibility/>}
                  </IconButton>
                </InputAdornment>

              }  
              />
              <FormHelperText style={{color:this.state.passwordColor,display:this.state.passwordHelperText}} >Password length must be between 8 to 15 characters characters</FormHelperText>
          </FormControl>
          </div>
          
          <div>
          <FormControl className="formElements" >
            <InputLabel>Re-Enter Password</InputLabel>
            <Input 
              id="confirm" 
              type="password"
              onChange={this.confirmPassword}
             />
            <FormHelperText style={{color:this.state.confirmPasswordColor,display:this.state.confirmHelperText}} >{this.state.isPasswordMatch?'Password Match':'Password Mismatch'}</FormHelperText>
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