import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createOrder } from "../redux/actions/index";

const OrderForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name_claimant: Yup.string().required("Nombre es requerido"),
    cedula_claimant: Yup.string()
      .matches(/^[0-9]+$/, "Debe ser solo números")
      .max(8, "Debe tener 8 dígitos")
      .required("DNI es requerido"),
    cellphone_claimant: Yup.string()
      .matches(/^[0-9]+$/, "Debe ser solo números")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    name_transmiter: Yup.string().required("Nombre es requerido"),
    celphone_transmiter: Yup.string()
      .matches(/^[0-9]+$/, "Debe ser solo números")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    city_transmiter: Yup.string().required("Ciudad es requerida"),
    address_transmiter: Yup.string().required("Dirección es requerida"),
    name_receiver: Yup.string().required("Nombre es requerido"),
    celphone_receiver: Yup.string()
      .matches(/^[0-9]+$/, "Debe ser solo números")
      .max(10, "Debe tener 10 dígitos")
      .required("Teléfono es requerido"),
    city_receiver: Yup.string().required("Ciudad es requerida"),
    address_receiver: Yup.string().required("Dirección es requerida"),
    weight: Yup.string().required("Peso es requerido"),
    declared_value: Yup.string().required("Valor declarado es requerido"),
    product_image: Yup.string().required("Imagen es requerida"),
    pay_method: Yup.string().required("Método de pago es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      name_claimant: "",
      cedula_claimant: "",
      cellphone_claimant: "",
      name_transmiter: "",
      celphone_transmiter: "",
      city_transmiter: "",
      address_transmiter: "",
      name_receiver: "",
      celphone_receiver: "",
      city_receiver: "",
      address_receiver: "",
      weight: "",
      declared_value: "",
      product_image: "",
      pay_method: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createOrder(values));
    },
  });

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-p300 flex items-center justify-center p-4">
      <div className="bg-p100 p-4 rounded-xl w-auto lg:w-[1050px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          INICIA TU PEDIDO
        </h1>
        <form className="mb-8 space-y-4" onSubmit={formik.handleSubmit}>
          <h2 className="text-xl font-semibold text-white mb-2">
            Datos del usuario
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="relative mb-2">
              <input
                type="text"
                name="name_claimant"
                value={formik.values.name_claimant}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Nombre/s"
              />
              {formik.errors.name_claimant && formik.touched.name_claimant && (
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
                onChange={formik.handleChange}
                onKeyPress={handleKeyPress}
                maxLength="8"
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="DNI"
              />
              {formik.errors.cedula_claimant &&
                formik.touched.cedula_claimant && (
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
                onChange={formik.handleChange}
                onKeyPress={handleKeyPress}
                maxLength="10"
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Telefono"
              />
              {formik.errors.cellphone_claimant &&
                formik.touched.cellphone_claimant && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.cellphone_claimant}
                  </span>
                )}
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Datos del remitente
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative mb-4">
              <input
                type="text"
                name="name_transmiter"
                value={formik.values.name_transmiter}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Nombre/s"
              />
              {formik.errors.name_transmiter &&
                formik.touched.name_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.name_transmiter}
                  </span>
                )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                name="celphone_transmiter"
                value={formik.values.celphone_transmiter}
                onChange={formik.handleChange}
                onKeyPress={handleKeyPress}
                maxLength="10"
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Telefono"
              />
              {formik.errors.celphone_transmiter &&
                formik.touched.celphone_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.celphone_transmiter}
                  </span>
                )}
            </div>
            <div className="relative mb-4">
              {/* Buenos Aires Catamarca Chaco Chubut Córdoba Corrientes Entre Ríos Formosa Jujuy La Pampa La Rioja Mendoza Misiones Neuquén Río Negro Salta San Juan San Luis Santa Cruz Santa Fe Santiago del Estero Tierra del Fuego, Antártida e Islas del Atlántico Sur Tucumán */}
              <select
                name="city_transmiter"
                value={formik.values.city_transmiter}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Cordoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquén</option>
                <option value="Rio Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">
                  Tierra del Fuego, Antártida e Islas del Atlántico Sur
                </option>
                <option value="Tucuman">Tucumán</option>
              </select>

              {/* <input
                type="text"
                name="city_transmiter"
                value={formik.values.city_transmiter}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Ciudad"
              /> */}
              {formik.errors.city_transmiter &&
                formik.touched.city_transmiter && (
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
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Direccion"
              />
              {formik.errors.address_transmiter &&
                formik.touched.address_transmiter && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.address_transmiter}
                  </span>
                )}
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Datos del destinatario
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative mb-4">
              <input
                type="text"
                name="name_receiver"
                value={formik.values.name_receiver}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Nombre/s"
              />
              {formik.errors.name_receiver && formik.touched.name_receiver && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.name_receiver}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="number"
                name="celphone_receiver"
                value={formik.values.celphone_receiver}
                onChange={formik.handleChange}
                onKeyPress={handleKeyPress}
                maxLength="10"
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Telefono"
              />
              {formik.errors.celphone_receiver &&
                formik.touched.celphone_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.celphone_receiver}
                  </span>
                )}
            </div>
            <div className="relative mb-4">
              <select
                name="city_receiver"
                value={formik.values.city_receiver}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Cordoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquén</option>
                <option value="Rio Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">
                  Tierra del Fuego, Antártida e Islas del Atlántico Sur
                </option>
                <option value="Tucuman">Tucumán</option>
              </select>
              {formik.errors.city_receiver && formik.touched.city_receiver && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.city_receiver}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                name="address_receiver"
                value={formik.values.address_receiver}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Dirección"
              />
              {formik.errors.address_receiver &&
                formik.touched.address_receiver && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.address_receiver}
                  </span>
                )}
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Datos del pedido
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative mb-4">
              <input
                type="text"
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Peso del pedido"
              />
              {formik.errors.weight && formik.touched.weight && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.weight}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                name="declared_value"
                value={formik.values.declared_value}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Valor declarado"
              />
              {formik.errors.declared_value &&
                formik.touched.declared_value && (
                  <span className="text-red-600 font-semibold">
                    {formik.errors.declared_value}
                  </span>
                )}
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                name="product_image"
                value={formik.values.product_image}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Imagen del pedido"
              />
              {formik.errors.product_image && formik.touched.product_image && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.product_image}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <select
                name="pay_method"
                value={formik.values.pay_method}
                onChange={formik.handleChange}
                className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              >
                <option value="Efectivo">Efectivo</option>
                <option value="Credito">Tarjeta de crédito</option>
                <option value="Debito">Tarjeta de débito</option>
              </select>
              {formik.errors.pay_method && formik.touched.pay_method && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.pay_method}
                </span>
              )}
              {formik.errors.pay_method && formik.touched.pay_method && (
                <span className="text-red-600 font-semibold">
                  {formik.errors.pay_method}
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
