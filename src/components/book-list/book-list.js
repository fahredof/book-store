import React from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";

const BookList = ({books, onAddedToCart}) => {
    return (
        <div className="book-list">
            {
                books.map((book) => {
                    const {id} = book;
                    return (
                        <div key={id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(id)}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};


export default BookList;
