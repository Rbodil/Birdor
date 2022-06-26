import './homepage.css'

import React, { useState } from "react";
import PostList from "../PostList";
import FriendList from "../FriendList";
import PostForm from "../PostForm";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC, QUERY_FEATUREDPOST } from "../../utils/queries";
// import photoPort1 from "/1.jpeg'";
import SinglePost from "../../pages/SinglePost.js";
import Cover from "../../images/cover.jpeg"

const Home = () => {
  const { loading, data } = useQuery(QUERY_FEATUREDPOST);
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
        <div>
            <div className='featured-post'>
               <h1>Featured Post</h1>
               <div className='single-post'>
                   <SinglePost /> 
               </div> 
               </div>
               <div className='flex-row justify-space-between mt-20 pt-20'>
                   <div className='recent-post'>
                       <h1 className='mt-20'>Recent Posts</h1>
                       {loggedIn && (
                        <div className="col-12 mb-3">
                            <PostForm />
                        </div>
                        )}
                        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
                        {loading ? (
                         <div>Loading...</div>
                        ) : (
                        <PostList posts={posts} title="Some Feed for Post(s)..." />
                        )}
                        </div>
                        {loggedIn && userData ? (
                        <div className="col-12 col-lg-3 mb-3">
                        <FriendList
                        username={userData.me.username}
                        friendCount={userData.me.friendCount}
                        friends={userData.me.friends}
                        />
                        </div>
                        ) : null}   
                   </div>
                   <aside className={fix ? "sidebar fixed" : "sidebar"}>
                    <Link to="https://www.instagram.com/" className="exlink">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="https://www.facebook.com/" className="exlink">
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                    <Link to="https://twitter.com/?lang=en" className="exlink">
                        <i className="fab fa-twitter-square"></i>
                    </Link>
                    <Link to="https://www.youtube.com/" className="exlink">
                        <i className="fab fa-youtube-square"></i>
                    </Link>
                    <Link to="https://www.pinterest.com/" className="exlink">
                        <i className="fab fa-pinterest-square"></i>
                    </Link>
                    </aside>
               </div> 
            </div>   
    </main>
  );
};

export default Home;
