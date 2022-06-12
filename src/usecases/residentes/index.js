const Residente = require("../../models/residente").model;
const encrypt = require("../../lib/encrypt");

const get = async () => {
    //devuelve todos los residente
    return await Residente.find().exec();

}

const getById = async (id) => {
    const residente =  await Residente.findById(id).exec();
  
    return residente;
    //devuelve un residente
}

const getByEmail = async (email) => {
    return await Residente.findOne({ email }).exec();
  };

  const authenticate = async (residente, password) => {
    console.log("password", password)
    console.log("residente.password", residente.password)
    hash = residente.password;
    return await encrypt.verifyPassword(password, hash);
  };
  

const create = async (ResidenteData) => {

    const { nombre,email,casa,telefono } = ResidenteData;

    const values = email.split('@');
    const password = values[0];
    console.log("password", password);
    const user = casa;
    const fecha =  new Date();

    const hash = await encrypt.hashPassword(password);
    const newResidente = new Residente({
        nombre,email,casa,telefono,password:hash,user,fecha});

    const savedResidente = await newResidente.save();
    // Logica para guardar en la base de datos
    return savedResidente;
}

const update = async (id, ResidenteData) => {
    // actualizar residente
    const { 
        nombre,email,casa,telefono,password,user,fecha,permisos } = ResidenteData;

    const hash = await encrypt.hashPassword(password);
    const updatedResidente = await Residente.findByIdAndUpdate(
        id,
        {
            nombre,email,casa,telefono,password:hash,user,fecha,permisos
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
    getByEmail,
    authenticate
};
