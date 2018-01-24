import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as headerActions from '../../js/redux/actions/headerActions';

const styles =(theme)=> ({
  list: {
    width: 250,
  },
});

class drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      booly: true,
    };
  }

  // openDrawer = () => {
    // this.setState({
    //   open: true,
    // });
  //   props.openAppDrawer()
  // };

  closeDrawer = () =>{
    this.setState({
      booly: false
    });
  }

  whenToggleDrawerChanges = (booly) => {
    
    this.openDrawer();
  }

  // componentsWillReceiveProps(nextProps) {
  //   if (nextProps.toggleDrawer)
  //   this.openDrawer();
  // }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={true} onClose={this.props.closeDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.closeDrawer}
            onKeyDown={this.props.closeDrawer}
          >
            {sideList}
          </div>
          </Drawer>
          </div>
      );
    }
  }

drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(headerActions, dispatch);
const AppBarDrawer = connect(mapStateToProps, mapDispatchToProps)(drawer);

export default withStyles(styles)(AppBarDrawer);