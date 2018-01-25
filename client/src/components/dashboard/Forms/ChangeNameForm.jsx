import React from 'react';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';
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
      validationHelperTextVisible: 'none',
      actionmessage: `couldn't update name`,
    };
    this.changeNameRequest = this.changeNameRequest.bind(this);
  }

  /**
   * @method
   */
  changeNameRequest() {
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
      if (res.success) {
        this.setState({
          validationHelperTextVisible: 'block',
          actionmessage: 'Name updated Succesfully',
        });
      }
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

        <h4 style={{
            color: 'red',
            display: this.state.validationHelperTextVisible,
            paddingTop: 12,
          }}>
          {this.state.actionmessage}
        </h4>
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

export default withRouter(ChangeNameForm);
