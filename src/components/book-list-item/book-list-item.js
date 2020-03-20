import React from "react";
import "./book-list-item.css";

const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, coverImage} = book;

    return (
       <div className="book-list-item">
           <img src={coverImage} alt="cover"/>
           <span className="title-author">{`${title} - ${author}`}</span>
           <p className="price">{`€${price} EUR`}</p>
           <button
               className="btn btn-primary"
               onClick={onAddedToCart}
           >
               add
           </button>
       </div>
    );
};

export default BookListItem;