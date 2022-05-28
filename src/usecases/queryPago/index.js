const Pago = require("../../models/pago").model;



const getById = async (residente) => {
    const pago = await Pago.findOne({residente}).exec();
    
    return pago;
    //devuelve un pago
}



module.exports = {
   
    getById,
   
};
