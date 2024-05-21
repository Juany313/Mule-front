import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypeShipments } from "../redux/actions/index";
import { useEffect } from "react";

const TypeShipments = () => {
  const dispatch = useDispatch();
  const allTypesShipments = useSelector((state) => state.allTypesShipments);

  useEffect(() => {
    dispatch(getTypeShipments());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getTypeShipments(e.target.value));
  };

  return (
    <div>
      <section>
        <select
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
          onChange={(e) => {
            handleClick(e);
          }}
        >
          <option value="all">Tipo de envío</option>
          {allTypesShipments.map((elem) => {
            return (
              <option value={elem.name} key={elem.name}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </section>
    </div>
  );
};

export default TypeShipments;
