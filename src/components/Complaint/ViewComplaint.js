import React from 'react';
import {getComplaint} from '../../actions/ComplaintActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewComplaint extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            complaint: "",
            comment: "",
            status: "",
            consumer_no: "",
        }
    }
    componentDidMount(){
        const {complaint_no} = this.props.match.params;
        this.props.getComplaint(complaint_no,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            complaint_no,
            complaint,
            comment,
            status,
            consumer_no    
         }=nextProps.complaint;
 
         this.setState({
            complaint_no,
            complaint,
            comment,
            status,
            consumer_no   
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>View Complaint</h5>
                        <hr />
                        <br/>
                        <form>
                        <form className="form5">
                   
                   <label> Complaint Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.complaint_no } 
                   <br>
                   </br>
                   <br></br>   
                            
                   <label> Consumer Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.consumer_no } 
                   <br>
                   </br>
                   <br></br>

                   <label>Complaint {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} : </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.complaint }
                   <br></br>
                   <br></br>
                                               
                   <label>Comment {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.comment } 
                   <br></br>
                   <br></br>
                   
                   <label>status {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.status}
                   <br></br>
                   
                   <br></br>
                   <br></br>
                   <Link to="/ComplaintDashboard" className="btn btn-lg btn-info">Ok</Link>
          


       
   </form>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        );
    }
}
ViewComplaint.propTypes = {
    getComplaint:PropTypes.func.isRequired,
    complaint:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    complaint: state.complaints.complaint
  //  bill: state.bills.bill
  });

export default connect(mapStateToProps,{getComplaint})(ViewComplaint); 