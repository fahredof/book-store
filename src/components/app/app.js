import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";

import HeaderContainer from "../../containers/header-container";
import Footer from "../footer";

import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page/cart-page";

const App = () => {
    return (
        <div className="app container-fluid">
            <HeaderContainer/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact
                />
                <Route
                    path="/cart/"
                    component={CartPage}
                />
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;