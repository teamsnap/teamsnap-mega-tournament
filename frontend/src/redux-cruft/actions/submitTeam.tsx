import { update } from "./update";
import API from "../../api";

type TeamInfo = {
  url: string,
  teamName: string,
  teamCaptain: string
}

export const submitTeam = (teamInfo: TeamInfo) => dispatch => {
  if (teamInfo) {
    dispatch(update({key: "teams", value: [
      {
        teamCaptain: teamInfo.teamCaptain,
        teamName: teamInfo.teamName
      }
    ]}));
  }

  return API.postData(teamInfo.url, teamInfo).then((data) => {});
}
