import express, { response, request } from 'express'; 

const app = express();

app.use(express.json());

const users = [
    'Yasmin',
    'Cleiton',
    'Jon',
    'Robson',
    'Evelyn'
];

app.get('/users', (request, response) => {
const search = String(request.query.search);

//como o proprio nome diz, isso é utilizado para filtrar os usuários
const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
   return response.json(filteredUsers);
});

 // GET by id
app.get('/users/:id', (request, response) => {
    
    /* Aqui o parâmetro é convertido em número. Originalmente o parâmetro é string, e se não houver essa conversão 
    o const user= users[id] fica com erro */ 

    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);

    const user ={
        name: data.name,
        email: data.email
    };
    // É uma boa prática colocar o return antes do response
    return response.json(user);
})

app.listen(3333);