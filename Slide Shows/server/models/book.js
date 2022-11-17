import mongoose from "mongoose";

export const con = mongoose.model("libros",{
    isbn: {type: String},
    title: {type: String},
    author: {type: String},
    publish_date: {type: String},
    publisher: {type: String},
    numOfPages: {type: Number}
});