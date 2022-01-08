import { createStore } from "redux";
import reducer from "./reducer";

//takes function as argument -> it is higher order fcn
const store = createStore(reducer); //store object

export default store;
