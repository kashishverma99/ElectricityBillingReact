import axios from "axios";
import { GET_ERRORS, GET_BILLS, GET_BILL, DELETE_BILL } from "./type";
export const createBill = (bill, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/createNewBill",
      bill
    );
    history.push("/BillDashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getBills = () => async (dispatch) => {
  const res = await axios.get(
    "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/getAllBills"
  );
  dispatch({
    type: GET_BILLS,
    payload: res.data,
  });
};

export const getBill = (billId, history) => async (dispatch) => {
  const res = await axios.get(
    `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/getBillById/${billId}`
  );
  dispatch({
    type: GET_BILL,
    payload: res.data,
  });
};

export const deleteBill = (billId) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure ? This will delete the bill and the data related to it"
    )
  ) {
    await axios.delete(
      `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/deleteBillById/${billId}`
    );
    dispatch({
      type: DELETE_BILL,
      payload: billId,
    });
  }
};
