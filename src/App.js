import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Admindash from './Admin/adminUser/admindashboard';
import { ChakraProvider } from '@chakra-ui/react';
import Ongoing from './Admin/adminUser/Ongoing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Admin/adminUser/Body';
import Cancelled from './Admin/adminUser/Cancelled';
import Timebased from './Admin/adminUser/Timebased';
import User from './Admin/adminUser/User';



function App() {
  return (
    <div>
      {/* <ChakraProvider> */}
        <Router>
          <Routes>
            <Route path="/" exact element={<Admindash/>}/>
            <Route path="/completed" exact element={<Body/>}/>
            <Route path="/ongoing" exact element={<Ongoing/>}/>
            <Route path="/cancelled" exact element={<Cancelled/>}/>
            <Route path="/timebased" exact element={<Timebased/>}/>
            <Route path="/user" exact element={<User/>}/>
      </Routes>
      </Router>
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
