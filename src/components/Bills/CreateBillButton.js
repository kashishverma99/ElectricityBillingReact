import React  from 'react';
import {Link} from 'react-router-dom';
const CreateBillButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addBill" className="btn btn-lg btn-info">
                Add New Bill
            </Link>
        </React.Fragment>        
    );
}

export default CreateBillButton;