const Admin = require("../../models/admin").model;

const get = async () => {
    //devuelve todos los admin
    return await Admin.find().populate("admin").exec();

}

const getById = async (id) => {
    const admin =  await Admin.findById(id).populate("admin").exec();
    return admin;
    //devuelve un admin
}

const create = async (AdminData) => {

    const { user,password } = AdminData;


    const newAdmin = new Admin({
       user,password
    });

    const savedAdmin = await newAdmin.save();
    // Logica para guardar en la base de datos
    return savedAdmin;
}

const update = async (id, AdminData) => {
    // actualizar admin
    const { 
        user,password } = AdminData;

    const updatedAdmin = await Admin.findByIdAndUpdate(
        id,
        {
           user,
           password
        },
        { new: true }
    ).exec();

    return updatedAdmin;
}

const patch = async (id, AdminData) => {
    return await Admin.findByIdAndUpdate(
        id,
        { ...AdminData },
        { new: true }
    ).exec();
};

const del = async (id) => {
     

    return await Admin.findByIdAndDelete(id).exec();
};

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};
