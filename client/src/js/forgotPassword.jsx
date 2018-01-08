import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormHelperText, FormControl } from 'material-ui/Form';
import '../css/style.css';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,

    },

});
export default class ForgotPassword extends Component {
    constructor(){
        super();
        this.state={
            email: "",
            password: ''
        }
        this.checkEmail=this.checkEmail.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        },()=>{
            this.checkEmail();
        });
    }

    checkEmail() {
        console.log(this.state.email)
        fetch(`/auth/validate?email=${this.state.email}`)
            .then(res=>res.json())
            .then((res) => {
                console.log(res)
                if(res.isRegistered){
                    fetch()
                }
            })
    }


    render(){
        return(
            <div id="forgFrame">
                <Grid item sm={6} md={6} lg={4}>
                    <FormControl className="formElements" >
                        <InputLabel >Email</InputLabel>
                        <Input
                            type="email"
                            onChange={(event) => this.setState({ email: event.target.value })}
                        />
                    </FormControl>
                    <div style={{ paddingTop: 25, textAlign: "center" }}>
                        <Button
                            raised
                            color="primary"
                            type="submit"
                            onClick={(event)=> {
                            this.changeEmail(event);
                                
                            }}
                        > Submit
                        </Button>
                    </div>
                </Grid>
             </div>
        )
    }

}
