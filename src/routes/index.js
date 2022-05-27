//const usersRouter = require("./users");
const authRouter = require("./auth");
const adminRouter = require("./admin");
const gastos_configuracionRouter = require("./gastos_configuracion");
const gastosRouter = require("./gastos");
const pagos_configuracionRouter = require("./pagos_configuracion");
const pagosRouter = require("./pagos");
const residentesRouter = require("./residentes");

const apiRouter = (app) => {
 // app.use("/users", usersRouter);
  app.use("/auth", authRouter);
  app.use("/admin", adminRouter);
  app.use("/gastos_configuracion", gastos_configuracionRouter);
  app.use("/gastos", gastosRouter);
  app.use("/pagos_configuracion", pagos_configuracionRouter);
  app.use("/pagos", pagosRouter);
  app.use("/residentes", residentesRouter);
};

module.exports = apiRouter;
