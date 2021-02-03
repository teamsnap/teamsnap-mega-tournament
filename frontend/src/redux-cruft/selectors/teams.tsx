export const selectTeams = (state: {}) => {
    return (state as any).teams || [];
};
