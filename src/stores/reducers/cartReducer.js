import * as actions from './../constants/actionType'

const initiaState = {
    cart:false,
    isLoading : false,
}

const cartReducer = (state = initiaState,action) =>{
    console.log("action",action.type)
    switch(action.type){
        case actions.GET_PRODUCT_CART:
            return {
                ...state,
                isLoading: true,
            }
        case actions.GET_PRODUCT_CART_SUCCESS :
            console.log("reducer cart running :",action.payload);
            return {
            ...state,
            isLoading:false,
            cart : action.payload,
            }
        case actions.GET_PRODUCT_CART_FAILURE : 
          return {
            ...state,
            isLoading:false,
            cart : action.payload,
          }
        default:
          console.log("default running")
            return {
                ...state,
            }
    }
}
export default cartReducer;