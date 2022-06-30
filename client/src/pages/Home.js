import React from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import FriendList from "../components/FriendList";
// import FeaturedPost from "./FeaturedPost";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";
import photoPort1 from "../assets/images/birdmap.jpeg";
// import SinglePost from "./SinglePost";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_FEATUREDPOST);
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME);
  const posts = data?.posts || [];
  // console.log(userData);
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="reactions relative">
        <div className="recent-post absolute mt-40 pl-40 ml-40 pt-40">
          <div className="box-content h-50 w-50 border-4">
            {/* <FeaturedPost /> */}
            <h3>
              Birdo pages make the birding world a smaller place. Follow along
              with sightings from friends, and meet new birders. Join the
              world’s largest birding community.
            </h3>
            <img styles={{ Width: 300, Height: 300 }} alt="" src={photoPort1} />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="mt-20 pt-10 ml-20">Share A New Bird Sighting</h1>
        {loggedIn && (
          <div className="ml-20 ">
            <PostForm />
          </div>
        )}
        <div
          className={`mt-20 pt-10 ml-20 mr-20 flex flex-wrap relative ${
            loggedIn && "col-lg-6"
          }`}
        >
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
    </main>
  );
};

export default Home;
