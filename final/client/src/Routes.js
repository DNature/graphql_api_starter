import React from "react";
import { Switch, Route } from "react-router-dom";

import { Main as MainLayout } from "./Layout";

import { Home } from "./pages";
import UploadForm from "./pages/Home/UploadForm";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainLayout}>
          <MainLayout />
          <Home />
        </Route>
        <Route path="/files" exact component={MainLayout}>
          <MainLayout />
          <UploadForm />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
