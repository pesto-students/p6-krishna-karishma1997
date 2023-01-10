import { legacy_createStore as createStore} from "redux";
import createLight from "./lightsSwitch"

const store = createStore({
    createLight
})

export default store