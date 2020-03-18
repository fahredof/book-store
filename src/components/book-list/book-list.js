import React, {useContext, useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {bookstoreServiceContext} from "../bookstore-service-context"
import {connect} from "react-redux";
import * as actions from "../../action";
import {compose} from "../../utils"

const BookList = (props) => {

    const context = useContext(bookstoreServiceContext);
    const {books} = props;
    const {booksLoaded} = props;

    useEffect(() => {
        booksLoaded(context.getBooks());
    }, [booksLoaded, context]);

    if (books.length === 0) {
        return null;
    }

    return (
        <div className="book-list">
            {
                books.map((book) => {
                    return (
                        <div key={book.id}>
                            <BookListItem book={book}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = ({books}) => {
    return {
        books
    }
};

export default compose(
    connect(mapStateToProps, actions)
)(BookList)
