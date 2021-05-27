import React from "react";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import { fetchUserRequest, inputName } from "../../Redux/actions";

const mapStateToProps = (store) => {
  const { input_name, fetchSuccessStatus } = store.app;
  return { input_name, fetchSuccessStatus };
};

function LandingPage({
  fetchUserRequest,
  input_name,
  inputName,
  fetchSuccessStatus,
}) {
  console.log("The input name", input_name);
  return (
    <>
      <div className="landing_page">
        <div className="landing_page--container">
          <div className="landing_page--container__heading">
            <p>Github Profile</p>
            <p>Generate your Github Profile</p>
          </div>
          <div className="landing_page--container__input">
            <p>Github Username</p>
            <div className="landing_page--container__input--container">
              <input
                type="text"
                value={input_name}
                onChange={(e) => inputName(e.target.value)}
              />
              <button onClick={() => fetchUserRequest(input_name)}>
                Generage
              </button>
            </div>
          </div>
        </div>
      </div>
      {fetchSuccessStatus && <div className="user_details"></div>}
      {fetchSuccessStatus && (
        <div className="user_details--card">
          <UserProfile />
        </div>
      )}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequest: (name) => dispatch(fetchUserRequest(name)),
    inputName: (inputname) => dispatch(inputName(inputname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
