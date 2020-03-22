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

const totalCost = (newCartItems) => {
    return newCartItems.reduce((sum, {total}) => sum + total, 0);
};

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: null
        }
    }

    const {bookList: {books}, shoppingCart: {cartItems, orderTotal}} = state;
    const newTotal = orderTotal;

    switch (action.type) {

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            console.log(bookId);

            const book = books.find(({id}) => id === bookId);
            const itemIndex = cartItems.findIndex(({id}) => id === bookId);
            const item = cartItems[itemIndex];

            const newItem = updateCartItem(book, item);
            const newItems = updateCartItems(cartItems, newItem, itemIndex);

            return {
                cartItems: newItems,
                orderTotal: totalCost(newItems)
            };

        case "BOOK_DELETED_IN_CART":
            const cartIndex = action.payload;

            const newCartItems = [
                ...cartItems.slice(0, cartIndex),
                ...cartItems.slice(cartIndex + 1)
            ];

            return {
                cartItems: newCartItems,
                orderTotal: totalCost(newCartItems)
            };

        case "BOOK_CHANGE_IN_CART":
            const idBook = action.idBook;
            const idCart = action.idCart;
            const quantity = action.quantity;

            const bookItem = books.find(({id}) => id === idBook);
            const cartItem = cartItems.find(({id}) => id === idBook);

            const newElem = changeCartItem(bookItem, cartItem, quantity);
            const newElems = updateCartItems(cartItems, newElem, idCart);

            return {
                cartItems: newElems,
                orderTotal: totalCost(newElems)
            };

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;