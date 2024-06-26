import useDriver from "../../../hooks/useDriver";
import icon_editar from "../../../assets/Icon_editar1.svg";
import icon_eliminar from "../../../assets/Icon_eliminar1.svg";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";

const DriverRow = ({
  driver,
  setShowModalEdit,
  setShowModalDetail,
  setShowModalDelete,
  setCurrentDriverId,
  setActualDetail,
}) => {
  const onEdit = () => {
    setShowModalEdit(true);
  };

  const onDelete = () => {
    setCurrentDriverId(driver.id);
    setShowModalDelete(true);
  };

  const onDetail = () => {
    setShowModalDetail(true);
    setActualDetail(driver);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{driver.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{driver.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{driver.debit}</td>
      <td className="px-6 py-4 whitespace-nowrap">{driver.antiquity}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {driver.status ? "Activo" : "Inactivo"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-smfont-medium">
        <button style={{ marginRight: "10px" }} onClick={onDelete}>
          <img
            src={icon_eliminar}
            alt="eliminar"
            className="w-5"
            style={{ cursor: "pointer" }}
          />
        </button>
      </td>
    </tr>
  );
};

export default DriverRow;
