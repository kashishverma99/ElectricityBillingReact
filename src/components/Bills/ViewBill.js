import React from 'react';
import {getBill} from '../../actions/BillActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewBill extends React.Component{
    constructor(props){
        super(props);
        this.state={
            consumerNo: "",
            billAmount: "",
            billMonth: "",
            dueDate: "",
            units: "",
        }
    }
    componentDidMount(){
        const {billId} = this.props.match.params;
        this.props.getBill(billId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            consumerNo, 
            billId,
            billAmount,
            billMonth,
            dueDate,
            units    
         }=nextProps.bill;
 
         this.setState({
            consumerNo ,
            billId,
            billAmount,
            billMonth,
            dueDate,
            units   
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>View Bill</h5>
                        <hr />
                        <br/>
                        <form>
                        <form className="form5">
                   
                       
                            
                   <label> Consumer Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.consumerNo } 
                   <br>
                   </br>
                   <br></br>

                   <label> Bill Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.billId } 
                   <br>
                   </br>
                   <br></br>

                   <label> units  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.units} 
                   <br>
                   </br>
                   <br></br>



                   <label> Bill Amount {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.billAmount} 
                   <br>
                   </br>
                   <br></br>
                                               
                   <label> Bill Month {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.billMonth} 
                   <br>
                   </br>
                   <br></br>
                   
                   <label>Due Date {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.dueDate} 
                   <br>
                   </br>
                   <br></br>
                   
                   <br></br>
                   <br></br>
                   
          


       
   </form>
   <Link to="/addPayment" className="btn btn-lg btn-info">Make Payment</Link>
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
ViewBill.propTypes = {
    getBill:PropTypes.func.isRequired,
    bill:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bill: state.bills.bill
  });

export default connect(mapStateToProps,{getBill})(ViewBill); 