import * as testActions from "../actions/test";

export const testReducers = {
  isCompleted: (state = false, action) => {
    switch (action.type) {
      case testActions.TEST_COMPLETED:
        return action.payload.completed;
      case testActions.TEST_PENDING:
        return action.payload.pending;
      default:
        return state;
    }
  },
  testGetPending: (state = "", action) => {
    switch (action.type) {
      case testActions.TEST_GET_PENDING:
        return action.payload.isPending;
      case testActions.TEST_CREATE_PENDING:
        return action.payload.isPending;
      case testActions.TEST_SCHEDULE_PENDING:
        return action.payload.isPending;
      case testActions.COMPILE_PENDING:
        return action.payload.isPending;
      default:
        return state;
    }
  },
  testSuccess: (state = "", action) => {
    switch (action.type) {
      case testActions.TEST_CREATE_SUCCESS:
        return action.payload.data;
      case testActions.TEST_SCHEDULE_SUCCESS:
        return action.payload.data;
      case testActions.COMPILE_SUCCESS:
        return action.payload.data;
      default:
        return state;
    }
  },
  testGetFail: (state = "", action) => {
    switch (action.type) {
      case testActions.TEST_GET_FAIL:
        return action.payload.error;
      case testActions.TEST_CREATE_FAIL:
        return action.payload.error;
      case testActions.TEST_SCHEDULE_FAIL:
        return action.payload.error;
      case testActions.COMPILE_FAIL:
        return action.payload.error;
      default:
        return state;
    }
  },
  testData: (state = { id: 0, title: "", question: [] }, action) => {
    switch (action.type) {
      case testActions.TEST_GET_SUCCESS:
        // return action.payload.question_data;
        return Object.assign({}, state, action.payload.test_data);
      default:
        return state;
    }
  },
  allTests: (state = [], action) => {
    switch (action.type) {
      case testActions.TEST_GET_ALL_SUCCESS:
        return action.payload.data;
      default:
        return state;
    }
  }
};
