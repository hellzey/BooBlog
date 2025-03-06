 const express = require('express');
const app = express();

//plantilla de como hacer una ruta en express
// app.get('/', (req, res) => {
//   res.sendFile(`./pruebas/index.html`, {
//    root: __dirname
//       })
//   })


// app.get('/', (req, res) => {
// res.send('Hola mundo')
// })


// app.use((req, res) => {
//   res.status(404).send('404 no se encontró la ruta')
//   })

//se cambia el get dependindo el tipo de peticion que se necesita
// app.get('/users', (req, res) => {
//   res.send(`lista de usuarios`)
//   })
  
// app.get('/', (req, res) => {
//   res.json({
//     nombre: 'Luis',
//     edad: 22,
//     ciudad: 'CDMX'})
//   })



//mandar un dato
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.post('/user', (req, res) => {
//   console.log(req.body)
//   res.send(`nuevo usuario creado `)
//   })

app.listen (3000)
  console.log(`Server on port ${3000}`)