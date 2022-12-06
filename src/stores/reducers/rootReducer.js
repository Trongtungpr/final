import userReducer from './userReducer';
import productReducer from './productReducer'
import cartReducer from './cartReducer';

const { combineReducers } = require('redux');
const rootReducer = combineReducers ({
   user : userReducer,
   products : productReducer,
   cart : cartReducer,
});

export default rootReducer;