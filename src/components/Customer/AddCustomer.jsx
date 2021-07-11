import React from "react";
import { Card, Form, Button, ButtonGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import CustomerService from "../../Services/CustomerService";
import img5 from "../../Images/su.jpg";

class AddCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      email: "",
      password: "",
      phoneNo: "",
      input: {},
      errors: {},
    };

    this.saveCustomer = this.saveCustomer.bind(this);
    this.customerChange = this.customerChange.bind(this);
    this.customerReset = this.customerReset.bind(this);
  }

  saveCustomer = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let customer = {
        email: this.state.input.email,
        password: this.state.input.password,

        phoneNo: this.state.input.phoneNo,
      };
      console.log("customer => " + JSON.stringify(customer));
      CustomerService.addCustomer(customer).then((res) => {
        this.props.history.push("/CustomerLogin");
      });
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phoneNo"]) {
      isValid = false;
      errors["phoneNo"] = "Please enter your Phone Number.";
    }
    if (typeof input["phoneNo"] !== "undefined") {
      var pattern = new RegExp("[789][0-9]{9}");
      if (!pattern.test(input["phoneNo"])) {
        isValid = false;
        errors["phoneNo"] = "Please enter valid Phone Number";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  customerChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }
  customerReset = () => {
    this.props.history.push("/loginChoice");
  };

  render() {
    // const {firstName,lastName,email,password,phoneNo,username,address}=this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: "cover",
          padding: "100px",
        }}
      >
        <Card
          className="border border-dark  text-white"
          Style="width:50%;background-color:rgba(255,0,0,0);"
        >
          <Card.Header>
            <FontAwesomeIcon icon={faPlusSquare} /> Sign Up
          </Card.Header>
          <Form id="customerFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridphoneNo">
                  <Form.Label>Phone Number Format ((7|8|9)xxxxxxxx)</Form.Label>
                  <Form.Control
                    type="tel"
                    pattern="[789][0-9]{9}"
                    required="required"
                    id="phoneNo"
                    name="phoneNo"
                    value={this.state.input.phoneNo}
                    onChange={this.customerChange}
                    placeholder="Enter phone number (+91 ###-###-####)."
                  />
                  <div className="text-danger">{this.state.errors.phoneNo}</div>
                  <Form.Text className="bg-dark text-white"></Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="email"
                    value={this.state.input.email}
                    onChange={this.customerChange}
                    placeholder="Enter email id."
                  />
                  <div className="text-danger">{this.state.errors.email}</div>
                  <Form.Text className="bg-dark text-white"></Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridpassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required="required"
                    autoComplete="off"
                    id="password"
                    name="password"
                    value={this.state.input.password}
                    onChange={this.customerChange}
                    placeholder="Enter your password."
                  />
                  <div className="text-danger">
                    {this.state.errors.password}
                  </div>
                  <Form.Text className="bg-dark text-white"></Form.Text>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <div Style="text-align:left">
                <h6>
                  Already have an account?{" "}
                  <a href="http://ec2-3-143-14-1.us-east-2.compute.amazonaws.com:3000/CustomerLogin">
                    Login
                  </a>
                </h6>
              </div>
              <ButtonGroup>
                <Button
                  size="lg"
                  variant="success"
                  type="submit"
                  onClick={this.saveCustomer}
                >
                  <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Sign up
                </Button>
                {""}
                <Button
                  size="lg"
                  onClick={this.customerReset}
                  variant="dark"
                  type="reset"
                >
                  <FontAwesomeIcon icon={faUndo}></FontAwesomeIcon>Go Back
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
export default AddCustomer;
