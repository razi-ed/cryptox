import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Paper, Grid, Typography} from 'material-ui';

const styles = (theme) => ({
root: {
    backgroundColor: theme.palette.primary[500],
    height: theme.spacing.unit*7,
},
footerText: {
    fontSize: theme.spacing.unit * 3,
    textAlign: 'right',
    color: theme.palette.text.primary,
},
});


/**
 * @class
 */
class Footer extends React.Component {
    /**
     * @function
     * @return {footerHtml}
     */
    render() {
        const {classes} = this.props;

        return (
            <footer className={classes.root}>
            <p className={classes.footerText}>&copy; Team CryptoX</p>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
