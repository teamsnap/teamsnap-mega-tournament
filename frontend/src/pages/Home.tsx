import React from "react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Registration for the TeamSnap Mega Tournament is now open!</h2>
      </div>
      <div>
        <button
          className="register-btn btn"
          onClick={() => history.push("/join")}
        >
          Register team
        </button>

        <button
          className="register-btn btn"
          onClick={() => history.push("/teams")}
        >
          View teams
        </button>
      </div>
    </div>
  );
};

export default Home;
