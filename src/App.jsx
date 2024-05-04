import {BrowserRouter,Routes,Route} from 'react-router-dom';

/* Layout */
import LayoutAuth from './layouts/LayoutAuth';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutError from './layouts/LayoutError';
/* Pages auth*/
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';

/* Pages admin */
import Home from './pages/admin/Home'
import Chat from './pages/admin/Chat';

function App() {
 
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/auth' element={<LayoutAuth/>}>
          <Route index element={<Login/>}/>
          <Route path='registro' element={<Register/>}/>
          <Route path='olvide-password' element={<ForgetPassword/>}/>
        </Route>
        <Route path='/' element={<LayoutAdmin/>}>
          <Route index element={<Home/>}/>
          <Route path='chat' element={<Chat/>}/>
        </Route>
        <Route path='*' element={<LayoutError/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
