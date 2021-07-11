import React, { Component } from 'react'
import ConsumerService from '../../Services/ConsumerService';
import ViewBill from '../Bills/ViewBill';
//import './v.css';

class ListConsumerComponent extends Component
{
    constructor(props) {
    super(props)

    this.state = {
        consumer: []
    }
    this.viewConsumer = this.viewConsumer.bind(this);
    this.addConsumer = this.addConsumer.bind(this);
    this.editConsumer = this.editConsumer.bind(this);
    this.deleteConsumer = this.deleteConsumer.bind(this);
    this.validateConsumer = this.validateConsumer.bind(this);
}

deleteConsumer(consumerId){
    ConsumerService.deleteConsumer(consumerId).then( res => {
        this.setState({consumer: this.state.consumer.filter(consumer => consumer.consumerId !== consumerId)});
    });
}
viewConsumer(consumerId){
    this.props.history.push(`/view-consumer/${consumerId}`);
}
editConsumer(consumerId){
    this.props.history.push(`/update-consumer/${consumerId}`);
}

 componentDidMount(){
        ConsumerService.getAllConsumer().then((res) => {
            this.setState({ consumer: res.data});
        });
}

addConsumer(){
    
    this.props.history.push('/add-consumer/_add');
}
validateConsumer(){
    this.props.history.push('/validate-consumer/_validate');
}


render() {
    return (
        
        <div className="adservices">
             <div className="b">
        <h2><i>Conumer List</i></h2>
             
                <button type="button" className="btn btn-success" onClick={this.addConsumer}> Add Consumer</button>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <button className="btn btn-info" onClick={this.validateConsumer}> Validate Consumer</button>
             <div >
                    <table >
            
                        <thead className="g">
                            <tr>
                                <th>Consumer ID </th>    
                                <th> State </th>
                                <th> Board </th>
                                <th> Address</th>
                                <th > Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.consumer.map(
                                    consumer => 
                                    <tr key = {consumer.consumerId}>
                                         <td> {consumer.consumerId} </td>
                                         <td> {consumer.state}</td>   
                                         <td> {consumer.board}</td>
                                         <td> {consumer.address}</td>
                                         <td >
                                             <button onClick={ () => this.editConsumer(consumer.consumerId)} className="btn btn-success">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteConsumer(consumer.consumerId)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewConsumer(consumer.consumerId)} className="btn btn-success">View </button>
                                             
                                             
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>
    
        </div>
        </div>
        
    )
}
}

export default ListConsumerComponent
