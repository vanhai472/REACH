import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";

// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./views/user/Dashboard/Dashboard"; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; 
import SignUp from "./components/SignUp/SignUp"; 




const Main = () => (

    <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/DangKy" component={SignUp} />
        {/*User will LogIn*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* User is LoggedIn*/}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/*Page Not Found*/}
        <Route component={NotFound} />
    </Switch>

);
export default Main;
