import axios from "axios";
import { GET_ERRORS, GET_PAYMENTS, GET_PAYMENT, DELETE_PAYMENT } from "./type";
export const createPayment = (payment) => async (dispatch) => {
  try {
    await axios.post(
      "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v2/Payment",
      payment
    );
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getPayments = () => async (dispatch) => {
  const res = await axios.get(
    "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v2/allPayments"
  );
  dispatch({
    type: GET_PAYMENTS,
    payload: res.data,
  });
};
export const getPayment = (paymentId, history) => async (dispatch) => {
  const res = await axios.get(
    `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v2/Payment/${paymentId}`
  );
  dispatch({
    type: GET_PAYMENT,
    payload: res.data,
  });
};
export const deletePayment = (paymentId) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure ? This will delete the project and the data related to it"
    )
  ) {
    await axios.delete(
      `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/api/v2/Payment/${paymentId}`
    );
    dispatch({
      type: DELETE_PAYMENT,
      payload: paymentId,
    });
  }
};
