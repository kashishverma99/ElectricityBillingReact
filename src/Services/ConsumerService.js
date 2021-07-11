import axios from "axios";

const CONSUMER_API_BASE_URL =
  "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/cg/ebs";

class ConsumerService {
  getAllConsumer() {
    return axios.get(CONSUMER_API_BASE_URL + "/getAllConsumer");
  }
  getConsumerById(consumerId) {
    return axios.get(CONSUMER_API_BASE_URL + "/getConsumerById/" + consumerId);
  }
  deleteConsumer(consumerId) {
    return axios.delete(CONSUMER_API_BASE_URL + "/remove/" + consumerId);
  }
  updateConsumerById(consumerId, consumer) {
    return axios.put(
      CONSUMER_API_BASE_URL + "/updateConsumerById/" + consumerId,
      consumer
    );
  }
  createConsumer(consumer) {
    return axios.post(CONSUMER_API_BASE_URL + "/create", consumer);
  }
  validateConsumer(consumer) {
    return axios.post(CONSUMER_API_BASE_URL + "/consumer", consumer);
  }
  admin(admin) {
    return axios.post(CONSUMER_API_BASE_URL + "/admin", admin);
  }
}
export default new ConsumerService();
