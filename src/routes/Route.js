import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import DefaultLayout from '../pages/__layouts/default';
import AuthLayout from '../pages/__layouts/auth';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = isAuthenticated();

  if (!signed && isPrivate) {
    return <Redirect to='/signin' />;
  }

  if (signed && !isPrivate) {
    return <Redirect to='/app' />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout props={props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
