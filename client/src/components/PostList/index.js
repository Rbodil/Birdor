import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>There are no posts yet</h3>;
  }

  return (
    <div className="w-full justify-center">

      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card justify-center mb-3">
            <img
              styles={{ minWidth: 100, minHeight: 100 }}
              alt=""
              src={`/images/${post.image}`}
            />
            <p className="card-header justify-center">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              post on {post.createdAt}
            </p>
            <div className="card-body justify-center">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                {post.image && <img src={post.image} height="150px" width="150px"></img>}
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click to{" "}
                  {post.reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;



