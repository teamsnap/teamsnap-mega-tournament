export default function rootReducer(state: any = {}, action: any) {
    switch (action.type) {
        case "UPDATE":
            return Object.assign({}, state, {
                [action.key]: [...action.value, ...state[action.key]],
            });
        default:
            return state;
    }
}
