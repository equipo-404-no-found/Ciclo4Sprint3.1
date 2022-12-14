import dotenv from "dotenv";

dotenv.config({path: './.env'});

export const port = process.env.PORT || 3000

export const uri = process.env.URI || 'mongodb://localhost:27017/test'
