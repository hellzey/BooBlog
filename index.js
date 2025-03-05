 const express = require('express');
const app = express();

//plantilla de como hacer una ruta en express
// app.get('/', (req, res) => {
//   res.sendFile(`./pruebas/index.html`, {
//    root: __dirname
//       })
//   })



app.get('/', (req, res) => {
res.send('Hola mundo')
})

app.get('/si', (req, res) => {
  res.send('si jalo xdxdxd')
  })
  


app.use((req, res) => {
  res.status(404).send('404 no se encontró la ruta')
  })


app.listen (3000)
  console.log(`Server on port ${3000}`)