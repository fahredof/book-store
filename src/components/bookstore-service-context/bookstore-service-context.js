import React from "react";

const bookstoreServiceContext = React.createContext();

const {
    Provider: BookstoreProvider,
    Consumer: BookstoreConsumer
} = bookstoreServiceContext;

export {
    bookstoreServiceContext,
    BookstoreProvider,
    BookstoreConsumer
}