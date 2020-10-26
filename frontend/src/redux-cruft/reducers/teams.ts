export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return [
        ...state,
        {
          teamName: action.teamName,
          captain: action.captain
        }
      ]
    default:
      return state
  }
}