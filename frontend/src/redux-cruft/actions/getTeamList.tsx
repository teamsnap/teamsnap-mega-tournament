export const getTeamList = (params) => (dispatch) => {
  dispatch({ type: "GET_TEAMS", ...params });
};
