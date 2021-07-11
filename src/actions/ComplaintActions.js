import axios from "axios";
import {
  GET_ERRORS,
  GET_COMPLAINTS,
  GET_COMPLAINT,
  DELETE_COMPLAINT,
} from "./type";
export const createComplaint = (complaint, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/Complaint/InsertComplaint",
      complaint
    );
    history.push("/ComplaintDashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getComplaints = () => async (dispatch) => {
  const res = await axios.get(
    "http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/Complaint/Complaints"
  );
  dispatch({
    type: GET_COMPLAINTS,
    payload: res.data,
  });
};

export const getComplaint = (complaint_no, history) => async (dispatch) => {
  const res = await axios.get(
    `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/Complaint/GetComplaint/${complaint_no}`
  );
  dispatch({
    type: GET_COMPLAINT,
    payload: res.data,
  });
};

export const deleteComplaint = (complaint_no) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure ? This will delete the bill and the data related to it"
    )
  ) {
    await axios.delete(
      `http://ec2-3-20-41-232.us-east-2.compute.amazonaws.com:8081/Complaint/DeleteComplaint/${complaint_no}`
    );
    dispatch({
      type: DELETE_COMPLAINT,
      payload: complaint_no,
    });
  }
};
