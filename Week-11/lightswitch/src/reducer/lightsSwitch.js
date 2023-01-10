import { legacy_createStore as createStore} from "redux";
const lightSwitch =(state,action)=>{
    switch(action.type){
        case "On":
            return true;
        case "Off":
            return false;
            default: 
            return state;
    }
}


const store = createStore({
    lightSwitch
})
export default store;