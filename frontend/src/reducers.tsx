export default function rootReducer(state: any = [], action: any) {
  switch (action.type) {
    case "UPDATE":
      const newTeamArr = state.teams.concat(action.value);
      return Object.assign({}, state, { teams: newTeamArr });
    case "GET_TEAMS":
      return {
        ...state,
      };
    default:
      return state;
  }
}
