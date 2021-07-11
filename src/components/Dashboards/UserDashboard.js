

import React from 'react';
import {Link} from 'react-router-dom';
class UserDashboard extends React.Component{

    
    render(){
        return(
            <div className="adservices">
            <div className="container"  style={{textAlign:"left"}}>
                <br/>
                <br/>
                   <div> <center><h1 style={{color:"white"}}>User Services</h1></center></div><hr/>
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to view bill details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                   
                    <Link to="/viewBill/41" className="btn btn-lg btn-info">View Bill</Link>
                    <hr/>
                    </div>
                    
                    </div>

                    
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to register complaint</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/addComplaint" className="btn btn-lg btn-info">Register Complaint</Link><hr/>
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
export default UserDashboard;

