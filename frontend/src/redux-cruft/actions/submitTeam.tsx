import { update } from "./update";
import API from "../../api";

export const submitTeam = (params) => (dispatch) => {
  return API.postData(params.url, params).then((data) => {
    debugger;
    // update(data)
  });
}
