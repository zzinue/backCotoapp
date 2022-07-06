const Administrador = require('../../models/administradores').model;
const encrypt = require('../../lib/encrypt');

const get = async () => {
    return await Administrador.find().exec();
}
const getById = async (id) => {
    return await Administrador.findById(id).exec();
}
const getByName = async (nombre) => {
    return await Administrador.find({ nombre }).exec();
}
const getByEmail = async (email) => {
    return await Administrador.findOne({ email }).exec();
}

const authenticate = async (administrador, password) => {
    hash = administrador.password;
    return await encrypt.verifyPassword(password, hash);
}

const create = async (AdministradorData) => {
    const { nombre, email, casa, telefono, nombreCoto } = AdministradorData;
    const newAdministrador = new Administrador({
        nombre, email, casa, telefono, nombreCoto
    });
    const savedAdministrador = await newAdministrador.save();
    return savedAdministrador;
}
const update = async (id, AdministradorData) => {
    const { nombre, email, casa, telefono, nombreCoto } = AdministradorData;
    const hash = await encrypt.hashPassword(password);
    const updatedAdministrador = await Administrador.findByIdAndUpdate(id, {
        nombre, email, casa, telefono, nombreCoto
    });
    return updatedAdministrador;
}
const del = async (id) => {
    return await Administrador.findByIdAndDelete(id).exec();
}

module.exports = {
    get,
    getById,
    getByName,
    getByEmail,
    authenticate,
    create,
    update,
    del
}