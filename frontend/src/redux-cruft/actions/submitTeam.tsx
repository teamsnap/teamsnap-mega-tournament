import { update } from "./update";
import API from "../../api";

export const submitTeam = (params) => (dispatch) => {
  if (params) {
    dispatch(update({
      key: "teams", value: [{
        teamName: params.name,
        captainFirstName: params.captainFirstName,
        captainLastName: params.captainLastName,
      }]
    }));
  }

  return API.postData(params.url, params).then((data) => { });
}
