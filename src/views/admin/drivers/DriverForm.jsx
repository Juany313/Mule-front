import React from "react";
import icon_cancel from "../../../assets/Icon_cancelar.svg";
import { useDispatch, useSelector } from "react-redux";
import { postDriver, setInfoUserLogged } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { validateDrivers } from "./validateDrivers.js";

const DriverForm = ({ setShowModal, actualBackOrder, setActualBackOrder }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(postDriver(actualBackOrder));
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (actualBackOrder) {
      setErrors(validateDrivers(actualBackOrder));
    }
  }, [actualBackOrder]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActualBackOrder({
      ...actualBackOrder,
      [name]: value,
    });
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (value !== "none") {
      setActualBackOrder((prevState) => {
        const updatedField = Array.isArray(prevState[name])
          ? prevState[name].includes(value)
            ? prevState[name]
            : [...prevState[name], value]
          : value;

        return {
          ...prevState,
          [name]: updatedField,
        };
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div
        className="bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20"
        style={{ width: "500px", maxHeight: "80vh", overflowY: "auto" }}
      >
        CARGAR NUEVO CONDUCTOR
        <div
          className="icon-create-container"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img
            src={icon_cancel}
            alt="crear"
            onClick={handleCancel}
            className="icon-create"
            style={{ cursor: "pointer" }}
          />
        </div>
        <form className="space-y-4" onSubmit={handleSave}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre y apellido
            </label>
            <input
              type="text"
              name="name"
              value={actualBackOrder.name}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <p style={{ color: "darkgrey" }}>{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Antigüedad
            </label>
            <input
              type="number"
              name="antiquity"
              value={actualBackOrder.antiquity}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.antiquity && <p style={{ color: "darkgrey" }}>{errors.antiquity}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={actualBackOrder.email}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p style={{ color: "darkgrey" }}>{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CBU
            </label>
            <input
              type="number"
              name="debit"
              value={actualBackOrder.debit}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.debit && (
              <p style={{ color: "darkgrey" }}>{errors.debit}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              name="status"
              value={actualBackOrder.status}
              onChange={(e) => handleSelectChange(e)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar</option>
              <option value="disponible">Disponible</option>
              <option value="en asignacion">En asignación</option>
              <option value="en ruta">En ruta</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverForm;