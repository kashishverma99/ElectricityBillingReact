import React, { Component } from 'react';
import ConsumerService from '../../Services/ConsumerService';
//import './v.css';

class UpdateConsumerComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            consumerId: this.props.match.params.consumerId,
            state: '',
            board: '',
            address: '',
    
        }
    
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeBoardHandler = this.changeBoardHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.updateConsumer = this.updateConsumer.bind(this);

    }
    componentDidMount(){
        ConsumerService.getConsumerById(this.state.consumerId).then( (res) =>{
            let consumer = res.data;
            this.setState({state: consumer.state,
                board: consumer.board,
                address : consumer.address});
            console.log("consumer=>" + JSON.stringify(consumer));
        });
    }

    updateConsumer=(e)=>{
       
        e.preventDefault();
        let consumer = {state: this.state.state, board: this.state.board, address: this.state.address};
        console.log('consumer => ' + JSON.stringify(consumer));
        
        
        ConsumerService.updateConsumerById(this.state.consumerId,consumer).then( res=> {
            
            
            this.props.history.push('/getAllConsumer');
        });

    }

    cancel = ()=>{
        this.props.history.push("/getAllConsumer");
    }

    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeBoardHandler= (event) => {
        this.setState({board: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    
    render() {
        return(
            <div className="bw">
            <div >
                <form className="form5">
                
                <h1 >Update Consumer</h1>
                <br></br>           
                <div className="form-group">
                    <label>State{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>

                    <input type="text" className="form-control" name="state" placeholder="Enter state" 
                    value={this.state.state} onChange={this.changeStateHandler} required/>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Board{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>
                    <input type="text" className="form-control" name="board" placeholder="Enter board" 
                    value={this.state.board} onChange={this.changeBoardHandler} required/>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Address{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter address" 
                    value={this.state.address} onChange={this.changeAddressHandler} required/>
                </div>
                <br></br>
                <br></br>
                <div className="row ">
                <button className="btn btn-success" onClick={this.updateConsumer}>Update</button>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <button type="reset" className="btn btn-danger ml-3" onClick={this.cancel}>Cancel</button>
                </div>
            </form>
            </div>
            </div>
        );    }
}

export default UpdateConsumerComponent;