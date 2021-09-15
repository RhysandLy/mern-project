import {
  STUDENTS_CREATE_FAIL,
  STUDENTS_CREATE_REQUEST,
  STUDENTS_CREATE_SUCCESS,
  STUDENTS_LIST_FAIL,
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
} from "../constants/studentConstants";

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENTS_LIST_REQUEST:
      return { loading: true };
    case STUDENTS_LIST_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studentCreateReducer = (state = { students: {} }, action) => {
  switch (action.type) {
    case STUDENTS_CREATE_REQUEST:
      return { loading: true };
    case STUDENTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case STUDENTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
