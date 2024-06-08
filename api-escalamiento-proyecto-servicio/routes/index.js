import { Router } from "express";

import proyectoRouter from "./proyecto.routes.js";

const router = Router();
router.use("/proyecto", proyectoRouter);
export default router;