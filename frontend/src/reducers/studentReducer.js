import {
  STUDENTS_LIST_FAIL,
  STUDENTS_LIST_REQUEST,
  STUDENTS_LIST_SUCCESS,
} from "../constants/studentConstants";

export const studentListRducer = (state = { students: [] }, action) => {
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
