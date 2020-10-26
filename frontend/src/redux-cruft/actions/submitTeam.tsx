import { update } from "./update";
import API from "../../api";

export const submitTeam = (params) => (dispatch) => {
  console.log(params);
  if (params) {
    dispatch(
      update({
        key: "teams",
        value: [
          {
            teamName: params.name,
            captain: {
              firstName: params.firstName,
              lastName: params.lastName,
            },
          },
        ],
      })
    );
  }

  return API.postData(params.url, params).then((data) => {});
};
