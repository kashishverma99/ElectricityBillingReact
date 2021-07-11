import {combineReducers} from 'redux';

import errorReducer from './errorReducer'
import billReducer from  './billReducer';
import paymentReducer from  './paymentReducer';
import complaintReducer from './complaintReducer';

export default combineReducers({
   errorReducer:errorReducer,
   
   bills:billReducer,
   payments:paymentReducer,
   complaints:complaintReducer,
});