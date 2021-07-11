import React from 'react';
import CreateBillButton from './CreateBillButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getBills}from "../../actions/BillActions";
import {Link} from 'react-router-dom';
import {deleteBill} from '../../actions/BillActions';
class BillDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bills:[]
        }
    }
    onDeleteClick=(billId)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        this.props.deleteBill(billId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getBills();
    }

    render(){
        const {bills} =  this.props.bills;
        const {bill}=this.props;
        return(
            <div className="adservices">
               
               <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}><b>Bills List</b></h1>
               <br/>
               &nbsp;
               <Link to="/addBill" className="btn btn-primary btn btn-info"><h5>Create New Bill</h5></Link> &nbsp;
               <Link to="/SupervisorDashboard" className="btn btn-primary btn btn-info"><h5>Supervisor Dashboard</h5></Link>
               <br/>
               <hr/>
               <div className = "row">
                        <table  className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Consumer Number</th>
                                    <th>Units</th>
                                    <th>Bill Amount</th>
                                    <th>Bill Month</th>
                                    <th>DueDate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                             //   console.log(bills),
                                    bills.map(
                                        (bill) => 
                                        <tr key = {bill.billId}>
                                             <td> {bill.consumerNo} </td>   
                                             <td> {bill.units}</td>
                                             <td> {bill.billAmount}</td>
                                             <td> {bill.billMonth}</td>
                                             <td> {bill.dueDate}</td>
                                             
                                             <td>
                                                 <Link to={"/updateBill/"+bill.billId} className="btn btn-sm btn-info">Update </Link>&nbsp;&nbsp;&nbsp;
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,bill.billId)}>Delete </button>&nbsp;&nbsp;&nbsp;
                                                 <Link to={"/viewBill/"+bill.billId} className="btn btn-sm btn-info" >View </Link>&nbsp;&nbsp;&nbsp;
                                                
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

BillDashboard.propTypes={
    getBills:PropTypes.func.isRequired,
    deleteBill:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    bills:state.bills
});
export default connect(mapStateToProps,{getBills,deleteBill})(BillDashboard);