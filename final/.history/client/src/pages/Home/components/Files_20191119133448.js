import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
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
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const UPLOADS_QUERY = gql`
  query singleFile {
    singleFile(fileId: "5dd3a77462d69e5387a099b0") {
      id
      path
      description
      user
      filename
      mimetype
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
    paddingTop: "56.25%" // 16:9
  },
  divider: {
    marginTop: theme.spacing(3)
  }
});

const Files = props => {
  const { classes } = props;
  const { data } = useQuery(UPLOADS_QUERY);
  if (data) {
    const singleFile = data.singleFile;
    console.log(singleFile);

    return (
      <>
        {singleFile && (
          <Container maxWidth="sm" key={singleFile._id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {singleFile.filename}
                  </Avatar>
                }
                title={singleFile.filename}
              />
              {singleFile.mimetype === "image/jpg" ||
              singleFile.mimetype === "image/png" ||
              singleFile.mimetype === "image/jpeg" ||
              singleFile.mimetype === "image/gif" ? (
                <CardMedia
                  className={classes.media}
                  image={singleFile.path}
                  title={singleFile.filename}
                />
              ) : (
                <Container>
                  <Button
                    component="a"
                    href={singleFile.path}
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
                <Button component="a" href={singleFile.path} download>
                  Download
                </Button>
              </CardContent>
            </Card>
            <Divider className={classes.divider} />
          </Container>
        )}
        <h1>hello</h1>
      </>
    );
  } else return <h1>hello</h1>;
};

export default withStyles(styles)(Files);

/*{getFiles &&
        getFiles.map(file => (
          <Container maxWidth="sm" key={file._id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {file.filename[0]}
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
        */
