import React from "react";
import "./shopping-cart-table.css";
import Trash from "./svg/trash.svg"

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table table-sm">
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
                <tr>
                    <th>1</th>
                    <td>PICTORIAL WEAVINGS</td>
                    <td>
                        <input
                            className="count"
                            type="number"
                        />
                    </td>
                    <td>€250.88</td>
                    <td>
                        <button
                            type="button"
                            className="delete-button btn btn-secondary"
                        >
                            <img src={Trash} alt="delete"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="total">Total cost 200EUR</div>
        </div>
    );
};

export default ShoppingCartTable;