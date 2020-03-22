import React from "react";
import "./shopping-cart-table.css";
import Trash from "./svg/trash.svg"

import {bookDeletedInCart, bookChangeInCart} from "../../action";

import {connect} from "react-redux";

import compose from "../../utils/compose";

const ShoppingCartTable = ({items, total, onChange, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{title}</td>
                <td>
                    <input
                        className="count"
                        type="number"
                        defaultValue={count}
                        onChange={(event) => onChange(id, idx, event.target.value)}
                    />
                </td>
                <td>{total}</td>
                <td>
                    <button
                        type="button"
                        className="delete-button btn btn-secondary"
                        onClick={() => onDelete(idx)}
                    >
                        <img src={Trash} alt="delete"/>
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table table-responsive-sm">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">item</th>
                    <th scope="col">count</th>
                    <th scope="col">price</th>
                    <th scope="col">action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>
            {
                total ?
                    <div className="total">Total cost {total}EUR</div>
                    : null
            }
        </div>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (idBook, idCart, quantity) => dispatch(bookChangeInCart(idBook, idCart, quantity)),
        onDelete: (idCart) => dispatch(bookDeletedInCart(idCart)),
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ShoppingCartTable);