import Proyecto from "../modelos/Proyecto.js";

export const crearProyecto = async (requestProyecto) => {
    console.log("se esta creando un proyecto...");
    const proyecto = new Proyecto();
    proyecto.numero = requestProyecto.numero;
    proyecto.titulo = requestProyecto.titulo;
    proyecto.fechaIniciacion = requestProyecto.fechaIniciacion;
    proyecto.fechaEntrega = requestProyecto.fechaEntrega;
    proyecto.cliente = requestProyecto.cliente.id;
    proyecto.universidad = requestProyecto.universidad.id;
    proyecto.tipoDeProyecto = requestProyecto.tipoDeProyecto.id;
    proyecto.etapa = requestProyecto.etapa.id;
    proyecto.fechaCreacion = new Date();
    proyecto.fechaActualizacion = new Date();
    return await proyecto.save();
}

export const listarProyecto = async () => {
    console.log("se esta pidiendo la lista...");
    const listaProyecto = await Proyecto.find().populate([
        {
            path:"cliente",
            select: "_id nombre email"
        },
        {
            path:"universidad",
            select: "_id nombre direccion telefono"
        },
        {
            path:"tipoDeProyecto",
            select: "_id nombre"
        },
        {
            path:"etapa",
            select: "_id nombre"
        }
    ]);
    return listaProyecto;
}

export const editarProyecto = async({numero,titulo,fechaIniciacion,fechaEntrega,cliente,tipoDeProyecto,universidad,etapa}, idProyecto) => {
    console.log("se esta editando un resgistro...");
    const proyectoRequest = {
        numero,
        titulo,
        fechaIniciacion,
        fechaEntrega,
        cliente: cliente.id,
        tipoDeProyecto: tipoDeProyecto.id,
        universidad: universidad.id,
        etapa: etapa.id
    }
    const proyecto = await Proyecto.findByIdAndUpdate(idProyecto, proyectoRequest, {new:true});
    
    return proyecto;
}


