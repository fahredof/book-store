const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUESTED"
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
};

const bookAddedToCart = (bookId, quantity) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId,
        quantity: Number(quantity)
    }
};

const bookDeletedInCart = (idCart) => {
    return {
        type: "BOOK_DELETED_IN_CART",
        payload: idCart
    }
};

const bookChangeInCart = (idBook, idCart, quantity) => {
    return {
        type: "BOOK_CHANGE_IN_CART",
        idBook,
        idCart,
        quantity: Number(quantity)
    }
};

const fetchBooks = (dispatch, context) => () => {
    dispatch(booksRequested());
    context.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
};

export {
    fetchBooks,
    bookAddedToCart,
    bookDeletedInCart,
    bookChangeInCart
}