

import React from 'react';
import {Link} from 'react-router-dom';
class AdminDashboard extends React.Component{

    
    render(){
        return(
            <div className="adservices">
            <div className="container"  style={{textAlign:"left"}}>
                <br/>
                <br/>
                   

                    
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the payment details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/PaymentDashboard" className="btn btn-lg btn-info">Payment Details</Link><hr/>
                    </div>
                    
                    </div>
                    

        

                   

                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the consumer details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/getAllConsumer" className="btn btn-lg btn-info">Consumer Details</Link>
                    </div>
                    
                    </div>

                   
                    </div>
               
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
            </div>
        )
    }
}
export default AdminDashboard;

