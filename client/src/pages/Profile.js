import React from "react";
import { Navigate, useParams } from "react-router-dom";

import PostList from "../components/PostList";
import FriendList from "../components/FriendList";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();
  console.log(userParam);

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });
  // console.log(data);
  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  //if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //return <Navigate to="/profile" />;
  //}

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);
  if (!user?.username) {
    return (
      <h4>
        Please sign up or log in
      </h4>
    );
  }

  return (
    <div id="profile" className="reactions">
      <div className="flex-row justify-space-between mb-3 mt-2">
        <div className="col-12 mb-3 col-lg-8">
          <PostList posts={user.posts} />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
