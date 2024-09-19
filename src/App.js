import './index.css';
import './App.css'
import Home from './components/Basepages/Home'
import Navbar from './components/Basepages/Navbar'
import Signin from './components/Basepages/Signin';
import Signup from './components/Basepages/Signup';
import ProjectList from './components/Projects/Project_List';
import ProjectDetails from './components/Projects/Project_Details';
import Footer from './components/Basepages/Footer';
import Threee from './components/Basepages/Threee';
import Example from './components/Example';
import FreelancerProfile from './components/UserProfiles/Freelancer_Profile';
import Services from './components/Basepages/Services'
import UserProfileForm from './components/UserProfiles/Freelancer_form'
import Home2 from './components/Home2'

import { Routes  ,BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navbar/>
        {/* <Example/> */}
        {/* <Threee/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/freelancer_profile' element={<FreelancerProfile/>}/>
          <Route path='/project_details' element={<ProjectDetails/>}/>
          <Route path='/project_list' element={<ProjectList/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/freelancer_form' Component={UserProfileForm} />
          <Route path='/home2' Component={Home2}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
