const Pago = require("../../models/pago").model;

const get = async () => {
    //devuelve todos los pago
    return await Pago.find().populate("pago").exec();

}

const getById = async (id) => {
    const pago =  await Pago.findById(id).populate("pago").exec();
    return pago;
    //devuelve un pago
}

const create = async (PagoData) => {

    const { monto,fecha_pago,comprobante,aprobado,residente } = PagoData;


    const newPago = new Pago({
        monto,fecha_pago,comprobante,aprobado,residente
    });

    const savedPago = await newPago.save();
    // Logica para guardar en la base de datos
    return savedPago;
}

const update = async (id, PagoData) => {
    // actualizar pago
    const { 
        monto,fecha_pago,comprobante,aprobado,residente } = PagoData;

    const updatedPago = await Pago.findByIdAndUpdate(
        id,
        {
            monto,fecha_pago,comprobante,aprobado,residente
        },
        { new: true }
    ).exec();

    return updatedPago;
}

const patch = async (id, PagoData) => {
    return await Pago.findByIdAndUpdate(
        id,
        { ...PagoData },
        { new: true }
    ).exec();
};

const del = async (id) => {
 
    return await Pago.findByIdAndDelete(id).exec();
};

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};
