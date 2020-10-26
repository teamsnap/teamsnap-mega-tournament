import React, { useState } from "react";
import FormInput from "./FormInput";
import { useHistory } from "react-router-dom";

interface Props {
  submitTeam: any;
  baseurl: string;
}

const NewTeamForm: React.FC<Props> = ({ submitTeam, baseurl }) => {
  const history = useHistory();
  const [teamName, setTeamName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="card">
      <h4 style={{ textAlign: "center" }}>Register your team</h4>
      <div>
        <FormInput
          label="Team Name:"
          onChange={(e: any) => setTeamName(e.target.value)}
          value={teamName}
        />
      </div>
      <br style={{ color: "black" }}></br>
      <div>
        <h4 style={{ margin: "10px 0" }}>Team Captain</h4>
        <div>
          <FormInput
            label="First name:"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <FormInput
            label="Last name:"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="submit-btn btn"
              type="submit"
              disabled={!teamName || !firstName || !lastName}
              onClick={(e) => {
                e.preventDefault();
                submitTeam({
                  url: baseurl + "/new-team",
                  teamName,
                  firstName,
                  lastName,
                });
                history.push("/teams");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTeamForm;
