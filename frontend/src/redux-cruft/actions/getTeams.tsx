import { update } from "./update";

export const getTeams = (params: any) => (dispatch: any) => {
    // TODO: Brad said to get this data from the API BUT THE API DOESNT EXIST YET
    // I NEED TO COME BACK AND FILL THIS IN ONCE THE API EXISTS
    dispatch(
        update({
            key: "teams",
            value: [
                {
                    teamName: "Teamsnap Turtles",
                },
                {
                    teamName:
                        "TeamSnap Turkeys (because Turtles was already taken)",
                },
                {
                    teamName: "Lion Brigade",
                },
            ],
        })
    );
};
