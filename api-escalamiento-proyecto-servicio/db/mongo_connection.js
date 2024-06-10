import mongoose from "mongoose";
import {MONGO_URI} from "../config.js"

export const getConexion = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("conectado a base de datos")    
    } catch (error) {
        console.log(error)   
    }
}