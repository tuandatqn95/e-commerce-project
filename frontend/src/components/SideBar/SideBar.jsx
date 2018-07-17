import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const SidebarLink = props => {
    const { path, icon, name } = props;
    return (
        <Route
            path={path}
            children={({ match }) => (
                <li className={`nav-item ${match ? "active" : ""} `}>
                    <Link className="nav-link" to={path}>
                        <i className="material-icons">{icon}</i>
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        />
    );
};

class SideBar extends Component {
    render() {
        const { routes } = this.props;

        const SidebarLinks = () =>
            routes.map((route, index) => {
                if (route.redirect) return null;
                return (
                    <SidebarLink
                        key={index}
                        active={false}
                        path={route.path}
                        icon={route.icon}
                        name={route.sidebarName}
                    />
                );
            });

        return (
            <div
                className="sidebar"
                data-color="azure"
                data-background-color="white"
                data-image="../assets/img/sidebar-1.jpg"
            >
                {/*
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      */}
                <div className="logo">
                    <Link to="/" className="simple-text logo-normal">
                        AdminCP
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <SidebarLinks />
                        {/* <li class="nav-item active-pro ">
                  <a class="nav-link" href="./upgrade.html">
                      <i class="material-icons">unarchive</i>
                      <p>Upgrade to PRO</p>
                  </a>
              </li> */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
