import React from "react";

const FormField: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="form-field">{children}</div>;
};

interface Props {
    submitTeam: any;
    baseurl: string;
}

interface Team {
    teamName: string;
    captainFirstName: string;
    captainLastName: string;
}

const NewTeamForm: React.FC<Props> = ({ submitTeam, baseurl }) => {
    const [team, setTeam] = React.useState<Team>({
        teamName: "",
        captainFirstName: "",
        captainLastName: "",
    });

    const handleChange = (e: React.SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setTeam((prevState: Team) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const isDisabled = (): boolean => {
        let key: keyof typeof team;
        for (key in team) {
            if (!team[key]) return true;
        }
        return false;
    };

    return (
        <div className="card">
            <form>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h4>New Team</h4>
                    <FormField>
                        <label htmlFor="teamName">Name:</label>
                        <input
                            id="teamName"
                            required={true}
                            type="text"
                            name="teamName"
                            value={team.teamName}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <label htmlFor="captainFirstName">
                            Captain First Name:
                        </label>
                        <input
                            id="captainFirstName"
                            required={true}
                            type="text"
                            name="captainFirstName"
                            value={team.captainFirstName}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField>
                        <label htmlFor="captainLastName">
                            Captain Last Name:
                        </label>
                        <input
                            id="captainLastName"
                            required={true}
                            type="text"
                            name="captainLastName"
                            value={team.captainLastName}
                            onChange={handleChange}
                        />
                    </FormField>
                    <input
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            submitTeam({ url: baseurl + "/teams", team });
                        }}
                        disabled={isDisabled()}
                    />
                </div>
            </form>
        </div>
    );
};

export default NewTeamForm;
