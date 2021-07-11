import React from 'react';
import { Card, Form, Button, ButtonGroup, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faEdit, faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import SupervisorService from '../../Services/SupervisorService';

class PasswordResetComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        email: '',
        password: '',
        supervisor: {},
     input: {},
      errors: {}
        }
        this.ResetPassword = this.ResetPassword.bind(this);
        this.customerChange = this.customerChange.bind(this);
        this.customerReset = this.customerReset.bind(this);
      
    }
    componentDidMount(){
        SupervisorService.forgotPassword(this.state.customer).then((res) => {
            let customer1 = res.data;
            this.setState({
                email: customer1.email,
                password: customer1.password
    
            });
        });
    }
    ResetPassword=(e) =>{
        
        e.preventDefault();
  if(this.validate()){
      
   let customer = {
         
            email: this.state.input.email,
            password: this.state.input.password,
        };
       
         SupervisorService.forgotPassword(customer).then(res => {
            console.log(res.data)
           
        this.props.history.push('/');
        });
       
    }
        
        
        }
        validate(){
            let input = this.state.input;
            let errors = {};
            let isValid = true;
        
            if (!input["password"]) {
              isValid = false;
              errors["password"] = "Please enter your new password.";
            }
        
            if (!input["email"]) {
              isValid = false;
              errors["email"] = "Please enter your email Address.";
            }
        
            if (typeof input["email"] !== "undefined") {
                
              var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
              if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
              }
            }
        
           /*  if (!input["phoneNo"]) {
              isValid = false;
              errors["phoneNo"] = "Please enter your comment.";
            }
            if (typeof input["phoneNo"] !== "undefined") {
                
              var pattern = new RegExp("[789][0-9]{9}");
              if (!pattern.test(input["phoneNo"])) {
                isValid = false;
                errors["phoneNo"] = "Please enter valid Phone Number";
              }
            }
         */
            this.setState({
              errors: errors
            });
           
            return isValid;
        }
        customerChange(event) {
            let input = this.state.input;
         input[event.target.name] = event.target.value;
       
         this.setState({
           input
          
         });
         }
         customerReset = () => {
             this.setState(() => this.initialState)
         }
         
     
           

  
render(){
    return(
        <Card className="border border-dark bg-dark text-white" Style="width:50%; margin-left:280px;">
                <Card.Header >
                    <FontAwesomeIcon icon={this.state.customerId ? faEdit : faPlusSquare} /> {' '}{this.state.customerId ? "Update" : "Reset Password"}
                </Card.Header>
                <Form  onReset={this.customerReset}  id="customerFormId" >
                    <Card.Body >
        {/* <Form.Row>
                            <Form.Group as={Col} controlId="formGridphoneNo" >
                                <Form.Label>Phone Number Format ((7|8|9)xxxxxxxx)</Form.Label>
                                <Form.Control type="tel" pattern="[789][0-9]{9}"  required="required" id="phoneNo" name="phoneNo" value={this.state.input.phoneNo} onChange={this.customerChange} placeholder="Enter phone number (+91 ###-###-####)." />
                                 <div className="text-danger">{this.state.errors.phoneNo}</div>
                                <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                            

                        </Form.Row> */}
                       
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required name="email"   value={this.state.input.email} onChange={this.customerChange}  placeholder="Enter the email id." />
                                 <div className="text-danger">{this.state.errors.email}</div>
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                          
                        </Form.Row>
                        <Form.Row>
                           

                            <Form.Group as={Col} controlId="formGridpassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required="required" autoComplete="off" id="password" name="password" value={this.state.input.password} onChange={this.customerChange} placeholder="Enter your new password." />
                                 <div className="text-danger">{this.state.errors.password}</div>
                                 <Form.Text className="bg-dark text-white">
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                



                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "right" }} >
                    <div Style="text-align:left"><h6 >Already have an account? <a href="http://localhost:3000/login" >Login</a></h6></div>

                        <ButtonGroup>
                            <Button size="lg" variant="success" type="submit" onClick={this.ResetPassword}>
                                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Save
                            </Button>{''}
                            <Button size="lg" variant="warning" type="reset">
                                <FontAwesomeIcon icon={faUndo}></FontAwesomeIcon>Reset
                        </Button>
                           
                        </ButtonGroup>
                    </Card.Footer>
                </Form>
            </Card>
    )
}
}
export default PasswordResetComponent;