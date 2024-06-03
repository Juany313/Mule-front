/* utils */
import validateDrivers from "./validateDrivers"

/* hooks */
import {useDispatch} from "react-redux";
import { useState } from "react";postDriver

/* actions */
import {postDriver} from "../../../redux/actions/index"

const CreateDriver = () => {

    /* Estado global */
  const dispatch = useDispatch();

  /* Estados locales */
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [driverData, setDriverData] = useState({
        name: "",
        //email: "",
        
      });

      const [errors, setErrors] = useState({
        name: "",
        //email: "",
      });


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setDriverData({ ...driverData, [property]: value });
    
        setErrors((prevErrors) => {
          const newErrors = validateDrivers({
            ...driverData,
            [property]: value, 
          });
      
    
          return newErrors;
          });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitButtonClicked(true);
      
        const result =  dispatch(postDriver(driverData));
        
        
      };



  return (
    <div className="  flex justify-center items-center mt-[200px]">
        <div className="bg-gray-400 p-8 rounded-xl w-auto  lg:w-[450px]">
        
        <form className="mb-8  " onSubmit={handleSubmit}>

            <div className="mb-4">
                <div className="relative ">
                <input
                    type="text"
                    name="name"
                    value={driverData.name}
                    onChange={handleChange}
                    className="py-3 pl-8 pr-8  w-full outline-none rounded-lg focus:border focus:border-black"
                    placeholder="Nombre"
                />
                </div>
                {submitButtonClicked && errors.name && <span className="text-red-800 mb-4">{errors.name}</span>}
            </div>

            <div className="mb-4">
                <div className="relative ">
                <input
                    type="email"
                    name="email"
                    value={driverData.email}
                    onChange={handleChange}
                    className="py-3 pl-8 pr-8  w-full outline-none rounded-lg focus:border focus:border-black"
                    placeholder="Correo electrónico"
                />
                </div>
                {submitButtonClicked && errors.email && <span className="text-red-800 mb-4">{errors.email}</span>}
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-gray-500 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
                >
                    Crear Conductor
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default CreateDriver