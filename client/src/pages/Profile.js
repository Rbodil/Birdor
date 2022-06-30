import React from "react";
import { useParams } from "react-router-dom";

import PostList from "../components/PostList";
import FriendList from "../components/FriendList";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
// import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);
  if (!user?.username) {
    return <h4>Please sign up or log in</h4>;
  }

  return (
    <div id="profile" className="">
      <div className="mb-3 mt-20">
        <div className="col-12 col-lg-8 mt-20">
          <h1>Your Post List</h1>
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
