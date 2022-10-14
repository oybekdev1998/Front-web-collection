import './App.css';

<<<<<<< HEAD
//import LogIn from "./pages/registration/LogIn";
//import SignUp from "./pages/registration/SignUp";
//import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//import Home from "./pages/Home";
import EditProfile from './components/EditProfile';
function App() {
  
  return (
    <>
        <EditProfile />
      {/* <Router>
        <Routes>
            <Route path={'/*'} element={<Home/>}/>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
        </Routes>
      </Router> */}
    </>
=======
import LogIn from "./pages/registration/LogIn";
import SignUp from "./pages/registration/SignUp";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  
  return (
      <Router>
          <Routes>
              <Route path={'/*'} element={<Home/>}/>
              <Route path={'/login'} element={<LogIn/>}/>
              <Route path={'/signup'} element={<SignUp/>}/>
          </Routes>
      </Router>
>>>>>>> 83e94296b7aef0d96ff0d579cba22d7302ec99ac
  );
}

export default App;
