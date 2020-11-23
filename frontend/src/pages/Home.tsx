import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  return (
    <>
      <h2>Registration for the TeamSnap Mega Tournament is now open!</h2>
      <Link to="/join">Register your team</Link>
    </>
  );
}

export default Home;
