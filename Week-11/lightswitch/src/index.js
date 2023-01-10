import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Room } from './App';
import { legacy_createStore as createStore} from "redux"
import allReducers from "./reducer/lightsSwitch"
import {Provider} from "react-redux"
const store = createStore(allReducers)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
   <Room/>
   </React.StrictMode>
   </Provider>

);

