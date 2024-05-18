import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { IoHomeOutline } from "react-icons/io5";
  import { BsBoxSeam } from "react-icons/bs";
  import { LuPackageSearch } from "react-icons/lu";
  import { TfiLocationPin } from "react-icons/tfi";
   
  export function NavProfile() {

    const logout = () => {
      localStorage.removeItem("signUp");
      window.location.reload();
      window.location.href = "/auth";
    }

    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Perfil
          </Typography>
        </div>
        <List>
            <ListItem>
            <ListItemPrefix>
              <IoHomeOutline className="h-5 w-5" />
            </ListItemPrefix>
            Inicio
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BsBoxSeam className="h-5 w-5" />
            </ListItemPrefix>
            Hacer un envío
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <LuPackageSearch className="h-5 w-5" />
            </ListItemPrefix>
            Ver mis envíos
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <TfiLocationPin className="h-5 w-5" />
            </ListItemPrefix>
            Sucursales
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <button onClick={logout} > 
              Cerrar sesión
            </button>
          </ListItem>
        </List>
      </Card>
    );
  }