
export default function rootReducer(state: any = {}, action: any) {
  switch (action.type) {
    case "UPDATE":
      console.log('action', action);
      return Object.assign({}, state, { [action.key]: action.value });
    default:
      return state
  }
}
