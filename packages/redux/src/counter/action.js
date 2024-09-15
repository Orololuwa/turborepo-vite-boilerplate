import * as reducers from "./reducer";
export var increment = function () {
    return function (dispatch) {
        dispatch(reducers.increment());
    };
};
