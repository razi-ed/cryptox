import React from 'react';
import Button from 'material-ui/Button';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';

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

  handleMouseDownIcon(event){
    event.preventDefault();
  }


  validatePassword(event){
    const pattern=new RegExp(/\w{8,}/)
    this.setState({passwordHelperText:"block"})
    if(event.target.value.match(pattern)){
      this.setState({password:event.target.value,passwordColor:"green"})
    }
    else{
      this.setState({password:event.target.value,passwordColor:"red"})
    }
  }

  confirmPassword(event){
    this.setState({confirmHelperText:"block"})
    if(this.state.password==event.target.value){
      this.setState({isPasswordMatch:true,confirmPasswordColor:"green"})
    }
    else{
      this.setState({isPasswordMatch:false,confirmPasswordColor:"red"})
    }
  }

  render() {
    return (
      <div>
          <h1 style={{textAlign:"center"}} >Create New Account</h1>
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