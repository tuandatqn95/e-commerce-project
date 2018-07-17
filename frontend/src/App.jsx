import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./routes/app";

const switchRoutes = (
    <Switch>
        {appRoutes.map((route, index) => {
            if (route.redirect)
                return (
                    <Redirect
                        key={index}
                        path={route.path}
                        exact={true}
                        to={route.to}
                    />
                );
            return (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                />
            );
        })}
    </Switch>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper ">
                    <SideBar routes={appRoutes} />
                    <div className="main-panel">
                        <Header routes={appRoutes} />
                        <div className="content">{switchRoutes}</div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
