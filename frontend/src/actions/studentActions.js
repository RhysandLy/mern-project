import {
    STUDENTS_LIST_FAIL,
    STUDENTS_LIST_REQUEST,
    STUDENTS_LIST_SUCCESS,
  } from "../constants/studentConstants";
  import axios from "axios";

export const listStudents = () => async (dispatch) => {
    try {
      dispatch({
        type: STUDENTS_LIST_REQUEST,
      });
  
  
      const config = {
        headers: {
            "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.get(`/api/students`, config);
  
      dispatch({
        type: STUDENTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: STUDENTS_LIST_FAIL,
        payload: message,
      });
    }
  };