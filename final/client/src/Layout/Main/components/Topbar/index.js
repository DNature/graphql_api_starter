import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  ...theme.theme,
  root: {
    boxShadow: "none"
  },
  logo: {
    color: "white"
  }
});

const Topbar = props => {
  const { classes, className, ...rest } = props;
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/" className={classes.logo}>
          <Typography variant="h4" className={classes.logo}>
            Hello
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};
Topbar.propTypes = {
  className: PropTypes.string
};
export default withStyles(styles)(Topbar);
