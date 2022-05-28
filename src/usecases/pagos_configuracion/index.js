const Pagos_configuracion = require("../../models/pagos_configuracion").model;

const get = async() => {
    //devuelve todos los pagos_configuracion
    return await Pagos_configuracion.find().exec();

}

const getById = async(id) => {
    const pagos_configuracion = await Pagos_configuracion.findById(id).exec();
    return pagos_configuracion;
    //devuelve un pagos_configuracion
}

const create = async(Pagos_configuracionData) => {

    const { concepto, descripcion, monto, periodicidad, tieneFechaLimite, fechaLimite, fecha_registro, permisos } = Pagos_configuracionData;


    const newPagos_configuracion = new Pagos_configuracion({
        concepto,
        descripcion,
        monto,
        periodicidad,
        tieneFechaLimite,
        fechaLimite,
        fecha_registro,
        permisos
    });

    const savedPagos_configuracion = await newPagos_configuracion.save();
    // Logica para guardar en la base de datos
    return savedPagos_configuracion;
}

const update = async(id, Pagos_configuracionData) => {
    // actualizar pagos_configuracion
    const {
        concepto,
        descripcion,
        monto,
        periodicidad,
        tieneFechaLimite,
        fechaLimite,
        fecha_registro,
        permisos
    } = Pagos_configuracionData;

    const updatedPagos_configuracion = await Pagos_configuracion.findByIdAndUpdate(
        id, {
            concepto,
            descripcion,
            monto,
            periodicidad,
            tieneFechaLimite,
            fechaLimite,
            fecha_registro,
            permisos
        }, { new: true }
    ).exec();

    return updatedPagos_configuracion;
}

const patch = async(id, Pagos_configuracionData) => {
    return await Pagos_configuracion.findByIdAndUpdate(
        id, {...Pagos_configuracionData }, { new: true }
    ).exec();
};

const del = async(id) => {


    return await Pagos_configuracion.findByIdAndDelete(id).exec();
};

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};