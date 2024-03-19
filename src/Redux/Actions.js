import axios from "axios";
import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType.js";

// action cretor functions
export const getRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failedRequest = (error) => {
  return {
    type: FAIL_REQUEST,
    payload: error,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

// action dispatch function
export const fetchUserList = (data) => {
  return (dispatch) => {
    dispatch(getRequest());
    axios
      .get("http://localhost:8080/user")
      .then((response) => {
        const userList = response.data;
        dispatch(getUserList(userList));
      })
      .catch((error) => {
        dispatch(failedRequest(error.message));
      });
  };
};
