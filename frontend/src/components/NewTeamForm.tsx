import React from 'react';

interface Props {
  submitTeam: any,
  baseurl: string,
}

const NewTeamForm: React.FC<Props> = ({submitTeam, baseurl}) => {
  const [name, setName] = React.useState("");

  return (
    <div className="card">
      <h4>New Team</h4>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" onClick={(e) => {
        e.preventDefault();
        submitTeam({url: baseurl + "/new-team", name: name});
      }} />
    </div>
  );
}

export default NewTeamForm;
