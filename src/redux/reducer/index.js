import {combineReducers} from '@reduxjs/toolkit';
import handleCart from './handleCart'
import handleChangeCurrency from './handleChangeCurrency';

const rootReducer = combineReducers({
    handleCart,
    handleChangeCurrency,
})

export default rootReducer;