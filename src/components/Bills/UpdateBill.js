import React from 'react';
import {getBill,createBill} from '../../actions/BillActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from 'classnames';
class UpdateBill extends React.Component{
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
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedBill = {
            billAmount: this.state.billAmount,
            billMonth: this.state.billMonth,
            dueDate: this.state.dueDate,
            units: this.state.units,
            billId: this.state.billId,
            consumerNo: this.state.consumerNo
            
        }

      this.props.createBill(updatedBill,this.props.history);

    }
    componentDidMount(){
        const {billId} = this.props.match.params;
        this.props.getBill(billId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
             billId,
             billAmount,
             billMonth,
             dueDate,
             units,
             consumerNo
                      
         }=nextProps.bill;
 
         this.setState({
            billId,
            billAmount,
            billMonth,
            dueDate,
            units,
            consumerNo
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>Update Bill Form</h5>
                        <hr />
                        <br/>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <div className="form-group">
                                <label>Consumer Number</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="consumerNo"
                                        placeholder="Consumer Number"
                                        onChange={this.onChange}
                                        value={this.state.consumerNo}
                                        pattern="^[0-9]{10}$"
                                        title="Enter valid 10 digit consumer number "
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                <label> Units</label>
                            <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Units"
                                        name="units"
                                        onChange={this.onChange}
                                        value={this.state.units}
                                        pattern="^[0-9]*$"
                                        title="Enter only digits"
                                        
                                    />
                            </div>
                          
                             <label>Bill Amount</label>   
                            <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Bill Amount"
                                        name="billAmount"
                                        onChange={this.onChange}
                                        value={this.state.billAmount}
                                        pattern="^[0-9]*$"
                                        title="Enter only digits"
                                        required
                                    />
                            </div>
                          
                            
                            <div className="form-group">
                                <label> Bill Month</label>
                            <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="billMonth"
                                        placeholder="Bill Month"
                                        onChange={this.onChange}
                                        value={this.state.billMonth}
                                        pattern="^(January|February|March|April|May|June|July|August|September|October|November|December)$"
                                       title="Enter valid month such as  January "
                                       
                                    />
                            </div>
                            <div className="form-group">
                                <label> Due Date</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="dueDate"
                                        placeholder="Due Date of Bill"
                                        onChange={this.onChange}
                                        value={this.state.dueDate}
                                        pattern="^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$"
                                        title="Enter date in format dd/mm/yyyy"
                                        
                                    />
                                </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
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
UpdateBill.propTypes = {
    getBill:PropTypes.func.isRequired,
    createBill:PropTypes.func.isRequired,
    bill:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bill: state.bills.bill
  });

export default connect(mapStateToProps,{getBill,createBill})(UpdateBill); 