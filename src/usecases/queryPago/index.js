const Pago = require("../../models/pago").model;



const getById = async (residente) => {
    const pago = await Pago.findOne({residente}).exec();
    
    return pago;
    //devuelve un pago
}



const getByIdandMonth = async (residente,month) => {
    const pagos = await Pago.find({residente}).exec();
    pagos_residente =[];
    console.log(pagos.length)
    pagos.map((pago)=>{

        if(pago.fecha_pago.getMonth() == month)
        pagos_residente.push(pago);
  
    })
    return pagos_residente;
 
    //devuelve un pago
}

const getByIdandYear = async (residente,year) => {
    const pagos = await Pago.find({residente}).exec();
    pagos_residente =[];
    console.log(pagos.length)
    pagos.map((pago)=>{
        console.log(pago.fecha_pago.getFullYear())
        if(pago.fecha_pago.getFullYear() == year)
        pagos_residente.push(pago);
  
    })
    return pagos_residente;
 
    //devuelve un pago
}


module.exports = {
   
    getById,
    getByIdandMonth,
    getByIdandYear
   
};
