const Gastos_configuracion = require("../../models/gastos_configuracion").model;

const get = async() => {
    //devuelve todos los gastos_configuracion
    return await Gastos_configuracion.find().exec();

}

const getById = async(id) => {
    const gastos_configuracion = await Gastos_configuracion.findById(id).exec();
    return gastos_configuracion;
    //devuelve un gastos_configuracion
}

const create = async(Gastos_configuracionData) => {

    const { concepto, monto, descripcion, imagen, seRepite, periodicidad } = Gastos_configuracionData;


    const newGastos_configuracion = new Gastos_configuracion({
        concepto,
        monto,
        descripcion,
        imagen,
        seRepite,
        periodicidad
    });

    const savedGastos_configuracion = await newGastos_configuracion.save();
    // Logica para guardar en la base de datos
    return savedGastos_configuracion;
}

const update = async(id, Gastos_configuracionData) => {
    // actualizar gastos_configuracion
    const {
        concepto,
        monto,
        descripcion,
        imagen,
        seRepite,
        periodicidad
    } = Gastos_configuracionData;

    const updatedGastos_configuracion = await Gastos_configuracion.findByIdAndUpdate(
        id, {
            concepto,
            monto,
            descripcion,
            imagen,
            seRepite,
            periodicidad
        }, { new: true }
    ).exec();

    return updatedGastos_configuracion;
}

const patch = async(id, Gastos_configuracionData) => {
    return await Gastos_configuracion.findByIdAndUpdate(
        id, {...Gastos_configuracionData }, { new: true }
    ).exec();
};

const del = async(id) => {

    return await Gastos_configuracion.findByIdAndDelete(id).exec();
};

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};