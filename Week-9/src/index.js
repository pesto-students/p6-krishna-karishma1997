import React from "react";
import ReactDOM  from "react-dom";
import {store } from "./Redux/store";
import { Provider } from "react-redux";
import ConnectApp from "./app";

const ReduxApp =()=>{
return(
<Provider store={store}>
<ConnectApp />
</Provider>
)
}


ReactDOM.render(<ReduxApp />,document.getElementById("root"));