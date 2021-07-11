import React from 'react';
import {getPayment} from '../../actions/PaymentAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewPayment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            paymentMode:'',
            cardNumber:'',
            cardHolderName:'',
            expiryDate:'',
            cvv:'',
            otp:'',
        }
    }
    componentDidMount(){
        const {paymentId} = this.props.match.params;
        this.props.getPayment(paymentId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            id,
            paymentMode,
            cardNumber,
            cardHolderName,
            expiryDate,
            cvv,
            otp,        
         }=nextProps.payment;
 
         this.setState({
            id,
            paymentMode,
            cardNumber,
            cardHolderName,
            expiryDate,
            cvv,
            otp,
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>View Payment</h5>
                        <hr />
                        <br/>
                        <form>
                        <form className="form5">
                   
                   <label> Payment Mode {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.paymentMode } 
                   <br>
                   </br>
                   <br></br>   
                            
                   <label> Card Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.cardNumber } 
                   <br>
                   </br>
                   <br></br>

                   <label>Card Holder Name {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} : </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.cardHolderName}
                   <br></br>
                   <br></br>
                                               
                   <label>Expiry Date {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.expiryDate } 
                   <br></br>
                   <br></br>
                   
                   <label>CVV {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.cvv}
                   <br></br>
                    
                   <label>OTP {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.otp}
                   <br></br>
                   
                   <br></br>
                   <br></br>
                   <Link to="/PaymentDashboard" className="btn btn-lg btn-info">Ok</Link>
          


       
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
ViewPayment.propTypes = {
    getPayment:PropTypes.func.isRequired,
    payment:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    payment: state.payments.payment
  });

export default connect(mapStateToProps,{getPayment})(ViewPayment); 