import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (store) => {
  const { users } = store.app;
  return { users };
};

function UserProfile({ users }) {
  const { avatar_url, company, email, location, name, bio } = users;
  return (
    <div className="profile">
      <div className="profile_avatar">
        <img src={avatar_url} alt="avatar_image" />
      </div>
      <div className="profile_name">
        <p>{name}</p>
      </div>
      <div className="profile_bio">
        <p>{bio}</p>
      </div>

      <div className="profile_info">
        <p>Location: {location}</p>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
      </div>
      <div className="profile_button">
        <Link to = 'main-page' style={{textDecoration: "none"}}>
          <button className="profile_button--container">
            <p>View More</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(UserProfile);
