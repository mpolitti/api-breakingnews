import express from 'express'

const app = express()

//rota

  //Método HTTP - CRUD (CREATE, READ, UPDATE, DELETE)

    //get - Pega uma informação
    //post - Cria uma informação
    //put - Altera uma informação
    //path - Altera parte de uma informação
    //delete - Apaga uma informação
  
  //Nome - Um identificador da rota

  //Função (Callback) - Responsável por executar algum comando/ação

app.get('/soma', (req, res) => {
  const soma = 100 + 1;
  res.send({soma: soma});
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})