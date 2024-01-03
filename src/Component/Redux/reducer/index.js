import handleCart from "./handleCart";
import { combineReducers } from 'redux';
import addItems from "./additem";




const rootReducers = combineReducers({

    handleCart,
    addItems,
    

});

export default rootReducers;