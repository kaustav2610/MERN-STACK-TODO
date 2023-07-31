import React, { useContext } from "react";
import { context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(context);
  console.log(user)

  return loading ? (
    <Loader />
  ) : (
    <div className="profilebox">
    <div className="profileDetails">
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
    </div>
  );
};

export default Profile;