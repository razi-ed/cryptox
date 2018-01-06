import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default class Header extends React.Component{
  render(){
    return(
      <div style={{display:"flex"}}>
        <AppBar position="static">
        
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={{textAlign:"center"}}>
          <Link to="/">CrytpX</Link>
            
          </Typography>
         </div>
         <div>
            <Button color="contrast" className="login"><Link to="/login">Login/SignUp</Link></Button>
            </div>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}
