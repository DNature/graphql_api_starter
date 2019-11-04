import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Typography,
  withStyles,
  Card,
  CardHeader,
  Avatar,
  Container,
  IconButton
} from "@material-ui/core";
import {
  CloudUpload as CloudUploadIcon,
  Add as AddIcon
} from "@material-ui/icons";

const styles = theme => ({
  ...theme.theme,
  addIcon: {
    cursor: "pointer"
  },
  avatar: {
    background: theme.palette.primary.main
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <>
      <Container fixed maxWidth="sm">
        <form noValidate>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <CloudUploadIcon color="inherit" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" component="span">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="file-input"
                  />
                  <label htmlFor="file-input">
                    <AddIcon
                      color="primary"
                      variant="contained"
                      className={classes.addIcon}
                    />
                  </label>
                </IconButton>
              }
              title="Upload a file"
              subheader="Click the plus icon To add Files for Upload"
            />
          </Card>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginTop: 20 }}
          >
            Upload
          </Button>
        </form>
      </Container>
    </>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
