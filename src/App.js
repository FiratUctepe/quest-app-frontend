import './App.css';
import Post from './component/Post/Post';
import Navbar from './component/Navbar/Navbar';
import User from './component/User/User';
import Home from './component/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path = "/users/:userId" element = {<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
