import { getTeamList } from "./getTeamList";

export const getTeams = (params) => (dispatch) => {
  // TODO: Brad said to get this data from the API BUT THE API DOESNT EXIST YET
  // I NEED TO COME BACK AND FILL THIS IN ONCE THE API EXISTS
  dispatch(getTeamList(params));
};
