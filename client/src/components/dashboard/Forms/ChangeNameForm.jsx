import React from 'react';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Button from 'material-ui/Button';
import {changeName} from '../../../js/redux/actions/userActionsCreator';
import {withRouter} from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import Grid from 'material-ui/Grid';

/**
 * @class
 */
class ChangeNameForm extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      name: null,
    };
    this.changeNameRequest = this.changeNameRequest.bind(this);
  }

  /**
   * @method
   */
  changeNameRequest() {
    console.log(this.state);

    fetch('/profile', {
      method: 'PUT',
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      this.props.history.push('/dashboard');
    })
    .catch((err) => {
      this.props.history.push('/login');
    });
  }

  /**
   * @method
   * @return {html}
   */
  render() {
    return (
      <div id = 'change-name-form'>
        <Grid item xs={12} sm={8} md= {8}>
        <form onSubmit = {(e) => e.preventDefault() }>
          <FormControl
              className = 'form'
              required={true}
          >
          <InputLabel >Name</InputLabel>
          <Input
            autoFocus={true}
            type='text'
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
          />
          </FormControl>
          <div id='name-button' style={{margin: '5%'}}>
              <Button type="submit"
                raised color="primary"
                className="button"
                onClick={this.changeNameRequest}>
              Submit
              </Button>
            </div>
        </form>
        </Grid>
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};


const ConnectedNameForm = ReactRedux.connect(mapStateToProps)(ChangeNameForm); */

export default withRouter(ChangeNameForm);
