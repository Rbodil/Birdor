import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/homepage/homepage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header className='bg-secondary w-screen flex-row justify-center pt-2 pb-2 shrink top-0 fixed z-9999 h-24'/>
          {/* <img src="/images/cover.jpeg" /> */}
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
