import  {con}  from "../models/book.js";

 function get_data(isbn){
    var query = con.find({isbn:isbn}).exec();
    return query;
 }

 export const obtenerLibro = ("/:isbn",(req,res)=>{
    let resp = get_data(req.params.isbn);
    resp.then(function(isbn){
        res.json(isbn);
    })
 });
    
    export const todosLibros = async(req,res)=>{
        try {
            const libros = await con.find();
            res.send(libros)
        } catch (error) {
            console.log(message.error)
            res.status(500).json({mensaje: error.mensaje})
        }
    }