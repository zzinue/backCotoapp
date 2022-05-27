const Residente = require("../../models/residente").model;

const get = async () => {
    //devuelve todos los residente
    return await Residente.find().populate("residente").exec();

}

const getById = async (id) => {
    const residente =  await Residente.findById(id).populate("residente").exec();
    return residente;
    //devuelve un residente
}

const create = async (ResidenteData) => {

    const { nombre,email,casa,telefono,password,user,fecha,permisos } = ResidenteData;


    const newResidente = new Residente({
        nombre,email,casa,telefono,password,user,fecha,permisos
    });

    const savedResidente = await newResidente.save();
    // Logica para guardar en la base de datos
    return savedResidente;
}

const update = async (id, ResidenteData) => {
    // actualizar residente
    const { 
        nombre,email,casa,telefono,password,user,fecha,permisos } = ResidenteData;

    const updatedResidente = await Residente.findByIdAndUpdate(
        id,
        {
            nombre,email,casa,telefono,password,user,fecha,permisos
        },
        { new: true }
    ).exec();

    return updatedResidente;
}

const patch = async (id, ResidenteData) => {
    return await Residente.findByIdAndUpdate(
        id,
        { ...ResidenteData },
        { new: true }
    ).exec();
};

const del = async (id) => {
   
    

    return await Residente.findByIdAndDelete(id).exec();
};

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};
