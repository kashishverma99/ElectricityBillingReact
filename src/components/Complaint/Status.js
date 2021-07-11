import React, { Component } from 'react';  
import { SplitButton, Dropdown } from 'react-bootstrap';  
class Status extends Component {  
  state = { theme: null }  
  chooseTheme = (theme, evt) => {  
    evt.preventDefault();  
    if (theme.toLowerCase() === 'reset') { theme = null }  
    this.setState({ theme });  
  }  
  render() {  
    const { theme } = this.state;  
    const themeClass = theme ? theme.toLowerCase() : 'default';  
      
  
      
    return (  
        
          
          <div >  
            <SplitButton className="shadow-lg p-3 mb-5 bg-black border border-danger rounded" bsSize="large" bsStyle={themeClass} title={`${theme || 'View'} `}>  
            <Dropdown.Item eventKey=" Approved"  onSelect={this.chooseTheme}>Approved</Dropdown.Item>  
            <Dropdown.Item eventKey=" Rejected"  onSelect={this.chooseTheme}>Rejected</Dropdown.Item>  
              <Dropdown.Item eventKey=" Processing" onSelect={this.chooseTheme}>Processing</Dropdown.Item>  
              <Dropdown.Item eventKey=" Completed" onSelect={this.chooseTheme}>Completed</Dropdown.Item>  
            </SplitButton>  
          </div>    
          
    );   
  }   
}  
export default Status;  