import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './components/getuser/User';
import Edit from './components/updateuser/Edit';
import Add from './components/adduser/Add';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
