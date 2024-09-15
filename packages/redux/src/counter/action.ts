import * as reducers from "./reducer";
import { Dispatch } from "@reduxjs/toolkit";

export const increment = () => {
  return (dispatch: Dispatch) => {
    dispatch(reducers.increment());
  };
};
