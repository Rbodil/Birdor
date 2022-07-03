import './homepage.css'
import React, { useState } from "react";
import PostList from "../PostList";
import FriendList from "../FriendList";
import FeaturedPost from "../../pages/FeaturedPost";
import PostForm from "../PostForm";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import {
  QUERY_POSTS, QUERY_ME_BASIC,
  // QUERY_FEATUREDPOST 
} from "../../utils/queries";
//import SinglePost from "../../pages/SinglePost.js";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();
  const [fix, setFix] = useState(false);
  function setFixedSidebar() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixedSidebar);

  return (
    <main className='homepage'>
      <div className='container post'>
        <div className='card featured-post'>
          <h1>Featured Post</h1>
          <div className='card single-post'>
            <FeaturedPost />
          </div>
        </div>
        <div>
          <div className='card post-list'>
            <h1>Post a Bird</h1>
            {loggedIn && (
              <div className='card'>
                <PostForm />
              </div>
            )}
            <h1>Recent Post</h1>
            <div className="card list-single-post">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} />
              )}
            </div>
            {loggedIn && userData ? (
              <div>
                <FriendList
                  username={userData.me.username}
                  friendCount={userData.me.friendCount}
                  friends={userData.me.friends}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>


    </main>
  );
};

export default Home;
