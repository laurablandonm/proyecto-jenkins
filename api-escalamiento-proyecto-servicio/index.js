import express from "express";
import cors from "cors";
import {getConexion} from "./db/mongo_connection.js"
import { URL_BASE, PORT } from "./config.js";
import router from "./routes/index.js";
import Cliente from "./modelos/Cliente.js";
import Etapa from "./modelos/Etapa.js";
import TipoDeProyecto from "./modelos/TipoDeProyecto.js";
import Universidad from "./modelos/Universidad.js"



const app = express();
app.use(express.json());
app.use(cors());
getConexion();
app.use("/", router);
app.listen(PORT, () => console.log(`${URL_BASE}:${PORT}`))