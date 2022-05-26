const express = require('express');
const apiRouter = require("./src/routes");
const cors = require("cors");
const { errorHandler, logErrors } = require("./src/middlewares/errorHandlers");
const db = require("./src/lib/db");
const config = require("./src/lib/config")
const app = express();
const port = config.app.port;

app.use(cors({}));

app.use(express.json());

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

db.connect()
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log("Connection refused:", error)
    })