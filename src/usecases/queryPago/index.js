const Pago = require("../../models/pago").model;



const getById = async (residente) => {
    const pago = await Pago.findOne({residente}).exec();
    
    return pago;
    //devuelve un pago
}

const getByMonth = async (month) => {
    const pagos =  await Pago.find().exec();
    
    pagos_residentes =[];
  
    pagos.map((pago)=>{

        if(pago.fecha_pago.getMonth() == month)
        pagos_residentes.push(pago);
  
    })
    return pagos_residentes;
  
}

const getByYear = async (year) => {
    const pagos =  await Pago.find().exec();
    
    pagos_residentes =[];
  
    pagos.map((pago)=>{
        
        if(pago.fecha_pago.getFullYear() == year)
        pagos_residente.push(pago);
  
    })
    return pagos_residentes;
  
}





const getByIdandMonth = async (residente,month) => {
    const pagos = await Pago.find({residente}).exec();
    pagos_residente =[];
  
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
   
    pagos.map((pago)=>{
        
        if(pago.fecha_pago.getFullYear() == year)
        pagos_residente.push(pago);
  
    })
    return pagos_residente;
 
    //devuelve un pago
}


module.exports = {
   
    getById,
    getByIdandMonth,
    getByIdandYear,
    getByMonth,
    getByYear
   
};
