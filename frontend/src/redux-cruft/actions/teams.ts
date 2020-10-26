import { update } from "./update";
import API from "../../api";

export const ADD_TEAM = 'ADD_TEAM';

export const addTeam = (teamInfo) => {
  return {
    type: ADD_TEAM,
    id: teamInfo.id,
    teamName: teamInfo.teamName,
    captain: teamInfo.captain
  }
}

export const submitTeam = (params) => (dispatch) => {
  if (params) {
    console.log(params);
    API.postData(params.url, params).then((data) => {
      console.log(params);
      dispatch(addTeam({
        id: data.content.id,
        teamName: data.content.name,
        // TODO: Use data from db once captain is added
        captain: {
          firstName: params.firstName,
          lastName: params.lastName
        }
      }));
    });
  }
}
