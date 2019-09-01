import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

window.store = store; //Se itiliza para verificar desde consola solamente!!!

export default store;