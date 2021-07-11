import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBill } from '../../actions/BillActions';
import classnames from "classnames";

class AddBill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consumerNo: "",
            billAmount: "",
            billMonth: "",
            dueDate: "",
            units: "",
          
            errors:{}
        }
        //this.onChange=this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        console.log(nextProps);
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors.error });
        }
    }
    onChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newBill = {
            billAmount: this.state.billAmount,
            billMonth: this.state.billMonth,
            dueDate: this.state.dueDate,
            units: this.state.units,
            billId: this.state.billId,
            consumerNo: this.state.consumerNo
        }
        console.log(newBill);
        this.props.createBill(newBill, this.props.history);

    }
    render() {
        const {errors} = this.state;
        //console.log(error);
        return (
            <div className="adservices">
            <div className="bill">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center" style={{color:"white"}}>Create Bill form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                    <label> Consumer Number</label>
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
                                 <label>Units</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Units"
                                        name="units"
                                        onChange={this.onChange}
                                        value={this.state.units}
                                        pattern="^[0-9]*$"
                                        title="Enter only digits"
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label> Bill Amount</label>
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg",{"is-invalid":errors.billAmount})}
                                        placeholder="Bill Amount"
                                        name="billAmount"
                                        onChange={this.onChange}
                                        value={this.state.billAmount}
                                        pattern="^[0-9]*$"
                                        title="Enter only digits"
                                        required
                                    />
                                    {errors.billAmount && (
                                        <div className="invalid-feedback">
                                            {errors.billAmount}
                                        </div>
                                    )}
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
                                        required
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
                                        required
                                    />
                                </div>
                                
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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

AddBill.propTypes = {
    createBill: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.error}
};

export default connect(mapStateToProps, { createBill })(AddBill);