const initialState = {
  teams: [
  {
    captainName: 'John Snow',
    teamName: 'Teamsnap Turtles'
  },
  {
    captainName: 'Willie Wonka',
    teamName: 'TeamSnap Turkeys (because Turtles was already taken)'
  },
  {
    captainName: 'Captain America',
    teamName: 'Lion Brigade'
  }
]}

export default function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "UPDATE":
      return Object.assign({}, state, {[action.key]: action.value});
    default:
      return state
  }
}
