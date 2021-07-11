import { DELETE_BILL, GET_BILL, GET_BILLS } from "../actions/type";

const initialState={
    bills:[],
    bill:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_BILLS:
            return{
                ...state,
                bills:action.payload
            }
        case GET_BILL:
            return{
                ...state,
                bill:action.payload
            }
          
        case DELETE_BILL:
            return{
                ...state,
                bills:state.bills.filter(
                    bill=>bill.billId!==action.payload
                )
            }
            default:
                return state;

    }
} 