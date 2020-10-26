import { update } from "./update";

export const getTeams = (params) => (dispatch) => {
  // TODO: Brad said to get this data from the API BUT THE API DOESNT EXIST YET
  // I NEED TO COME BACK AND FILL THIS IN ONCE THE API EXISTS
  dispatch(
    update({
      key: "teams",
      value: [
        {
          teamName: "Teamsnap Turtles",
          captain: {
            firstName: "Kristen",
            lastName: "Jenks",
          },
        },
        {
          teamName: "TeamSnap Turkeys (because Turtles was already taken)",
          captain: {
            firstName: "Mike",
            lastName: "Baldo",
          },
        },
        {
          teamName: "Lion Brigade",
          captain: {
            firstName: "Ciara",
            lastName: "Bujanos",
          },
        },
      ],
    })
  );
};
