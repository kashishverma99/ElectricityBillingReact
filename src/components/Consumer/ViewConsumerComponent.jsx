import React, { Component } from 'react'
import ConsumerService from '../../Services/ConsumerService';
//import './v.css';
class ViewConsumerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            consumerId: this.props.match.params.consumerId,
            consumer: {}
        }
    }
s
    componentDidMount(){
        ConsumerService.getConsumerById(this.state.consumerId).then( res => {
            this.setState({consumer: res.data});
        })
    }
    cancel = ()=>{
        this.props.history.push("/getAllConsumer");
    }


    render() {
        return (
            
            
                
            <div >
                <div className="bg">
            
                    <h2> View Consumer </h2>
                    <form className="form5">
                   
                       
                            
                            <label> Consumer ID {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.consumer.consumerId } 
                            <br>
                            </br>
                            <br></br>

                            <label>State  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} : </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{ this.state.consumer.state }
                            <br></br>
                            <br></br>
                                                        
                            <label>Board {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label> {'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.consumer.board } 
                            <br></br>
                            <br></br>
                            
                            <label>Address {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'} { this.state.consumer.address }
                            <br></br>
                            
                            <br></br>
                            <br></br>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<button type="reset" className="btn btn-danger ml-3" onClick={this.cancel}>Cancel</button>
                   


                
            </form>
            </div>
            </div>
            )   
    }
}

export default ViewConsumerComponent
