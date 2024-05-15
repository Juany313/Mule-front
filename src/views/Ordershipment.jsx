import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders, orderDeclaredValue } from "../redux/actions";
import Pagination from "../components/Pagination";

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  //  console.log(allOrders)

  //  const [options, setOptions] = useState([  ]);

  //  const set = new Set();

  //  useEffect(() => {
  //    const fetchData = async () => {
  //      try {
  //        const response = await fetch("http://localhost:3000/order_shipments");

  //        const data = await response.json();

  //        data.map((elem) => set.add(elem.city_transmiter, elem.city_receiver, declared_value, pay_method));

  //        const optionsArr = [...set];

  //        setOptions(optionsArr);
  //      } catch (error) {
  //        console.log("error: ", error);
  //      }
  //    };

  //    fetchData();
  //  }, []);

  //order
  const handleClickOrderDeclaredValue = (e) => {
    e.preventDefault();

    // Obtener los nombres de los campos (claves) de los <select>
    const fieldNames = Array.from(
      e.target.parentNode.querySelectorAll("select")
    ).map((select) => select.name);

    // Obtener los valores seleccionados de los <select>
    const selectedValues = Array.from(
      e.target.parentNode.querySelectorAll("select")
    ).map((select) => select.value);

    // Crear un array de objetos donde cada objeto tiene una clave y su valor asociado
    const selectedFields = fieldNames.map((fieldName, index) => ({
      [fieldName]: selectedValues[index],
    }));

    // Llamar a dispatch con el array de objetos clave-valor
    dispatch(orderDeclaredValue(selectedFields));
  };

  return (
    <>
      <div
        id="orderShipment"
        className="min-h-screen bg-p300 flex flex-col items-center justify-start pt-28 text-white"
      >
        <h1 className="font-bold text-4xl mb-6">
          Clientes que confían en nosotros
        </h1>
        <div className="w-full max-w-lg">
          <section className="mb-4">
            <h2 className="font-semibold mb-2">Ciudad origen</h2>
            <select
              className="w-full p-2 bg-white text-g500 rounded-md"
              name="city_transmiter"
              onChange={handleClickOrderDeclaredValue}
            >
              <option value="null">Rosario</option>
              <option value="Esperanza">Esperanza</option>
              <option value="Reconquista">Reconquista</option>
              <option value="Rufino">Rufino</option>
            </select>
          </section>
          <section className="mb-4">
            <h2 className="font-semibold mb-2">Ciudad destino</h2>
            <select
              className="w-full p-2 bg-white text-g500 rounded-md"
              name="city_receiver"
              onChange={handleClickOrderDeclaredValue}
            >
              <option value="null">Rosario</option>
              <option value="Esperanza">Esperanza</option>
              <option value="Reconquista">Reconquista</option>
              <option value="Rufino">Rufino</option>
            </select>
          </section>
          <section className="mb-4">
            <h2 className="font-semibold mb-2">Valor Declarado</h2>
            <select
              className="w-full p-2 bg-white text-g500 rounded-md"
              name="declared_value"
              onChange={handleClickOrderDeclaredValue}
            >
              <option value="null">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
            </select>
          </section>
          <section className="mb-4">
            <h2 className="font-semibold mb-2">Método de pago</h2>
            <select
              className="w-full p-2 bg-white text-g500 rounded-md"
              name="pay_method"
              onChange={handleClickOrderDeclaredValue}
            >
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta de débito">Tarjeta de débito</option>
              <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            </select>
          </section>
        </div>
        <div className="mt-6">
          <Pagination allOrders={allOrders} />
        </div>
      </div>
    </>
  );
};

export default Ordershipment;
