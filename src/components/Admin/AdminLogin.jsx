import React, { Component } from 'react';
import AdminService from '../../Services/AdminService';
import { Card, Form, Button, ButtonGroup, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import img5 from '../../Images/r4.jpg';

class AdminLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.validateLogin = this.validateLogin.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    validateLogin = (e) =>
    {
        
        e.preventDefault();
        let admin = {
            email: this.state.email,
           password : this.state.password
        };
        
        console.log('admin => ' + JSON.stringify(admin));
        
        AdminService.admin(admin).then( (res) =>{
          
           if(res.data==="welcome")
            {
              alert("Welcome "+this.state.email);
              this.props.history.push('/AdminDashboard');
            }
            else
            {
                alert(res.data);
                this.props.history.push('/');
            }
        });
        }

    cancel = () =>{
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{backgroundImage: `url(${img5})`, backgroundSize: "cover",padding:"100px"}}>
           <Card className="border border-dark  text-white" Style="width:50%; margin-left:280px;  background-color:rgba(255,0,0,0);" >
                <Card.Header>
                <FontAwesomeIcon icon={faPlusSquare} /> Admin Login
                </Card.Header>
                <Form   id="customerFormId" >
                    <Card.Body>
                     <Form.Row>
                            <Form.Group as={Col} controlId="formGridemail">
                                <Form.Label as={Col}>Email</Form.Label>
                                <Form.Control type="email" required name="email"    value={this.state.email}   onChange={this.changeEmailHandler}  placeholder="Enter email id." />
                               
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                          
                        </Form.Row>
                        <Form.Row>
                           

                            <Form.Group as={Col} controlId="formGridpassword">
                                <Form.Label as={Col}>Password</Form.Label>
                                <Form.Control type="password" required="required" autoComplete="off" id="password" name="password"   value={this.state.password}  onChange={this.changePasswordHandler} placeholder="Enter your password." />
                            
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                



                    </Card.Body>
                      <Card.Footer style={{ "textAlign": "right" }}>
                          
                       

                        <ButtonGroup  >
                            <Button size="lg" variant="success" type="submit" onClick={this.validateLogin}>
 Login
                    
                            </Button>{''}
                            <Button size="lg" variant="warning"  onClick={this.cancel}>
Cancel
                        </Button>
                           
                        </ButtonGroup>
                    </Card.Footer>
                </Form>
            </Card>
            </div>
        )
    }
}

export default AdminLogin;