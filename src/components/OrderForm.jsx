import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUserLogged = useSelector((state) => state.infoUserLogged);

  const validationSchema = Yup.object().shape({
    name_claimant: Yup.string()
      .required("Nombre es requerido")
      .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios"),
    cedula_claimant: Yup.string()
      .matches(/^[0-9]+$/, "Debe ser solo números")
      .max(8, "Debe tener 8 dígitos")
      .required("DNI es requerido"),
    cellphone_claimant: Yup.string()
      // .matches(/^\d{10}$/, "Debe tener 10 dígitos")
      .min(9, "Debe tener 10 dígitos")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    name_transmiter: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios")
      .required("Nombre es requerido"),
    surname_transmiter: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios")
      .required("Apellido es requerido"),
    celphone_transmiter: Yup.string()
      .min(9, "Debe tener 10 dígitos")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    city_transmiter: Yup.string().required("Ciudad es requerida"),
    address_transmiter: Yup.string().required("Dirección es requerida"),
    name_receiver: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios")
      .required("Nombre es requerido"),
    celphone_receiver: Yup.string()
      .min(9, "Debe tener 10 dígitos")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    city_receiver: Yup.string().required("Ciudad es requerida"),
    address_receiver: Yup.string().required("Dirección es requerida"),
    weight: Yup.number()
      .typeError("Debe ser un número")
      .required("Peso es requerido")
      .min(1, "El peso debe ser mayor a 1")
      .max(30, "El peso no puede ser mayor a 30"),
    typeShipmentId: Yup.string().required("Tamaño es requerido"),
    declared_value: Yup.string().required("Valor declarado es requerido"),
    measureId: Yup.string().required("Tamaño es requerido"),
    product_image: Yup.mixed()
      .required("Imagen es requerida")
      .test(
        "FILE_SIZE",
        "El archivo es muy grande!",
        (value) => value && value.size < 1024 * 1024
      )
      .test(
        "FILE_TYPE",
        "Formato inválido!",
        (value) =>
          value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      ),
    pay_method: Yup.string().required("Método de pago es requerido"),
  });

  const { errors } = useFormik;

  const formik = useFormik({
    initialValues: {
      name_claimant: "",
      cedula_claimant: "",
      cellphone_claimant: "",
      name_transmiter: "",
      surname_transmiter: "",
      celphone_transmiter: "",
      city_transmiter: "",
      address_transmiter: "",
      name_receiver: "",
      celphone_receiver: "",
      city_receiver: "",
      address_receiver: "",
      weight: "",
      typeShipmentId: null,
      measureId: null,
      declared_value: "",
      product_image: null,
      pay_method: "",
      user_id: null,
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: async ({
      name_claimant,
      cedula_claimant,
      cellphone_claimant,
      name_transmiter,
      surname_transmiter,
      celphone_transmiter,
      city_transmiter,
      address_transmiter,
      name_receiver,
      celphone_receiver,
      city_receiver,
      address_receiver,
      weight,
      declared_value,
      product_image,
      pay_method,
      typeShipmentId,
      measureId,
    }) => {
      const formData = new FormData();
      try {
        formData.append("file", product_image);
        formData.append("upload_preset", import.meta.env.VITE_PRESET);
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/image/upload`,
          formData
        );
        const { url } = res.data;

        const distance = DISTANCES[city_transmiter][city_receiver];
        const cost = calculateCost(calculateWeightByInput(measureId), distance);

        const orderData = {
          name_claimant,
          cedula_claimant,
          cellphone_claimant,
          name_transmiter,
          surname_transmiter,
          celphone_transmiter,
          city_transmiter,
          address_transmiter,
          name_receiver,
          celphone_receiver,
          city_receiver,
          address_receiver,
          weight,
          declared_value,
          product_image: url,
          pay_method,
          typeShipmentId: Number(typeShipmentId),
          measureId: Number(measureId),
          user_id: infoUserLogged.id,
          cost,
          email: infoUserLogged.email,
        };

        dispatch(
          createOrder({
            name_claimant,
            cedula_claimant,
            cellphone_claimant,
            name_transmiter,
            surname_transmiter,
            celphone_transmiter,
            city_transmiter,
            address_transmiter,
            name_receiver,
            celphone_receiver,
            city_receiver,
            address_receiver,
            weight,
            declared_value,
            product_image: url,
            pay_method,
            typeShipmentId: Number(typeShipmentId),
            measureId: Number(measureId),
            user_id: infoUserLogged.id,
          })
        );
        navigate("/header/payment", { state: { orderData } });
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const handleFieldChange = (e) => {
    formik.handleChange(e);
    formik.validateField(e.target.name);
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          !formik.errors.name_claimant &&
          !formik.errors.cedula_claimant &&
          !formik.errors.cellphone_claimant &&
          formik.values.name_claimant &&
          formik.values.cedula_claimant &&
          formik.values.cellphone_claimant
        );
      case 2:
        return (
          !formik.errors.name_transmiter &&
          !formik.errors.surname_transmiter &&
          !formik.errors.celphone_transmiter &&
          !formik.errors.city_transmiter &&
          !formik.errors.address_transmiter &&
          formik.values.name_transmiter &&
          formik.values.surname_transmiter &&
          formik.values.celphone_transmiter &&
          formik.values.city_transmiter &&
          formik.values.address_transmiter
        );
      case 3:
        return (
          !formik.errors.name_receiver &&
          !formik.errors.celphone_receiver &&
          !formik.errors.city_receiver &&
          !formik.errors.address_receiver &&
          formik.values.name_receiver &&
          formik.values.celphone_receiver &&
          formik.values.city_receiver &&
          formik.values.address_receiver
        );
      case 4:
        return (
          !formik.errors.weight &&
          !formik.errors.declared_value &&
          !formik.errors.product_image &&
          !formik.errors.pay_method &&
          formik.values.weight &&
          formik.values.declared_value &&
          formik.values.product_image &&
          formik.values.pay_method &&
          formik.values.typeShipmentId &&
          formik.values.measureId
        );
      default:
        return false;
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Datos del usuario
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="relative mb-2">
                <input
                  type="text"
                  name="name_claimant"
                  value={formik.values.name_claimant}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Nombre/s"
                />
                {formik.errors.name_claimant && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.name_claimant}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="cedula_claimant"
                  value={formik.values.cedula_claimant}
                  onChange={handleFieldChange}
                  onKeyPress={handleKeyPress}
                  maxLength="8"
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="DNI"
                />
                {formik.errors.cedula_claimant && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.cedula_claimant}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="cellphone_claimant"
                  value={formik.values.cellphone_claimant}
                  onChange={handleFieldChange}
                  onKeyPress={handleKeyPress}
                  maxLength="10"
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Telefono"
                />
                {formik.errors.cellphone_claimant && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.cellphone_claimant}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Datos del remitente
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name_transmiter"
                  value={formik.values.name_transmiter}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Nombre/s"
                />
                {formik.errors.name_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.name_transmiter}
                  </span>
                )}
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  name="surname_transmiter"
                  value={formik.values.surname_transmiter}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Apellido/s"
                />
                {formik.errors.name_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.name_transmiter}
                  </span>
                )}
              </div>
              <div className="relative mt-7 mb-7">
                <input
                  type="text"
                  name="celphone_transmiter"
                  value={formik.values.celphone_transmiter}
                  onChange={handleFieldChange}
                  onKeyPress={handleKeyPress}
                  maxLength="10"
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Telefono"
                />
                {formik.errors.celphone_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.celphone_transmiter}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Provincia de origen
                </h2>
                <select
                  name="city_transmiter"
                  value={formik.values.city_transmiter}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="buenos aires">Buenos Aires</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="corrientes">Corrientes</option>
                  <option value="entre rios">Entre Ríos</option>
                  <option value="santa fe">Santa Fe</option>
                </select>
                {formik.errors.city_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.city_transmiter}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="address_transmiter"
                  value={formik.values.address_transmiter}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Direccion"
                />
                {formik.errors.address_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.address_transmiter}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Datos del destinatario
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name_receiver"
                  value={formik.values.name_receiver}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Nombre/s"
                />
                {formik.errors.name_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.name_receiver}
                  </span>
                )}
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  name="celphone_receiver"
                  value={formik.values.celphone_receiver}
                  onChange={handleFieldChange}
                  onKeyPress={handleKeyPress}
                  maxLength="10"
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Telefono"
                />
                {formik.errors.celphone_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.celphone_receiver}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Provincia de destino
                </h2>
                <select
                  name="city_receiver"
                  value={formik.values.city_receiver}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="buenos aires">Buenos Aires</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="corrientes">Corrientes</option>
                  <option value="entre rios">Entre Ríos</option>
                  <option value="santa fe">Santa Fe</option>
                </select>
                {formik.errors.city_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.city_receiver}
                  </span>
                )}
              </div>
              <div className="relative mt-7 mb-4">
                <input
                  type="text"
                  name="address_receiver"
                  value={formik.values.address_receiver}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Direccion"
                />
                {formik.errors.address_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.address_receiver}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl ml-2 font-semibold text-white mt-7">
              Datos del pedido
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative mt-7 mb-1">
                <input
                  type="number"
                  name="weight"
                  value={formik.values.weight}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Peso del pedido"
                />
                {formik.errors.weight && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.weight}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Tipo de envío
                </h2>
                <select
                  name="typeShipmentId"
                  value={formik.values.typeShipmentId}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="1">Sucursal a Puerta</option>
                  <option value="2">Sucursal a Sucursal</option>
                  <option value="3">Puerta a Sucursal</option>
                  <option value="4">Puerta a Puerta</option>
                </select>
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Tamaño del paquete
                </h2>
                <select
                  name="measureId"
                  value={formik.values.measureId}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="1">Pequeño</option>
                  <option value="2">Mediano</option>
                  <option value="3">Grande</option>
                </select>
              </div>
              <div className="relative mt-7 mb-4">
                <input
                  type="number"
                  name="declared_value"
                  value={formik.values.declared_value}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Valor declarado (ARS)"
                />
                {formik.errors.declared_value && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.declared_value}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Imagen del paquete
                </h2>
                <input
                  type="file"
                  name="product_image"
                  onChange={(e) =>
                    formik.setFieldValue("product_image", e.target.files[0])
                  }
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                  placeholder="Imagen del pedido"
                />
                {formik.errors.product_image && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.product_image}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <h2 className="text-sm text-left ml-2 uppercase font-bold tracking-[5px] text-white mb-2">
                  Método de pago
                </h2>
                <select
                  name="pay_method"
                  value={formik.values.pay_method}
                  onChange={handleFieldChange}
                  className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Credito">Tarjeta de crédito</option>
                  <option value="Debito">Tarjeta de débito</option>
                </select>
                {formik.errors.pay_method && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.pay_method}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-p100 to-p500 flex items-center justify-center p-4">
      <div className="bg-p100 p-4 rounded-xl w-auto lg:w-[1050px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          INICIA TU PEDIDO
        </h1>
        <form className="mb-8 space-y-4" onSubmit={formik.handleSubmit}>
          {renderStep()}
          <div className="flex justify-between">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-s300 text-white uppercase font-bold text-sm py-3 px-4 rounded-lg hover:bg-s500 transition-colors"
                >
                  Anterior
                </button>
              )}
            </div>
            <div>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className={`${
                    validateStep(step)
                      ? "bg-s300 hover:bg-s500"
                      : "bg-gray-500 cursor-not-allowed"
                  } text-white uppercase font-bold text-sm py-3 px-4 rounded-lg transition-colors`}
                  disabled={!validateStep(step)}
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="submit"
                  className={`${
                    validateStep(step)
                      ? "bg-s300 px-96 hover:bg-s500 w-full"
                      : "bg-gray-500 mx-4 w-full px-96 cursor-not-allowed"
                  } text-white uppercase font-bold text-sm py-3 px-4 rounded-lg transition-colors`}
                  disabled={!validateStep(step)}
                >
                  Pagar
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
