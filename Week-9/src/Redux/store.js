import {legacy_createStore as createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import "regenerator-runtime/runtime";
import reducer from "./reducer";
import middleware from "./middleware";


const sagaMIddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMIddleware))
);

sagaMIddleware.run(middleware);