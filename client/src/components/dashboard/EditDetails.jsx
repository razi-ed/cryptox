import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import * as ReactRedux from 'react-redux';
import {withRouter} from 'react-router-dom';
import ConnectedNameForm from './Forms/ChangeNameForm';
import ChangePasswordForm from './Forms/ChangePasswordForm';
import {isUserAuthenticated} from
                             '../../js/redux/actions/dashboardActionsCreator';


/**
 * @class
 */
class EditDetails extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      changeNameClicked: false,
      changePasswordClicked: false,
    };
  }

  /**
   * @method
   */
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.dispatch(isUserAuthenticated(localStorage.getItem('token'),
       this.props.history));
    } else {
      this.props.history.push('/login');
    }
  }
  /**
   * @method
   * @return {EditeDetialsHTML}
   */
  render() {
    console.log(this.props.state);

    return (
      <Paper className='user-profile'>
        <Typography type='title' noWrap style={{display: 'flex'}}>
          Name : <Typography type='subheading' style={{paddingLeft: '2%'}}>
          {this.props.state.user.name}
          </Typography>
        </Typography>
        <Button color="primary"
          onClick={() => {
              this.setState({
                changeNameClicked: true,
                changePasswordClicked: false,
              });
            }
          }>
        Change name
      </Button>
      <Button color="primary"
          onClick={() => {
              this.setState({
                changeNameClicked: false,
                changePasswordClicked: true,
              });
            }
          }>
        Change password
      </Button>
      {this.state.changeNameClicked ?
        <ConnectedNameForm/>:
        null
      }
      {this.state.changePasswordClicked ?
        <ChangePasswordForm /> :
        null
      }
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const EditDetailsWithRouter = withRouter(EditDetails);

const ConnectedEditDetails =
ReactRedux.connect(mapStateToProps)(EditDetailsWithRouter);

export default ConnectedEditDetails;
