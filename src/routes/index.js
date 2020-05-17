import React from 'react';
import { Switch } from 'react-router-dom';
import CreatePatient from '../pages/patient/createPatient';
import ListPatient from '../pages/patient/listPatient';
import DetailPatient from '../pages/patient/detailPatient';
import ListGroup from '../pages/groups/listGroup';
import DetailGroup from '../pages/groups/detailGroup';
import ListSurgeries from '../pages/surgeries/listSurgeries';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import ValidateAccount from '../pages/validateAccount';
import Route from './Route';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/signin' component={Login} />
    <Route path='/signup' component={Signup} />

    <Route exact path='/validate' component={ValidateAccount} />
    <Route path='/validate/:token' component={ValidateAccount} />

    <Route path='/app' component={Home} isPrivate></Route>

    <Route exact path='/patient' component={ListPatient} isPrivate></Route>
    <Route exact path='/patient/create' component={CreatePatient} isPrivate></Route>
    <Route exact path='/patient/:id' component={DetailPatient} isPrivate></Route>

    <Route exact path='/groups' component={ListGroup} isPrivate></Route>
    <Route path='/groups/:id' component={DetailGroup} isPrivate></Route>

    <Route exact path='/cirurgias' component={ListSurgeries} isPrivate></Route>

    <Route path='*' component={() => <h1>Page not found</h1>} />
  </Switch>
);

export default Routes;
