import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/redusers/rootReducer";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import {createFirestoreInstance, reduxFirestore, getFirestore} from "redux-firestore";
import fbConfig from "./config/fbConfig"
import firebase from 'firebase/compat'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, fbConfig),
    )
)
const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App/>
            </ReactReduxFirebaseProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

