

import React from 'react';
import {Link} from 'react-router-dom';
class SupervisorDashboard extends React.Component{

    
    render(){
        return(
            <div className="adservices">
            <div className="container"  style={{textAlign:"left"}}>
                <br/>
                <br/>
                   <div> <center><h1 style={{color:"white"}}>Supervisor Services</h1></center></div><hr/>
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the bill details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                   
                    <Link to="/BillDashboard" className="btn btn-lg btn-info">Bill Details</Link>
                    <hr/>
                    </div>
                    
                    </div>

                    
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the complaint details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/ComplaintDashboard" className="btn btn-lg btn-info">Complaint Details</Link><hr/>
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
export default SupervisorDashboard;

