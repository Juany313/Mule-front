import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeasures } from "../redux/actions/index";
import { useEffect } from "react";

const Measure = () => {
  const dispatch = useDispatch();
  const allMeasures = useSelector((state) => state.allMeasures);

  useEffect(() => {
    dispatch(getAllMeasures());
  }, [dispatch]);

  const handleClickMeasure = (e) => {
    e.preventDefault();
    dispatch(getAllMeasures(e.target.value));
  };

  return (
    <div>
      <section>
        <select
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
          onChange={(e) => {
            handleClickMeasure(e);
          }}
        >
          <option value="all">Tamaño del paquete</option>
          {allMeasures.map((elem) => {
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

export default Measure;
