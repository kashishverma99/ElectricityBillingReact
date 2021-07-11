import React from "react";
import axios from "axios";
const customer_base_url =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/supervisor";
const LOGIN_API_BASE_URL =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/supervisor";
class SupervisorService extends React.Component {
  login(supervisor) {
    return axios.post(LOGIN_API_BASE_URL + "/login", supervisor);
  }
  forgotPassword(supervisor, email) {
    return axios.put(
      customer_base_url + "/resetpwd/{email}" + email,
      supervisor
    );
  }
}
export default new SupervisorService();
