// import React from "react";
// import CardTicket from "../../../components/CardAdmin";
// import Linecharts from "../../../components/Linecharts";
// import PieChart from "../../../components/PieChart";

// const AdminHome = () => {
//   return (
//     <div>
//       <div className=" px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
//         {/* Card */}
//         <CardTicket
//           packages="total"
//           totalPackage="600"
//           text="Pedidos totales"
//         />
//         <CardTicket
//           packages="pending"
//           totalPackage="200"
//           text="Pedidos en ruta"
//         />
//         <CardTicket
//           packages="delivered"
//           totalPackage="200"
//           text="Pedidos Entregados"
//         />
//         <CardTicket
//           packages="iniciated"
//           totalPackage="200"
//           text="Pedidos en despacho"
//         />
//       </div>
//       <div className="bg-p500/10 mx-8 p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8 ">
//         <div className="grid col-start-1">
//           <p className="text-center mb-2">Rendimiento de ganancias</p>
//           <Linecharts />
//         </div>
//         <div className="grid col-start-2">
//           <p className="text-center mb-2">Rendimiento de ganancias</p>
//           <PieChart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

import React from "react";
import CardTicket from "../../../components/CardAdmin";
import Linecharts from "../../../components/Linecharts";
import PieChart from "../../../components/PieChart";

const AdminHome = () => {
  return (
    <div className="">
      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
        {/* Card */}
        <CardTicket
          packages="total"
          totalPackage="600"
          text="Pedidos totales"
        />
        <CardTicket
          packages="pending"
          totalPackage="200"
          text="Pedidos en ruta"
        />
        <CardTicket
          packages="delivered"
          totalPackage="200"
          text="Pedidos Entregados"
        />
        <CardTicket
          packages="iniciated"
          totalPackage="200"
          text="Pedidos en despacho"
        />
      </div>
      <div className="bg-p500/10 mx-8 p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8 mb-4">
        <div className="grid col-start-1">
          <p className="text-center mb-2">Rendimiento de ganancias</p>
          <Linecharts />
        </div>
        <div className="grid col-start-2">
          <p className="text-center mb-2">
            Estadísticas de envíos según Provincia
          </p>
          <div className="w-full h-64 mx-auto">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
