import { Router } from "express";
import  {obtenerLibro,todosLibros}  from "../controllers/control.libros.js";
const router = Router();

router.get("/",(req,res)=>res.send("welcome"));
router.get("/books",todosLibros);
router.get("/:isbn",obtenerLibro);
export default router;