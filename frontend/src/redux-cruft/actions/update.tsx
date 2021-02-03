export const update = (params: any) => (dispatch: any) => {
    // IDK Let the reducer figure it out
    dispatch({ type: "UPDATE", ...params });
};
