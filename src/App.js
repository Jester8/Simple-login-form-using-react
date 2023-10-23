
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Login from './Components/Pages/Login/login';
import Signup from './Components/Pages/Signup/signup';


 
function App() {
  return (
   <BrowserRouter>
       <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/signup" Component={Signup}/>
       </Routes>
   </BrowserRouter>
  );
}

export default App;
