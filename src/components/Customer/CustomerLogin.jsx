import React, { Component } from "react";
import CustomerService from "../../Services/CustomerService";
import { Card, Form, Button, ButtonGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import img5 from "../../Images/main.jpg";

class CustomerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      result: false,
    };
    this.changename = this.changename.bind(this);
    this.changepass = this.changepass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  changename = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  changepass = (event) => {
    console.log("changed Password");
    this.setState({
      password: event.target.value,
    });
  };
  cancel() {
    this.props.history.push("/");
  }
  handleLogin = (e) => {
    e.preventDefault();

    let login = { email: this.state.email, password: this.state.password };
    CustomerService.login(login).then((res) => {
      console.log(res.data);

      switch (res.data) {
        case "welcome":
          alert("WELCOME!");
          this.props.history.push("/validate-consumer");
          break;
        case "please enter correct password":
          alert("wrong password");
          break;
        case "user does not exist":
          alert("user does not exist");
          break;
        default:
          alert("invalid credentials");
      }
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: "cover",
          padding: "100px",
        }}
      >
        <Card
          className="border border-primary text-white"
          Style="width:50%; margin-left:570px;background-color:rgba(255,0,0,0);"
        >
          <Card.Header>
            <FontAwesomeIcon icon={faPlusSquare} /> Login
          </Card.Header>
          <Form id="customerFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.changename}
                    placeholder="Enter email id"
                  />

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
                    value={this.state.password}
                    onChange={this.changepass}
                    placeholder="Enter your password."
                  />

                  <Form.Text className="bg-dark text-white"></Form.Text>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <div Style="text-align:left">
                <h6>
                  Are you a new User?{" "}
                  <a href="http://ec2-3-143-14-1.us-east-2.compute.amazonaws.com:3000/add">
                    Sign up{" "}
                  </a>{" "}
                  Forgot Password?{" "}
                  <a href="http://ec2-3-143-14-1.us-east-2.compute.amazonaws.com:3000/reset-password">
                    Reset
                  </a>
                </h6>
              </div>

              <ButtonGroup>
                <Button
                  size="lg"
                  variant="success"
                  type="submit"
                  onClick={this.handleLogin}
                >
                  <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Login
                </Button>
                {""}
                <Button size="lg" variant="dark" onClick={this.cancel}>
                  <FontAwesomeIcon icon={faUndo}></FontAwesomeIcon>Cancel
                </Button>
              </ButtonGroup>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}

export default CustomerLogin;
