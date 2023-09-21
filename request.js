const express = require('express')

const app = express()

app.get('/:user/:password', (req, res) => {
const {user,password} = req.params

if(user === 'carmen' && password ==='123'){
    res.json ({msg: 'Inicio de sesion exitoso'})
    return
}
res.json({msg:'Error en el usuario o la contraseña'})
})


/**
 * 
 * 
 * FUNCIONALIDAD
 * 
 *
 *  
 */
//http:/localhost:3000/user

app.listen(3000, () =>{
console.log('listening on port 3000')

})