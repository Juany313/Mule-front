import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Importación de layouts y componentes
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAdminAlpha from "./layouts/LayoutAdminAlpha";
import LayoutError from "./layouts/LayoutError";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail";
import About from "./views/About";
import Service from "./views/Service";
import Ordershipment from "./views/Ordershipment";
import OrderForm from "./components/OrderForm";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ForgetPassword from "./views/auth/ForgetPassword";
import Home from "./views/admin/Home";
import Profile from "./views/profile/Profile";
import Payment from "./components/Payment";
import Dashboard from "./views/auth/Dashboard";
import Customers from "./views/admin/customers/Customers"
import Drivers from "./views/admin/drivers/Drivers"
import AuthenticatedApp from "./views/profile/AuthenticatedApp";
import Shipments from "./views/auth/Shipments";
import History from "./views/auth/History";
import ConfirmEmail from "./views/auth/ConfirmEmail";
import ConfirmPasswordReset from "./views/auth/ConfirmPasswordReset";


/* Admin */
import Enlistment from "./views/admin/Enlistment/Enlistment";
import AdminHome from "./views/admin/adminHome/AdminHome"



import ShipmentPrice from "./components/ShipmentPrice";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/auth/profile//*" element={<AuthenticatedApp />}></Route> */}
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="history" element={<History />} />
          <Route path="emailConfirm" element={<ConfirmEmail />} />
          <Route path="reset-password" element={<ConfirmPasswordReset />} />

        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/header" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="ordershipment" element={<Ordershipment />} />
          <Route path="pedido" element={<OrderForm />} />
          <Route path="ordershipment/detail/:id" element={<Detail />} />
          <Route path="payment" element={<Payment />} />

         

          <Route path= "shipment-price" element={ <ShipmentPrice /> } />

          <Route path="prueba" element={<ReviewForm />} />
        </Route>
        <Route path="/admin" element={<LayoutAdminAlpha />}>
          <Route index element={<AdminHome />} />
          <Route path="enlistment" element={<Enlistment />} />
          <Route path="customers" element={<Customers />} />
          <Route path="drivers" element={<Drivers />} />
        </Route>
        <Route path="*" element={<LayoutError />} />
      </Routes>
    </Router>
  );
}


export default App;

