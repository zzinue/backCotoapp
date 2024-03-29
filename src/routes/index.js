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
const queryPagoMensualAdminRouter = require("./queryPagosMensualesAdmin");
const queryPagoAnualAdminRouter = require("./queryPagosAnualAdmin");
const queryGastoRouter = require("./queryGastos");
const queryGastoMensualRouter = require("./queryGastosMensuales");
const queryGastoAnualRouter = require("./queryGastosAnual");
const administradoresRouter = require("./administradores");
const s3Router = require("./s3");



const apiRouter = (app) => {
  app.use("/auth", authRouter);
  app.use("/gastos_configuracion", gastos_configuracionRouter);
  app.use("/gastos", gastosRouter);
  app.use("/pagos_configuracion", pagos_configuracionRouter);
  app.use("/pagos", pagosRouter);
  app.use("/residentes", residentesRouter);
  app.use("/s3", s3Router );
  app.use("/queryPagos", queryPagoRouter);
  app.use("/queryPagosMensuales", queryPagoMensualRouter);
  app.use("/queryPagosAnual", queryPagoAnualRouter);
  app.use("/queryPagosAdminMensuales", queryPagoMensualAdminRouter);
  app.use("/queryPagosAdminAnual", queryPagoAnualAdminRouter);
  app.use("/queryGastos", queryGastoRouter);
  app.use("/queryGastosMensuales", queryGastoMensualRouter);
  app.use("/queryGastosAnual", queryGastoAnualRouter);
  app.use("/administradores", administradoresRouter);
};

module.exports = apiRouter;
