import React from 'react';
//import ConsumerService from '../Services/ConsumerService';
//import './v.css';
import BillService from '../../Services/BillService';
import img5 from '../../Images/c.jpg';

class ValidateConsumerComponent extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            consumerNo: this.props.match.params.consumerNo,
            // state: '',
            //board: '',
            //address: '',

        }
        this.changeConsumerNoHandler = this.changeConsumerNoHandler.bind(this);
        //this.changeStateHandler = this.changeStateHandler.bind(this);
        //this.changeBoardHandler = this.changeBoardHandler.bind(this);
        //this.changeAddressHandler = this.changeAddressHandler.bind(this);

    }

    changeConsumerNoHandler = (event) => {
        this.setState({ consumerNo: event.target.value });
    }

    /*changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeBoardHandler= (event) => {
        this.setState({board: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }*/


    save = (e) => {
        e.preventDefault();
        let bill = {
            consumerNo: this.state.consumerNo,
            //state: this.state.state,
            //board: this.state.board,
            //address: this.state.address,
        };
        console.log('bill => ' + JSON.stringify(bill));

        BillService.validateConsumer(bill).then((res) => {
            if (res.data === "Valid") {

                alert("Welcome");
                //this.props.history.goBack();
                this.props.history.push("/UserDashboard");
            }
            else {
                alert("Invaid Consumer");
                //  alert(res.data);
                this.props.history.push("/");

            }

        });
    }

    cancel = () => {

        this.props.history.push("/getAllConsumer");
    }

    render() {
        return (
            <div className="a" style={{backgroundImage: `url(${img5})`, backgroundSize: "cover",padding:"180px"}}>

                <div className="container">
                    <form className="form5">

                        <h1 className="h2 text-warning">Validate Consumer</h1>
                        <br></br>
                        <div className="form-group">
                            <label>Consumer Id</label>
                            <input type="text"  name="consumerNo" placeholder="Enter Consumer Id"
                                value={this.state.consumerNo} onChange={this.changeConsumerNoHandler} />
                        </div>



                        <div className="row row1">
                            <button type="submit" className="btn btn-success ml-3" onClick={this.save}>Submit</button>
                            <button type="reset" className="btn btn-danger ml-3" onClick={this.cancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default ValidateConsumerComponent;