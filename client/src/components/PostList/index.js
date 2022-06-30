import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>There is no post yet</h3>;
  }

  return (
    <div classname="block">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="mt-10 pt-10">
            <img
              className="shrink-0 h-50 w-50 rounded-full block"
              // styles={{ Width: 300, Height: 300 }}
              alt=""
              src={`${post.image}`}
            />
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light block"
              >
                {post.username}
              </Link>{" "}
              post on {post.createdAt}
            </p>
            <div className="card-body block">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0 block">
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
