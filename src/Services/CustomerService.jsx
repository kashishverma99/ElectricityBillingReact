import React from "react";
import axios from "axios";
const customer_base_url =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v1/customers";
const LOGIN_API_BASE_URL =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v1";
class CustomerService extends React.Component {
  getAllCustomers() {
    axios.get(customer_base_url);
  }
  addCustomer(customer) {
    return axios.post(customer_base_url, customer);
  }
  findById(customerId) {
    return axios.get(customer_base_url + "/" + customerId);
  }
  updateCustomer(customer, customerId) {
    return axios.put(customer_base_url + "/" + customerId, customer);
  }
  login(login) {
    return axios.post(LOGIN_API_BASE_URL + "/login", login);
  }

  passwordChange(customer) {
    return axios.put(customer_base_url + "/forgotPassword", customer);
  }
}
export default new CustomerService();
