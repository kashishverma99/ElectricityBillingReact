import React from 'react';
import CreatePaymentButton from './CreatePaymentButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getPayments}from "../../actions/PaymentAction";
import {Link} from 'react-router-dom';
import {deletePayment} from '../../actions/PaymentAction';
class PaymentDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            payments:[]
        }
    }
    onDeleteClick=(id)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        console.log(id);
        this.props.deletePayment(id);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getPayments();
    }

    render(){
        const {payments} =  this.props.payments;
        const {payment}=this.props;
        return(
            <div className="adservices">
               
               <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}><b>Payment List</b></h1>
               <br/>
              {/* <CreatePaymentButton/>&nbsp;*/}
               <Link to="/AdminDashboard" className="btn btn-primary btn btn-info"><h5>Admin Dashboard</h5></Link>
               <br/>
               <hr/>
               <div className = "row">
                        <table className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Payment Mode</th>
                                    <th>Card Number</th>
                                    <th>Card Holder Name</th>
                                    <th>Expiry Date</th>
                                    <th>CVV</th>
                                    <th>OTP</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                              //  console.log(payments),
                                    payments.map(
                                        (payment) => 
                                        <tr key = {payment.id}>
                                             <td> {payment.paymentMode} </td>   
                                             <td> {payment.cardNumber}</td>
                                             <td> {payment.cardHolderName}</td>
                                             <td> {payment.expiryDate}</td>
                                             <td> {payment.cvv}</td>
                                             <td> {payment.otp}</td>
                                             <td>
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,payment.id)}>Delete </button>&nbsp;&nbsp;
                                                 <Link to={"/viewPayment/"+payment.id} className="btn btn-sm btn-info" >View </Link>
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

PaymentDashboard.propTypes={
    getPayments:PropTypes.func.isRequired,
    deletePayment:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    payments:state.payments
});
export default connect(mapStateToProps,{getPayments,deletePayment})(PaymentDashboard);