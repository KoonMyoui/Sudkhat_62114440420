import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducers/product.js';
import { cartReducer} from './reducers/cartReducers'

const initialState = {};

const reducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
