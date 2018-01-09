import React, {Component } from 'react';
import Input, {InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import {FormHelperText, FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import ResetPassword from './ResetPassword';
import '../../css/style.css';

export default class ForgotPassword extends Component {
    constructor(){
        super();
        this.state={
            email: ' ',
            password: ' ',
            isRegistered:false,
            emailHelperTextVisible: 'none', 
            emailColor: 'red',  
        }
        this.checkEmail=this.checkEmail.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
    
    checkEmail() {
        console.log(this.state.email)
        fetch(`/auth/validate?email=${this.state.email}`)
        .then(res=>res.json())
        .then((res) => {
            console.log(res)
            if (res.isRegisered){
                this.setState({
                    isRegistered: res.isRegisered,
                })
                
            }
            else{
                this.setState({emailHelperTextVisible: ' block' });
            }
            
            
        })
    }
    
    
    render(){
        return(
            <div id='forgot-password-frame'>
                <Grid item sm={6} md={6} lg={4}>
                <h1>Reset Your Password</h1>
                    <FormControl className='formElements' >
                        <InputLabel >Email</InputLabel>
                        <Input
                        type='email'
                        onChange={this.changeEmail}
                        />
                        <FormHelperText
                            style={
                                {
                                    color: this.state.emailColor,
                                    display: this.state.emailHelperTextVisible,
                                }
                            }
                        >
                           Email not registered
                        </FormHelperText>


                    </FormControl>
            
                    {this.state.isRegistered == false ? (<div style={{paddingTop: 25, textAlign: 'center' }}>
                        <Button
                        raised
                        color='primary'
                        type='submit'
                        onClick={()=> {
                            this.checkEmail();    
                        }}
                        > Submit
                        </Button>
                    </div>):<ResetPassword email={this.state.email}/>}
        
                </Grid>
            </div>
        )
    }
    
}
