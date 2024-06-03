import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const DISTANCES = {
  "buenos aires": {
    cordoba: 695,
    corrientes: 801,
    "entre rios": 362,
    "santa fe": 475,
  },
  cordoba: {
    "buenos aires": 695,
    corrientes: 882,
    "entre rios": 596,
    "santa fe": 340,
  },
  corrientes: {
    "buenos aires": 801,
    cordoba: 882,
    "entre rios": 533,
    "santa fe": 606,
  },
  "entre rios": {
    "buenos aires": 362,
    cordoba: 596,
    corrientes: 533,
    "santa fe": 271,
  },
  "santa fe": {
    "buenos aires": 475,
    cordoba: 340,
    corrientes: 606,
    "entre rios": 271,
  },
};

const calculateWeightByInput = (idMeasure) => {
  if (idMeasure == 1) {
    return Number(1500);
  } else if (idMeasure == 2) {
    return Number(2000);
  } else if (idMeasure == 3) {
    return Number(2500);
  }
};

const calculateCost = (weight, distance) => {
  const ratePerKgPerKm = 0.01;
  return weight * distance * ratePerKgPerKm;
};

const ShipmentPrice = () => {
  const validationSchema = Yup.object().shape({
    city_transmiter: Yup.string().required("Ciudad es requerida"),
    city_receiver: Yup.string().required("Ciudad es requerida"),
    measureId: Yup.number().required("Tamaño es requerido").nullable(),
  });

  const formik = useFormik({
    initialValues: {
      city_transmiter: "",
      city_receiver: "",
      measureId: null,
    },
    validationSchema,
    onSubmit: async ({ city_transmiter, city_receiver, measureId }) => {
      try {
        const distance = DISTANCES[city_transmiter][city_receiver];
        const cost = calculateCost(calculateWeightByInput(measureId), distance);
        Swal.fire({
          title: "Cotización realizada!",
          text: `Tu cotización de envío tiene un valor de $${cost}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Error al cotizar el envío",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    },
  });

  return (
    // <div className="relative overflow-hidden min-h-screen flex items-center justify-center p-3">
    //   <div className="bg-p100 p-4 rounded-xl w-full max-w-4xl shadow-2xl">
    //     <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
    //       COTIZÁ TU ENVÍO
    //     </h1>
    //     <form className="mb-8 space-y-4" onSubmit={formik.handleSubmit}>
    //       <div className="relative mb-4">
    //         <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
    //           ELIJA ORIGEN
    //         </h2>
    //         <select
    //           name="city_transmiter"
    //           value={formik.values.city_transmiter}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
    //         >
    //           <option value="">Seleccionar</option>
    //           <option value="buenos aires">Buenos Aires</option>
    //           <option value="cordoba">Córdoba</option>
    //           <option value="corrientes">Corrientes</option>
    //           <option value="entre rios">Entre Ríos</option>
    //           <option value="santa fe">Santa Fe</option>
    //         </select>
    //         {formik.errors.city_transmiter &&
    //           formik.touched.city_transmiter && (
    //             <span className="text-red-600 font-semibold">
    //               {formik.errors.city_transmiter}
    //             </span>
    //           )}
    //       </div>
    //       <div className="relative mb-4">
    //         <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
    //           ELIJA DESTINO
    //         </h2>
    //         <select
    //           name="city_receiver"
    //           value={formik.values.city_receiver}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
    //         >
    //           <option value="">Seleccionar</option>
    //           <option value="buenos aires">Buenos Aires</option>
    //           <option value="cordoba">Córdoba</option>
    //           <option value="corrientes">Corrientes</option>
    //           <option value="entre rios">Entre Ríos</option>
    //           <option value="santa fe">Santa Fe</option>
    //         </select>
    //         {formik.errors.city_receiver && formik.touched.city_receiver && (
    //           <span className="text-red-600 font-semibold">
    //             {formik.errors.city_receiver}
    //           </span>
    //         )}
    //       </div>
    //       <div className="relative mb-4">
    //         <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
    //           TAMAÑO
    //         </h2>
    //         <select
    //           name="measureId"
    //           value={formik.values.measureId}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
    //         >
    //           <option value="">Seleccionar</option>
    //           <option value="1">Pequeño</option>
    //           <option value="2">Mediano</option>
    //           <option value="3">Grande</option>
    //         </select>
    //         {formik.errors.measureId && formik.touched.measureId && (
    //           <span className="text-red-600 font-semibold">
    //             {formik.errors.measureId}
    //           </span>
    //         )}
    //       </div>
    //       <div className="flex justify-between">
    //         <button
    //           type="submit"
    //           disabled={
    //             !formik.isValid ||
    //             formik.isSubmitting ||
    //             formik.values.measureId === null
    //           }
    //           className={`bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg transition-colors ${
    //             !formik.isValid || formik.values.measureId === null
    //               ? "opacity-50 cursor-not-allowed"
    //               : "hover:text-gray-100"
    //           }`}
    //         >
    //           Cotizar
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center p-3 bg-gradient-to-b from-p100 to-p500">
      <div className="bg-p100 p-4 rounded-xl w-full max-w-4xl shadow-2xl">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          COTIZÁ TU ENVÍO
        </h1>
        <form className="mb-8 space-y-4" onSubmit={formik.handleSubmit}>
          <div className="relative mb-4">
            <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
              ELIJA ORIGEN
            </h2>
            <select
              name="city_transmiter"
              value={formik.values.city_transmiter}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            >
              <option value="">Seleccionar</option>
              <option value="buenos aires">Buenos Aires</option>
              <option value="cordoba">Córdoba</option>
              <option value="corrientes">Corrientes</option>
              <option value="entre rios">Entre Ríos</option>
              <option value="santa fe">Santa Fe</option>
            </select>
            {formik.errors.city_transmiter &&
              formik.touched.city_transmiter && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.city_transmiter}
                </span>
              )}
          </div>
          <div className="relative mb-4">
            <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
              ELIJA DESTINO
            </h2>
            <select
              name="city_receiver"
              value={formik.values.city_receiver}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            >
              <option value="">Seleccionar</option>
              <option value="buenos aires">Buenos Aires</option>
              <option value="cordoba">Córdoba</option>
              <option value="corrientes">Corrientes</option>
              <option value="entre rios">Entre Ríos</option>
              <option value="santa fe">Santa Fe</option>
            </select>
            {formik.errors.city_receiver && formik.touched.city_receiver && (
              <span className="text-red-600 font-semibold">
                {formik.errors.city_receiver}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <h2 className="text-sm text-left uppercase font-bold tracking-[5px] text-white mb-2">
              TAMAÑO
            </h2>
            <select
              name="measureId"
              value={formik.values.measureId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            >
              <option value="">Seleccionar</option>
              <option value="1">Pequeño</option>
              <option value="2">Mediano</option>
              <option value="3">Grande</option>
            </select>
            {formik.errors.measureId && formik.touched.measureId && (
              <span className="text-red-600 font-semibold">
                {formik.errors.measureId}
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={
                !formik.isValid ||
                formik.isSubmitting ||
                formik.values.measureId === null
              }
              className={`bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg transition-colors ${
                !formik.isValid || formik.values.measureId === null
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-gray-100"
              }`}
            >
              Cotizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipmentPrice;
