import { update } from "./update";
import API from "../../api";

export const submitTeam = (params) => (dispatch) => {
    if (params) {
        dispatch(
            update({
                key: "teams",
                value: [
                    {
                        teamName: params.team.teamName,
                        captainFirstName: params.team.captainFirstName,
                        captainLastName: params.team.captainLastName,
                    },
                ],
            })
        );
    }

    return API.postData(params.url, params.team).then((data) => {});
};
