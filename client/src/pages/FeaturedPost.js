import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_FEATUREDPOST } from "../utils/queries";

const FeaturedPost = (props) => {
  const { loading, data } = useQuery(QUERY_FEATUREDPOST);
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
          src={`${featuredpost.image}`}
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
    </div>
  );
};

export default FeaturedPost;
