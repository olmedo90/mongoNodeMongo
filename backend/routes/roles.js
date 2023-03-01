const express= require('express');
const routes=express.Router();
const Rol = require('../models/modelCrearRol.js');
const User = require('../models/modelUser.js');
const Asignacion = require('../models/modelAsignados.js');
// para crear rol y guardar
routes.post('/rolCrear', async(req, res)=>{
    const body=req.body;
    try {
        const rolDB = new Rol(body);
        await rolDB.save();
        res.redirect('/roles');

    } catch (error) {
        console.log(error);
    }
})
routes.get('/', async(req, res)=>{
    try {
        const arrayasignados = await Asignacion.aggregate([
            {
                $lookup:{
                    from:"clientes",
                    localField:"users_id",
                    foreignField:"_id",
                    as:"users_asignados"
                }
            },{
                $unwind:"$users_asignados"
            }
        ]);
        res.render('./roles/roles.html',{
            titulo : 'rol de users',
            asignados:arrayasignados
        })
    } catch (error) {
        console.log(error);
    }
    
  
});
// ruta para obtener usuarios y roles
routes.get('/asignar', async(req, res)=>{
    try {
        const arrayUsers = await User.find();
        //console.log(arrayUsers);
        const arrayRols = await  Rol.find();
        //console.log(arrayRols);
        res.json({
            estado: true,
            users: arrayUsers,
            rols: arrayRols
        });
    } catch (error) {
        console.log(error);
        res.json({
            estado: false
        });
    }   
});
 // guardar usuarios asignados
 routes.post('/', async(req, res)=>{
     const body = req.body;
     try {
         const asignacionDB= new Asignacion(body);
         await asignacionDB.save();
         res.redirect('/roles');
     } catch (error) {
         console.log(error);
     }
 })
 


module.exports=routes;