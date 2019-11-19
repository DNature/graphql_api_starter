import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const UPLOADS_QUERY = gql`
  query getFiles {
    getFiles {
      _id
      filename
      mimetype
      path
    }
  }
`;

const styles = theme => ({
  ...theme.theme,
  avatar: {
    background: theme.palette.primary.main
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  divider: {
    marginTop: theme.spacing(3)
  }
});

const Files = props => {
  const { classes } = props;
  const { data: { getFiles = [] } = {} } = useQuery(UPLOADS_QUERY);

  if (getFiles) {
    console.log(getFiles);
  }

  return (
    <>
      {getFiles &&
        getFiles.map(file => (
          <Container maxWidth="sm" key={file._id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title={file.filename}
              />
              {file.mimetype === 'image/jpg' ||
              file.mimetype === 'image/png' ||
              file.mimetype === 'image/jpeg' ||
              file.mimetype === 'image/gif' ? (
                <CardMedia
                  className={classes.media}
                  image={file.path}
                  title={file.filename}
                />
              ) : (
                <Container>
                  <Button
                    component="a"
                    href={file.path}
                    target="_black"
                    variant="outlined"
                    color="primary"
                  >
                    Download
                  </Button>
                </Container>
              )}
              <CardContent>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  enim suscipit illum eos iste assumenda soluta iusto voluptate.
                  Dicta pariatur atque consectetur dignissimos architecto
                  ducimus minima fuga veniam quae aliquid.
                </Typography>
              </CardContent>
            </Card>
            <Divider className={classes.divider} />
          </Container>
        ))}
    </>
  );
};

export default withStyles(styles)(Files);
