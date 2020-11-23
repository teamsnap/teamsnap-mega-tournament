import React from 'react';
import NewTeamFormContainer from '../components/NewTeamFormContainer';

const Join: React.FC<{ baseurl: string }> = ({ baseurl }) => <NewTeamFormContainer baseurl={baseurl} />;

export default Join;
