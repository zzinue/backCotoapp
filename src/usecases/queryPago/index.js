const Pago = require("../../models/pago").model;



const getById = async (residente) => {
    const pago = await Pago.findOne({residente}).exec();
    
    return pago;
    //devuelve un pago
}



const getByIdandMonth = async (residente,month) => {
    const pagos = await Pago.findOne({residente}).exec();
    

    pagos.map((pago)=>{
       
        if(pago.getMonth() == month)
        {return pago;}
        else{
            console.log(pago.getMonth())
            console.log(month);
        }

    })
    
    return pagos;
    //devuelve un pago
}


module.exports = {
   
    getById,
    getByIdandMonth
   
};
