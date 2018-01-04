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
    console.log(event.target.value)
  }

  handleClickShowPasssword(){
    this.setState({showPassword:!this.state.showPassword})
  }

  render(){
    return(
      <div>
      <Grid container spacing={24}>
      <Grid item sm={4} xs={4}/>
      <Grid item sm={4} xs={4} className={this.props.spacing}>
      <form method="POST">
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
      
          />
      </div>
      <div>
       
          <TextField  
            required
            fullWidth      
            id="password"
            label="Re-Enter Password"
            type="password"

          />
      </div>
      <div style={{padding:25}}>
        <Button raised color="accent">Cancel</Button>
        <Button raised color="primary">Create New Account</Button>
      </div>
      </form>
     
      </Grid>
      
      <Grid item sm={2} xs={4}/>
      </Grid>
      
      </div>
    )
  }
}