import React from 'react';
import ConsumerService from '../../Services/ConsumerService';
//import './v.css';

class CreateConsumerComponent extends React.Component{
    constructor(props) {

        super(props);
        this.state={
            consumerId: this.props.match.params.consumerId,
            state: '',
            board: '',
            address: '',
            
        }
        this.changeConsumerIdHandler = this.changeConsumerIdHandler.bind(this); 
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeBoardHandler = this.changeBoardHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        
    }
    
    changeConsumerIdHandler= (event) => {
        this.setState({consumerId: event.target.value});
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
    

    save = (e) => {
        e.preventDefault();
        let consumer = {
                            consumerId: this.state.consumerId,
                            state: this.state.state,
                            board: this.state.board,
                            address: this.state.address,
                            
                        };
        console.log('consumer => ' + JSON.stringify(consumer));
    

            if(this.state.consumerId.length!==10)
            {   
                alert("ConsumerId Must be 10 digit");
                this.props.history.push("/add-consumer/_add");        
            }
            else{
                ConsumerService.createConsumer(consumer).then( (res) =>{
                        
                        this.props.history.push("/getAllConsumer");        

            })
            }
            

            this.props.history.goBack();        
        
        
    } 
    cancel = ()=>{
        this.props.history.push("/getAllConsumer");
    }

    render()
    {
        return(
            <div className="bw">
            <div >
                <form className="form5">
                
                <h1 >Add Consumer</h1>
                <br></br>
                <div className="form-group">
                    <label>Consumer Id{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>
                    <input type="text" maxLength={10} className="form-control" name="consumerId" placeholder="Enetr Consumer Id" 
                    value={this.state.consumerid} onChange={this.changeConsumerIdHandler} required/>
                </div>
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
                <button type="submit" className="btn btn-success ml-3" onClick={this.save}>Submit</button>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <button type="reset" className="btn btn-danger ml-3" onClick={this.cancel}>Cancel</button>
                </div>
            </form>
            </div>
            </div>
        );
    }
}
export default CreateConsumerComponent;