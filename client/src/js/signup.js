import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'

const styles=theme=>({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding:20,
    width: 100,
  },
  spacing:{
    padding:20
  }
})

export default class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showPassword:false
    }
  }
  validateEmail(){
    
  }
  
  validatePassword(event){
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  
    if(event.target.value.match(passw))   
    {   
      // alert('Correct, try another...')  
      return true;  
    }  
    else  
    {   
      // alert('Wrong...!')  
      return false;  
    }  
  }

  // handleClickShowPasssword(){
  //   this.setState({showPassword:!this.state.showPassword})
  // }

  render(){
    return(
      <div>
      <Grid container>
      <Grid item sm={4} xs={2}/>
      <Grid item sm={4} xs={8} style={{alignItems:"center"}}  >
      <form action="/auth/registerUser" method="POST">
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
            label="Email"
            // onChange={this.validateEmail}
          
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
            id="password"
            label="Re-Enter Password"
            type="password"
            onFocus={()=>document.getElementById('message').style.display='block'}
            onBlur={()=>document.getElementById('message').style.display='block'}
          />
          
      </div>
      <div id="message" style={{display:"none"}}><h1>Hello</h1></div>
      <div style={{paddingTop:25,textAlign:"center"}}>
        <Button raised color="primary" type="submit">Create New Account</Button>
      </div>
      </form>
     
      </Grid>
      
      <Grid item sm={4} xs={6}/>
      </Grid>
      
      </div>
    )
  }
}