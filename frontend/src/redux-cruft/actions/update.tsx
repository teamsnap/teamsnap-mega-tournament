export const update = (params) => (dispatch) => {
  dispatch({ type: "UPDATE", ...params });
};
