import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems} from './drawerList'

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
    };
  }

  openDrawer = () => {
    this.setState({
      open: true,
    });
  };

  closeDrawer = () =>{
    // this.setState({
    //   open: false
    // });
    this.props.toggleDrawer = false;
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
        <Drawer open={this.props.toggleDrawer} onClose={this.closeDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer}
            onKeyDown={this.closeDrawer}
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

export default withStyles(styles)(drawer);