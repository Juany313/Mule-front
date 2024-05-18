import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { IoHomeOutline } from "react-icons/io5";
  import { BsBoxSeam } from "react-icons/bs";
  import { AiOutlineShop } from "react-icons/ai";
  import { LiaShippingFastSolid } from "react-icons/lia";
   
  export function NavProfile() {
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
              <IoHomeOutline className="h-5 w-5 -translate-x-1/2" />
            </ListItemPrefix>
            Inicio
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BsBoxSeam className="h-4 w-4 -translate-x-1/2" />
            </ListItemPrefix>
            Hacer un envío
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <LiaShippingFastSolid className="h-5 w-5 -translate-x-1/2" />
            </ListItemPrefix>
            Ver mis envíos
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <AiOutlineShop className="h-5 w-5 -translate-x-1/2" />
            </ListItemPrefix>
            Sucursales
          </ListItem>
          
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-4 w-4 -translate-x-1/2" />
            </ListItemPrefix>
            Cerrar sesión
          </ListItem>
        </List>
      </Card>
    );
  }