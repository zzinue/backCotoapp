const express = require('express');
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`Connected in port ${port}`)
})