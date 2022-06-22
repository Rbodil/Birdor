import LoginForm from "./components/login/login";
import SignUpForm from "./components/signUp/signUp";
import Homepage from "./components/homepage/homepage";
import Nav from "./components/Nav/nav";
import Profile from "./components/profile/profile";

function App () {
  return (
    <div className="App">
    <main>
      <Nav selectedSection={selectedSection}></Nav>
      <div className='main'>
        <Homepage></Homepage>
        <Profile></Profile>
        <SignUpForm></SignUpForm>
        <LoginForm></LoginForm>
      </div>
    </main>
  </div>
  );
};

export default App;