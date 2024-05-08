import {BrowserRouter,Routes,Route} from 'react-router-dom';

/* Layout */
import LayoutAuth from './layouts/LayoutAuth';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutError from './layouts/LayoutError';
/* Pages auth*/
import Landing from './views/Landing';
import Service from './views/Service';
import Ordershipment from './views/Ordershipment';
import About from './views/About';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import ForgetPassword from './views/auth/ForgetPassword';

/* Pages admin */
import Home from './views/admin/Home'

function App() {
 
  return (
    <BrowserRouter>
      <Routes > 
        <Route path='/auth' element={<LayoutAuth/>}>
          <Route index element={<Login/>}/>
          <Route path='registro' element={<Register/>}/>
          <Route path='olvide-password' element={<ForgetPassword/>}/>
        </Route>
        
          <Route exact path="/" element={<Landing/>}/> 

        <Route path='/header' element={<LayoutAdmin/>}>
          <Route  index element={<Home/>}/> 
          <Route  path='about' element={<About/>}/> 
          <Route  path='service' element={<Service/>}/> 
          <Route  path='ordershipment' element={<Ordershipment/>}/> 
        </Route>

        <Route path='*' element={<LayoutError/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
