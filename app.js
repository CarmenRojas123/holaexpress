const express = require('express')

const app = express()

app.get('/', (request, response) => {
response.send('HOLA GET hola')
})
app.get('/', (request, response) => {
    response.send('HOLA POST')
    })

/**
 * 
 * 
 * FUNCIONALIDAD
 * 
 *
 *  
 */

app.listen(3000, () =>{
console.log('listening on port 3000')

})