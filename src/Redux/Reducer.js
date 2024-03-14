import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType.js";

const initialState = {
  loading: true,
  userList: [],
  userObject: {},
  errorMessage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case GET_USER_LIST:
        return {
            ...state,
            loading: false,
            errorMessage: '',
            userList: action.payload,
            userObject:{}
        }
    default:
      return state;
  }
};
