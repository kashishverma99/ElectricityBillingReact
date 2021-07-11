import React, { Component } from 'react';
import SupervisorService from '../../Services/SupervisorService';
import { Card, Form, Button, ButtonGroup, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faEdit, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import img5 from '../../Images/b2.jpg';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            result: false
        }
        this.changename = this.changename.bind(this);
        this.changepass = this.changepass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changename = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changepass = (event) => {
        console.log("changed Password")
        this.setState({
            password: event.target.value
        })
    }
    cancel() {
        this.props.history.push('/')
    }
    handleLogin = (e) => {
        e.preventDefault();

        let login = { email: this.state.email, password: this.state.password }
        SupervisorService.login(login).then((res) => {
            console.log(res.data)

            switch (res.data) {
                case "Supervisor Logged In Successfully": alert("WELCOME SUPERVISOR!")
                this.props.history.push('/SupervisorDashboard')
                    break;
                
                default: alert("supervisor does not exist with this credentials..Please check the email id and password ")
                   
            }

        })
    }

    render() {
        return (
            <div className="a" style={{backgroundImage: `url(${img5})`, backgroundSize: "cover",padding:"100px"}}>
           <Card className="border border-danger  text-white" Style="width:50%; margin-left:570px;background-color:rgba(255,0,0,0);">
                <Card.Header>
                    Supervisor Login
                </Card.Header>
                <Form   id="customerFormId" >
                    <Card.Body>
                     <Form.Row>
                            <Form.Group as={Col} controlId="formGridemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required name="email"    value={this.state.email}   onChange={this.changename}  placeholder="Enter email id." />
                               
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                          
                        </Form.Row>
                        <Form.Row>
                           

                            <Form.Group as={Col} controlId="formGridpassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required="required" autoComplete="off" id="password" name="password"   value={this.state.password}  onChange={this.changepass} placeholder="Enter your password." />
                            
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                



                    </Card.Body>
                      <Card.Footer style={{ "textAlign": "right" }}>
                          <div Style="text-align:left"><h6 >Did u forgot your password? <a href="http://localhost:3000/reset" >RESET PASSWORD</a></h6></div>
                        <ButtonGroup  >
                            <center>
                            <Button size="lg" variant="success" type="submit" onClick={this.handleLogin}>
                                 Login
                            </Button>{''}
                            <Button size="lg" variant="warning"  onClick={this.cancel}>
                                Reset
                        </Button>
                        </center>
                        </ButtonGroup>
                    </Card.Footer>
                </Form>
            </Card>
</div>
        )
    }
}

export default LoginComponent



