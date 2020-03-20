import React, {useEffect} from "react";

import {connect} from "react-redux";
import {fetchBooks, bookAddedToCart} from "../../action";

import {compose} from "../../utils"
import withBookstoreService from "../../components/hoc/with-bookstore-service";


import BookList from "../../components/book-list";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";


const BookListContainer = (props) => {
    const {books, loading, error} = props;
    const {fetchBooks, onAddedToCart} = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return (
    <BookList
        books={books}
        onAddedToCart={onAddedToCart}
    />
    )
};

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)