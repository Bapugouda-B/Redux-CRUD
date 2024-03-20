import axios from "axios";
import { ADD_STUDENT, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType.js";

// action cretor functions
export const makeRequest = () => {
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
    dispatch(makeRequest());
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


export const deleteRequest = () => {
  return {
    type: DELETE_USER,
  };
};



export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .delete("http://localhost:8080/user/"+code)
      .then((response) => {
        dispatch(deleteRequest());
      })
      .catch((error) => {
        dispatch(failedRequest(error.message));
      });
  };
};


export const addStudent = (data) => {
  return{
    type: ADD_STUDENT,
  }
}

export const addStudentData = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios.post("http://localhost:8080/user", data).then((response)=>{
      dispatch(addStudent());
    }).catch((error) => {
      dispatch(failedRequest(error.message));
    })
  }
}
