const Gasto = require("../../models/gasto").model;



const get = async () => {
    const gasto = await Gasto.find().exec();
    
    return gasto;
    //devuelve un gasto
}



const getByMonth = async (month) => {
    const gastos = await Gasto.find().exec();
    gastos_new =[];
   
    gastos.map((gasto)=>{

        if(gasto.fecha_gasto.getMonth() == month)
        gastos_new.push(gasto);
  
    })
    return gastos_new;
 
    //devuelve un gasto
}

const getByYear = async (year) => {
    const gastos = await Gasto.find().exec();
    gastos_new =[];
   
    gastos.map((gasto)=>{
       
        if(gasto.fecha_gasto.getFullYear() == year)
        gastos_new.push(gasto);
  
    })
    return gastos_new;
 
    //devuelve un gasto
}


module.exports = {
   
    get,
    getByMonth,
    getByYear
   
};
