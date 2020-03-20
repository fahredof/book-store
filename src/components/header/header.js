import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import Cart from "./svg/cart.svg"

const Header = ({totalCost}) => {
    return (
        <div className="header">
            <nav className="navbar navbar-dark bg-primary">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    Book Store
                </Link>
                <ul className="navbar-nav">
                    <div className="d-flex">
                        <li>
                            <Link
                                to="/cart/"
                            >
                                <img src={Cart} alt="cart"/>
                            </Link>
                        </li>
                        <li className="total-cost">
                            €{totalCost}
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
};

export default Header;