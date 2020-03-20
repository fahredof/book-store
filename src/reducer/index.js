const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: null
};

const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    };
};

const changeCartItem = (book, item = {}, quantity = 1) => {
    const {
        id = book.id,
        title = book.title
    } = item;

    if (quantity > 1) {
        return {
            id,
            title,
            count: quantity,
            total: quantity * book.price
        };
    } else {
        return {
            id,
            title,
            count: 1,
            total: book.price
        }
    }
};

const updateTotal = (cartItems, item) => {
    let total = 0;
    if (item) {
        cartItems.forEach((item) => {
            total += item.total;
        })
    } else {
        //
    }
    return total
};

const reducer = (state = initialState, action) => {

    console.log(action.type);

    switch (action.type) {
        case "FETCH_BOOKS_REQUESTED":
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;

            const book = state.books.find(({id}) => id === bookId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(book, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
                orderTotal: updateTotal(state.cartItems, item)
            };

        case "BOOK_DELETED_IN_CART":
            const cartId = action.payload;

            const newCartItems = [
                ...state.cartItems.slice(0, cartId),
                ...state.cartItems.slice(cartId + 1)
            ];

            return {
                ...state,
                cartItems: newCartItems
            };

        case "BOOK_CHANGE_IN_CART":
            const idBook = action.idBook;
            const idCart = action.idCart;
            const quantity = action.quantity;

            const bookItem = state.books.find(({id}) => id === idBook);
            const cartItem = state.cartItems.find(({id}) => id === idBook);

            const newElem = changeCartItem(bookItem, cartItem, quantity);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newElem, idCart)
            };

        default:
            return state
    }
};

export default reducer;
