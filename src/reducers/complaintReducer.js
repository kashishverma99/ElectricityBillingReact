import { GET_COMPLAINTS,GET_COMPLAINT } from "../actions/type";
import { DELETE_COMPLAINT } from "../actions/type";
const initialState={
    complaints:[],
    complaint:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_COMPLAINTS:
            return{
                ...state,
                complaints:action.payload
            }
        case GET_COMPLAINT:
            return{
                ...state,
                complaint:action.payload
            }
          
        case DELETE_COMPLAINT:
            return{
                ...state,
                complaints:state.complaints.filter(
                    complaint=>complaint.complaintId!==action.payload
                )
            }
            default:
                return state;

    }
} 