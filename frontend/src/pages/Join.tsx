import React from 'react';
import {
  Link
} from "react-router-dom";
import NewTeamFormContainer from '../components/NewTeamFormContainer';

const Join: React.FC<{baseurl: string}> = ({baseurl}) => {

  return (
    <>
      <NewTeamFormContainer baseurl={baseurl} />
    </>
  );
}

export default Join;
