const Pago = require("../../models/pago").model;

const get = async() => {
    //devuelve todos los pago
    return await Pago.find().exec();

}

const getById = async(id) => {
    const pago = await Pago.findById(id).exec();
    return pago;
    //devuelve un pago
}

const create = async(PagoData) => {

    const { monto, fecha_pago, comprobante, aprobado, casa, pago_id } = PagoData;
   


    const newPago = new Pago({
        monto,
        fecha_pago,
        comprobante,
        aprobado,
        casa,
        pago_id
    });

    const savedPago = await newPago.save();
    // Logica para guardar en la base de datos
    return savedPago;
}

const update = async(id, PagoData) => {
    // actualizar pago
    const {
        monto,
        fecha_pago,
        comprobante,
        aprobado,
        casa,
        pago_id
    } = PagoData;

    const updatedPago = await Pago.findByIdAndUpdate(
        id, {
            monto,
            fecha_pago,
            comprobante,
            aprobado,
            casa
        }, { new: true }
    ).exec();

    return updatedPago;
}

const patch = async(id, PagoData) => {
    return await Pago.findByIdAndUpdate(
        id, {...PagoData }, { new: true }
    ).exec();
};

const del = async(id) => {

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