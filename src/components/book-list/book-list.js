import React, {useContext, useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {bookstoreServiceContext} from "../bookstore-service-context"
import {connect} from "react-redux";
import * as actions from "../../action";
import {compose} from "../../utils"
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = (props) => {

    const context = useContext(bookstoreServiceContext);
    const {books, loading, error} = props;
    const {booksLoaded, booksRequested, booksError} = props;

    useEffect(() => {
        booksRequested();

        context.getBooks()
            .then((data) => booksLoaded(data))
            .catch((error) => booksError(error))

    }, [booksRequested, booksLoaded, booksError, context]);

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>
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

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};

export default compose(
    connect(mapStateToProps, actions)
)(BookList)
