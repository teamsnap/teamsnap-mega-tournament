export const update = (params: any) => (dispatch: any) => {
    // IDK Let the reducer figure it out
    console.log("UPDATE", params);
    dispatch({ type: "UPDATE", ...params });
};
