import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getComplaints}from "../../actions/ComplaintActions";
import {Link} from 'react-router-dom';
import {deleteComplaint} from '../../actions/ComplaintActions';
class ComplaintDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            complaints:[]
        }
    }
    onDeleteClick=(complaint_no)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        this.props.deleteComplaint(complaint_no);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getComplaints();
    }

    render(){
        const {complaints} =  this.props.complaints;
        const {bill}=this.props;
        return(
            <div className="adservices">
               
               <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}><b>complaints List</b></h1>
               <br/>
               &nbsp;
               
               <Link to="/SupervisorDashboard" className="btn btn-primary btn btn-info"><h5>Supervisor Dashboard</h5></Link>
               <br/>
               <hr/>
               <div className = "row">
                        <table  className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    
                                    <th>Complaint No.</th>
                                    <th>Consumer No. </th>
                                    <th>Complaint</th>
                                    <th>Comment</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                             //   console.log(complaints),
                                    complaints.map(
                                        (bill) => 
                                        <tr key = {bill.complaint_no}>
                                             <td> {bill.complaint_no} </td>   
                                             <td> {bill.consumer_no} </td>   
                                             <td> {bill.complaint}</td>
                                             <td> {bill.comment}</td>
                                             <td> {bill.status}</td>
                                             
                                             <td>
                                                 <Link to={"/UpdateComplaint/"+bill.complaint_no} className="btn btn-sm btn-info">Update </Link>&nbsp;&nbsp;&nbsp;
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,bill.complaint_no)}>Delete </button>&nbsp;&nbsp;&nbsp;
                                                 <Link to={"/ViewComplaint/"+bill.complaint_no} className="btn btn-sm btn-info" >View </Link>&nbsp;&nbsp;&nbsp;
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div></div></div>
            </div>
        );
    }
}

ComplaintDashboard.propTypes={
    getComplaints:PropTypes.func.isRequired,
    deleteComplaint:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    complaints:state.complaints
});
export default connect(mapStateToProps,{getComplaints,deleteComplaint})(ComplaintDashboard);