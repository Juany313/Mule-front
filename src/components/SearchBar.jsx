import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderById } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getOrderById(id));
    setId("");
    navigate(`ordershipment/detail/${id}`);
  };

  return (
    <div className="flex items-center justify-start mt-8 ml-4">
      <form onSubmit={handleSubmit} className="flex ">
        <input
          className="border border-g500 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-20 block w-full appearance-none leading-normal"
          type="text"
          value={id}
          placeholder="Código de seguimiento"
          onChange={handleChange}
        />
        <button
          className="bg-s300 hover:bg-p400 text-white font-bold py-2 px-4 ml-2 rounded-r-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
