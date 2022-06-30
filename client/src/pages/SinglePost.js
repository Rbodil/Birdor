import React from "react";
import { useParams } from "react-router-dom";

import ReactionList from "../components/ReactionList";
import ReactionForm from "./ReactionForm";
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reactions">
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{" "}
          post on {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
      <div className="border-inherit mt-2 pt-2">
        {post.reactionCount > 0 && <ReactionList reactions={post.reactions} />}
        {Auth.loggedIn() && <ReactionForm postId={post._id} />}
      </div>

    </div>
  );
};

export default SinglePost;
