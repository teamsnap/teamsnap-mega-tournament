import { update } from "./update";

export const submitTeam = (params) => (dispatch) => {
  if (params) {
    dispatch(
      update({
        key: "teams",
        value: [
          {
            teamName: params.teamName,
            captain: {
              firstName: params.firstName,
              lastName: params.lastName,
            },
          },
        ],
      })
    );
  }
  return params;
  // return API.postData(params.url, params).then((data) => {});
};
