function validUsers(data){
    const alerts = [];
    const {nombre, edad, email}=data;
     if(!nombre){
         alerts.push('Su nombre es obligatorio');
     }else  if(!validNombre(nombre)){
         alerts.push('su nombre debe ser valido');
     }
     if(!edad){
        alerts.push('Su edad es obligatorio');
    }else  if(!validEdad(edad)){
        alerts.push('su Edad debe ser valido');
    }
    if(!email){
        alerts.push('Su email es obligatorio');
    }else  if(!validEmail(email)){
        alerts.push('su Email debe ser valido');
    }

     if(!alerts.length){
         return {status:true, alerts}
     }else{
        return {status:false, alerts}
     }

     function validNombre(nombre){
         const res = /^[a-zA-Z]{2,15}$/;
         return res.test(nombre);
     }
     function validEdad(edad){
        const res = /^[0-9]{2,3}$/;
        return res.test(edad);
    }
    function validEmail(email){
        const res = /^[a-z0-9   !#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return res.test(email);
    }
  
}
module.exports={
    validUsers

}