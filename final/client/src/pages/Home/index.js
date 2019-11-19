import React, { useState, useEffect, useRef } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { DropzoneArea, DropzoneDialog } from 'material-ui-dropzone';
import { withStyles, Container } from "@material-ui/core";

import Files from "./components/Files";
import UploadForm from "./UploadForm";

const styles = theme => ({
  ...theme.theme,
  addIcon: {
    cursor: "pointer"
  },
  container: {
    marginBottom: theme.spacing(5)
  }
});

const Home = props => {
  const { classes } = props;

  const apolloClient = useApolloClient();
  const [uploadFileMutation] = useMutation(UPLOAD_FILE);
  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }) => {
    // validity.valid &&
    console.log(file);
    uploadFileMutation({ variables: { file } }).then(() => {
      apolloClient.resetStore();
    });
  };

  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        {/* <UploadForm onUpload={onUpload} /> */}
        TODO: <input type="file" required onChange={onChange} />
      </Container>

      <div>
        <Files />
      </div>
    </>
  );
};

const onUpload = file => console.log(file);
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      filename
    }
  }
`;

export default withStyles(styles)(Home);
