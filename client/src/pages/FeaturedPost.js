import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_FEATUREDPOST } from "../utils/queries";

const FeaturedPost = (props) => {
  const { loading, data } = useQuery(QUERY_FEATUREDPOST);
  //   console.log(data);
  const featuredpost = data?.featuredpost || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <img
          styles={{ minWidth: 100, minHeight: 100 }}
          alt=""
          src={`/images/${featuredpost.image}`}
        />
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {featuredpost.username}
          </span>{" "}
          post on {featuredpost.createdAt}
        </p>
        <div className="card-body">
          <p>{featuredpost.postText}</p>
        </div>
      </div>

      {/* {featuredpost.reactionCount > 0 && (
        <ReactionList reactions={featuredpost.reactions} />
      )} */}
      {/* {Auth.loggedIn() && <ReactionForm postId={featuredpost._id} />} */}
    </div>
  );
};

export default FeaturedPost;
