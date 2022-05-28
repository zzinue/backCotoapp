const Gasto = require("../../models/gasto").model;

const get = async () => {
  //devuelve todos los gasto
  return await Gasto.find().exec();
};

const getById = async (id) => {
  const gasto = await Gasto.findById(id).exec();
  return gasto;
  //devuelve un gasto
};

const create = async (GastoData) => {
  const {
    concepto,
    monto,
    fecha_gasto,
    comprobante,
    descripcion,
    imagen_mejora,
  } = GastoData;

  const newGasto = new Gasto({
    concepto,
    monto,
    fecha_gasto,
    comprobante,
    descripcion,
    imagen_mejora,
  });

  const savedGasto = await newGasto.save();
  // Logica para guardar en la base de datos
  return savedGasto;
};

const update = async (id, GastoData) => {
  // actualizar gasto
  const {
    concepto,
    monto,
    fecha_gasto,
    comprobante,
    descripcion,
    imagen_mejora,
  } = GastoData;

  const updatedGasto = await Gasto.findByIdAndUpdate(
    id,
    {
      concepto,
      monto,
      fecha_gasto,
      comprobante,
      descripcion,
      imagen_mejora,
    },
    { new: true }
  ).exec();

  return updatedGasto;
};

const patch = async (id, GastoData) => {
  return await Gasto.findByIdAndUpdate(
    id,
    { ...GastoData },
    { new: true }
  ).exec();
};

const del = async (id) => {
  return await Gasto.findByIdAndDelete(id).exec();
};

module.exports = {
  get,
  getById,
  create,
  update,
  del,
  patch,
};
