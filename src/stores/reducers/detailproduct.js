import * as actions from './../constants/actionType'

const initiaState = {
    data : [],
    isLoading : false,
}

const detailReducer = (state = initiaState,action) =>{
    switch(action.type){
        case actions.GET_VIEW_DETAIL_PRODUCT :
          return {
            ...state,
            isLoading:false,
          }
        case actions.GET_VIEW_DETAIL_PRODUCT_SUCCESS :
          console.log("productReducer get view detail sucess product is running")
          return {
            ...state,
            isLoading:false,
            data : action.payload,
          }
        case actions.GET_VIEW_DETAIL_PRODUCT_FAILURE :
          return {
            ...state,
            isLoading:false,
            data : action.payload,
          }
        default:
          console.log("default running")
            return {
                ...state,
            }
    }
}
export default detailReducer;