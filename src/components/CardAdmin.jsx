import React from "react";
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const CardTicket = (props) => {

    const { packages, totalPackage, text } = props;
    let status = "";
    let textColor = "";

    switch (packages) {
      case "pending":
        status = "bg-yellow-500/10 text-yellow-500";
        textColor= "text-yellow-500 font-bold"
        break;
      case "delivered":
        status = "bg-green-500/10 text-green-500";
        textColor = "text-green-500 font-bold";
        break;
      case "iniciated":
        status = "bg-red-500/10 text-red-500";
        textColor = "text-red-500 font-bold";
        break;
      case "total":
        status = "bg-blue-500/10 text-blue-500";
        textColor = "text-blue-500 font-bold";
        break;
    }

    return (
      <div className="bg-p500/10 p-8 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <FaBox className={`text-4xl ${status} p-2 box-content rounded-xl`} />
        </div>
        {/* Number Ticket */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{totalPackage}</h1>
          <p className={textColor}>{text}</p>
        </div>
        <hr className="border border-dashed border-gray-500/50 my-4 " />
        <div>
          <Link to="" className="flex items-center gap-2 hover:underline">
            <IoMdAdd /> Iniciar nuevo pedido
          </Link>
        </div>
      </div>
    );
}

export default CardTicket;