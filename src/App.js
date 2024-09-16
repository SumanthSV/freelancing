import './index.css';
import './App.css'
import Home from './components/Basepages/Home'
import Navbar from './components/Basepages/Navbar'
import Signin from './components/Basepages/Signin';
import Signup from './components/Basepages/Signup';
import Project_List from './components/Projects/Project_List';
import Project_Details from './components/Projects/Project_Details';
import Footer from './components/Basepages/Footer';
import Threee from './components/Basepages/Threee';
import Profile from './components/UserProfiles/Freelancer_Profile';

import { Routes  ,BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navbar/>
        {/* <Threee/> */}
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/signup' Component={Signup} />
          <Route path='/signin' Component={Signin} />
          <Route path='/freelancer_Profile' Component={Profile}/>
          <Route path='/project_details' Component={Project_Details}/>
          <Route path='/project_list' Component={Project_List}/>
          <Route path='/footer' Component={Footer}/>
        </Routes>
        
        </Router>
    </>
  );
}

export default App;
