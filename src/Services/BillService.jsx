import axios from "axios";

const CONSUMER_API_BASE_URL =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081";

class BillService {
  validateConsumer(bill) {
    return axios.post(CONSUMER_API_BASE_URL + "/validateConsumer", bill);
  }

  getBillById(billId) {
    return axios.post(CONSUMER_API_BASE_URL + "/getBillById", billId);
  }
}

export default new BillService();
