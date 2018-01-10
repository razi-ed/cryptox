import React from 'react';
import Input, {InputLabel} from 'material-ui/Input';
import Button from 'material-ui/Button';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Grid from 'material-ui/Grid';

import ResetPassword from './ResetPassword';
import '../../css/style.css';
/**
 *@class
 */
export default class ForgotPassword extends React.Component {
    /**
     *@constructor
     */
    constructor() {
        super();
        this.state={
            email: ' ',
            password: ' ',
            isRegistered: false,
            emailHelperTextVisible: 'none',
            emailColor: 'red',
        };
        this.checkEmail=this.checkEmail.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }
    /**
     *
     * @param {event} event
     */
    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
/**
 *@function
*/
    checkEmail() {
        fetch(`/auth/validate?email=${this.state.email}`)
        .then((res)=>res.json())
        .then((res) => {
            console.log(res);
            if (res.isRegistered) {
                this.setState({
                    isRegistered: res.isRegistered,
                    emailHelperTextVisible: 'none',
                });
            } else {
                this.setState({emailHelperTextVisible: ' block'});
            }
        });
    }

/**
 * @function
 * @return {forgotPasswordhtml}
 */
    render() {
        return (
            <div id='forgot-password-frame'>
                <Grid item sm={6} md={6} lg={4}>
                <h1>Reset Your Password</h1>
                    <FormControl className='form-elements' >
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

                    {this.state.isRegistered == false ?
                        (<div style={{paddingTop: 25, textAlign: 'center'}}>
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
        );
    }
}
