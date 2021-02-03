import { update } from "./update";

export const getTeams = () => (dispatch: any) => {
    // TODO: Brad said to get this data from the API BUT THE API DOESNT EXIST YET
    // I NEED TO COME BACK AND FILL THIS IN ONCE THE API EXISTS
    // moved this "pre loaded state" into the app root by assigning teams in the store on init. Remove that once API is done
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
