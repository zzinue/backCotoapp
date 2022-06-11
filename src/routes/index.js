//const usersRouter = require("./users");
const authRouter = require("./auth");
const gastos_configuracionRouter = require("./gastos_configuracion");
const gastosRouter = require("./gastos");
const pagos_configuracionRouter = require("./pagos_configuracion");
const pagosRouter = require("./pagos");
const residentesRouter = require("./residentes");
const queryPagoRouter = require("./queryPagos");
const queryPagoMensualRouter = require("./queryPagosMensuales");
const queryPagoAnualRouter = require("./queryPagosAnual");
const queryGastoRouter = require("./queryGastos");
const queryGastoMensualRouter = require("./queryGastosMensuales");
const queryGastoAnualRouter = require("./queryGastosAnual");



const apiRouter = (app) => {
  app.use("/auth", authRouter);
  app.use("/gastos_configuracion", gastos_configuracionRouter);
  app.use("/gastos", gastosRouter);
  app.use("/pagos_configuracion", pagos_configuracionRouter);
  app.use("/pagos", pagosRouter);
  app.use("/residentes", residentesRouter);
  app.use("/queryPagos", queryPagoRouter);
  app.use("/queryPagosMensuales", queryPagoMensualRouter);
  app.use("/queryPagosAnual", queryPagoAnualRouter);
  app.use("/queryGastos", queryGastoRouter);
  app.use("/queryGastosMensuales", queryGastoMensualRouter);
  app.use("/queryGastosAnual", queryGastoAnualRouter);
};

module.exports = apiRouter;
