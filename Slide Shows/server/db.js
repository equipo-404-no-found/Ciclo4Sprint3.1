import mongoose from "mongoose";
const url = "mongodb://localhost:27017/libreria"

export async function dbConection(){
    try {
    const x = await mongoose.connect(url);
        console.log("usted esta conectado: " +x.connection.name)

} catch (error) {
    console.log(error)
}

}




