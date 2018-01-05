import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'
import OverridesClassNames from './icon'
export default class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showPassword:false,
      isUserCreated:false
    }
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
    })
  }

  validatePassword(event){
    var lowerCaseLetters = /[a-z]/g;
  if(event.target.value.match(lowerCaseLetters)) {  
    document.getElementById('letter').classList.remove('invalid');
    document.getElementById('letter').classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(event.target.value.match(upperCaseLetters)) {  
    document.getElementById('capital').classList.remove("invalid");
    document.getElementById('capital').classList.add("valid");
  } else {
    document.getElementById('capital').classList.remove("valid");
    document.getElementById('capital').classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
    if(event.target.value.match(numbers)) {  
      document.getElementById('number').classList.remove("invalid");
      document.getElementById('number').classList.add("valid");
    } else {
      document.getElementById('number').classList.remove("valid");
      document.getElementById('number').classList.add("invalid");
    }
    
    // Validate length
    if(event.target.value.length >= 8) {
      document.getElementById('length').classList.remove("invalid");
      document.getElementById('length').classList.add("valid");
    } else {
      document.getElementById('length').classList.remove("valid");
      document.getElementById('length').classList.add("invalid");
    }
  }

  // handleClickShowPasssword(){
  //   this.setState({showPassword:!this.state.showPassword})
  // }

  render(){
    return(
      <div>
     
      <div>
        <h1>Create New Account</h1>
        <div>
          <TextField
            required
            fullWidth
            id="name"
            label="Name"
          />
        </div>
      
      <div>
          <TextField
            required
            fullWidth
            id="email"
            type="email"
            label="Email"          
          />
      </div>
      
      <div>
          <TextField  
            required
            fullWidth      
            id="password"
            label="Password"
            type="password"
            onChange={this.validatePassword}
            onFocus={()=>document.getElementById('message').style.display='block'}
            onBlur={()=>document.getElementById('message').style.display='none'}
          />
      </div>
      <div>
       
          <TextField  
            required
            fullWidth      
            label="Re-Enter Password"
            type="password"
            onFocus={()=>document.getElementById('message').style.display='block'}
            onBlur={()=>document.getElementById('message').style.display='block'}
          />
          
      </div>
      <div id="message" style={{display:"none"}}>
      <h3>Password must contain the following:</h3>
          <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
          <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
          <p id="number" className="invalid">A <b>number</b></p>
          <p id="length" className="invalid">Minimum <b>8 characters</b></p>
      </div>
      
      <div style={{paddingTop:25,textAlign:"center"}}>
        <Button raised color="primary" type="submit" onClick={this.createUser}>Create New Account</Button>
      </div>
      </div>
      <hr className="hr-text" data-content="Or"></hr>
          <div id="signG">
           <OverridesClassNames/>
          </div>
     
      </div>
    )
  }
}