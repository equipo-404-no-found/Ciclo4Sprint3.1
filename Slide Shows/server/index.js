import express from "express";
import { dbConection} from "./db.js";
import { port } from "./config.js";
import router from "./routes/book_routes.js"
const app = express();
app.use(express.json());
dbConection();
app.use(router);

app.listen (port,()=>{
console.log("se esta corriendo en el puerto: "+port);    
});


