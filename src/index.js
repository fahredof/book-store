import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import BookstoreService from "./services/bookstore-service";
import {BookstoreProvider} from "./components/bookstore-service-context";
import ErrorBoundary from "./components/error-boundary";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);