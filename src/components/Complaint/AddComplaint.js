import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createComplaint } from '../../actions/ComplaintActions';
import classnames from "classnames";
import img5 from '../../Images/complaint.jpg';
import {Link} from 'react-router-dom';

class AddComplaint extends Component {

    constructor(props) {
        super(props);
        this.state = {
            complaint: "",
            comment: "",
            status: "",
            consumer_no: "",

            errors: {}
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
        const newComplaint = {
            complaint: this.state.complaint,
            comment: this.state.comment,
            status: this.state.status,
            consumer_no: this.state.consumer_no,
            complaint_no: this.state.complaint_no
        }
        console.log(newComplaint);
        this.props.createComplaint(newComplaint, this.props.history);

    }
    render() {
        const { errors } = this.state;
        //console.log(error);
        return (
            <div className="adservices">
                <div className="container">
                    <div className="row no-gutters">
                        <h5 className="display-4 text-center" style={{ color: "white" }}>Register Complaint Form</h5>
                        <hr class="bg-warning" />
                       
                        <div className="left">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group col-sm-6">
                                    <label>Consumer Number</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Consumer Number"
                                        name="consumer_no"
                                        onChange={this.onChange}
                                        value={this.state.consumer_no}
                                        pattern="^[0-9]{10}$"
                                        title="Enter 10 digit Consumer Number"
                                       required
                                    />
                                </div><br></br>


                                <div className="form-group col-sm-6 ">
                                    <label>Complaint</label>
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", { "is-invalid": errors.complaint })}
                                        placeholder="Enter Your Complaint Here ..."
                                        name="complaint"
                                        onChange={this.onChange}
                                        value={this.state.complaint}
                                        title="Enter only Alphabets"
                                        required
                                    />
                                    {errors.complaint && (
                                        <div className="invalid-feedback">
                                            {errors.complaint}
                                        </div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-5 m-5" />
                                <Link to="/ThankyouC" className="btn btn-primary btn-block mt-5 m-5">Submit</Link>

                                <button type="reset" className="btn btn-danger ml-3" onClick={this.cancel}>Cancel</button>

                            </form>
                        </div>
                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

AddComplaint.propTypes = {
    createComplaint: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.error }
};

export default connect(mapStateToProps, { createComplaint })(AddComplaint);