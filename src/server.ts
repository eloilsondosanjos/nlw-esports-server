import express from "express"

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'Anúncio 1' },
    {id: 2, name: 'Anúncio 2' },
    {id: 3, name: 'Anúncio 3' },
    {id: 4, name: 'Anúncio 4' },
    {id: 5, name: 'Anúncio 5' },
  ])
})

app.listen(3333, () => {
  console.log('🚀 Server Esports started on port 3333!');
});