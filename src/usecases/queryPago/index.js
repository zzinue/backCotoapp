const Pago = require("../../models/pago").model;



const getById = async (residente) => {
    const pago = await Pago.findOne({residente}).exec();
    
    return pago;
    //devuelve un pago
}



const getByIdandMonth = async (residente,month) => {
    const pagos = await Pago.findOne({residente}).exec();
    
    console.log(pagos.fecha_pago.getMonth())
    if(pagos.fecha_pago.getMonth() == month)
        return pagos;
    else
        return null;
    //devuelve un pago
}


module.exports = {
   
    getById,
    getByIdandMonth
   
};
