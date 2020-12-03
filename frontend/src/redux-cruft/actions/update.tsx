export const update = (params) => (dispatch) => {
  // IDK Let the reducer figure it out
  dispatch({ type: "UPDATE", ...params })
}
