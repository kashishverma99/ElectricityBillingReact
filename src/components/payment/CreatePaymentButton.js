import React  from 'react';
import {Link} from 'react-router-dom';
const CreatePaymentButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addPayment" className="btn btn-lg btn-info">
                Make Payment
            </Link>
        </React.Fragment>        
    );
}

export default CreatePaymentButton;