import React from 'react';
import { getComplaint, createComplaint } from '../../actions/ComplaintActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from 'classnames';
import StatusD from './Status';
class UpdateComplaint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complaint: "",
            comment: "",
            status: "",
            consumer_no: "",
        }
    }
    onChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }
    onSubmit = (event) => {
        event.preventDefault();
        const updatedComplaint = {
            complaint: this.state.complaint,
            comment: this.state.comment,
            status: this.state.status,
            consumer_no: this.state.consumer_no,
            complaint_no: this.state.complaint_no

        }

        this.props.createComplaint(updatedComplaint, this.props.history);

    }
    componentDidMount() {
        const { complaint_no } = this.props.match.params;
        this.props.getComplaint(complaint_no, this.props.history);

    }

    componentWillReceiveProps(nextProps) {
        const {
            complaint_no,
            complaint,
            comment,
            status,
            consumer_no

        } = nextProps.comp;

        this.setState({
            complaint_no,
            complaint,
            comment,
            status,
            consumer_no

        });
    }
    render() {
        return (
            <div className="adservices">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center" style={{ color: "white" }}>Resolution of Complaint</h5>
                            <hr />
                            <br />
                            <form onSubmit={this.onSubmit}>
                    
                            
                   <label> Consumer Number {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.consumer_no } 
                   <br>
                   </br>
                   <br></br>
                   <label> Complaint{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.complaint } 
                   <br>
                   </br>
                   <br></br> 
                                <div className="form-group col-sm-6 ">
                                    <label> Comment</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="comment"
                                        onChange={this.onChange}
                                        value={this.state.comment}
                                      
                                        title="Enter only alphabets "
                                        placeholder="Enter Your Comment Here ..."

                                    />
                                </div>
                                <div className="form-group col-sm-6 ">
                                    <label>Status</label>
                                  
                                        <select 
                                    className="form-control form-control-lg " placeholder="Mode of Payment" 
                                    name="status" 
                                    onChange={this.onChange}
                                    value={this.state.status} 
                                    required > 
                                    <option>Select Status</option>
                                    <option>Approved</option>
                                    <option>Rejected</option>
                                    <option>Processing</option>
                                    <option>Completed</option>
                                </select><center>
                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                    <a href="/" id="cancel" name="cancel" className="btn btn-danger mt-4 ">Cancel</a>
                                    </center> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
UpdateComplaint.propTypes = {
    getComplaint: PropTypes.func.isRequired,
    createComplaint: PropTypes.func.isRequired,
    comp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    comp: state.complaints.complaint
});

export default connect(mapStateToProps, { getComplaint, createComplaint })(UpdateComplaint);

/*

                                <div className="form-group">
                                    Complaint
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-dark text-white border-0"
                                        name="complaint"
                                        onChange={this.onChange}
                                        value={this.state.complaint}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Consumer Number</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-dark text-white border-0"
                                        name="consumer_no"
                                        onChange={this.onChange}
                                        value={this.state.consumer_no}

                                        readOnly={true}
                                    />
                                </div>
*/