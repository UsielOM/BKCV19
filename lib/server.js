const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
var corsOptions = {
    origin: ["http://localhost:4200"]
}
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Servidor listo y escuchando en localhost:${PORT}`);

})