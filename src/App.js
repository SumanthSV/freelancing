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
import Freelancer_Profile from './components/UserProfiles/Freelancer_Profile';
import Services from './components/Services'
import Profile_form from './components/Freelancer_form'

import { Routes  ,BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navbar/>
        {/* <Threee/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/freelancer_profile' element={<Freelancer_Profile/>}/>
          <Route path='/project_details' element={<Project_Details/>}/>
          <Route path='/project_list' element={<Project_List/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Freelancer_form' element={<Profile_form/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
